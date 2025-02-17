"use client";
import { createContext, useContext } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const UserContext = createContext();

export function UserProvider({ children }) {
  const queryClient = useQueryClient();

  // ✅ Obtener usuario desde la API con cache
  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000", { credentials: "include" });
      if (!response.ok) throw new Error("Error al obtener el usuario");
      console.log('fetch cookies')
      return response.json();
    },
    staleTime: 1000 * 60 * 40, 
    cacheTime: 1000 * 60 * 60,
  });

  // ✅ Obtener perfil del usuario con cache
  const { data: profile } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      const response = await fetch(`http://localhost:5000/user/${user.id}`, { credentials: "include" });
      if (!response.ok) throw new Error("Error al obtener el perfil");
      console.log('fetch usuario')
      const data = await response.json();
      return data.user[0];
    },
    staleTime: 1000 * 60 * 40, 
    cacheTime: 1000 * 60 * 60,
    enabled: !!user, // Solo ejecuta la consulta si hay un usuario
  });

  // ✅ Mutación para actualizar la dirección del usuario
  const updateUser = useMutation({
    mutationFn: async ({ email, adress }) => { // Un solo argumento como objeto
      console.log(email, adress);
      const response = await fetch(`http://localhost:5000/user/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, adress }), // No es necesario email: email
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Error al actualizar el usuario");
      }
      console.log("usuario actualizado");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      queryClient.invalidateQueries(["profile", user?.id]);
    },
  });
  

  return (
    <UserContext.Provider value={{ profile, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
