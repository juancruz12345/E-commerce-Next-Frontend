"use client"; // Hace que este componente se ejecute en el cliente

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { UserProvider } from "@/context/UserContext"; // Ajusta la ruta según la ubicación de UserContext

export function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>{children}</UserProvider>
    </QueryClientProvider>
  );
}
