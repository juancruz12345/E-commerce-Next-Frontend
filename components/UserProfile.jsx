'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from 'sonner';

export function UserProfile({user}) {
  


  const [profile, setProfile] = useState(null)

  async function FetchData(){
    const response = await fetch(`http://localhost:5000/user/${user.id}`,{
        method : 'GET',
        credentials: 'include'
    })
    
    const data = await response.json()
    setProfile(data.user[0])
}

async function updateUser(updatedData) {
  try {
    const response = await fetch(`http://localhost:5000/user/${profile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al actualizar el usuario");
    }

    
    toast.success('Usuario actualizado con éxito!');
    setProfile(prev => ({ ...prev, ...updatedData }));
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    toast.error(error.message);
  }
}


useEffect(()=>{
    
    FetchData()
  
},[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevUser => ({
      ...prevUser,
      [name]: value
    }));
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!profile) {
      toast.error("El perfil no está cargado.");
      return;
    }
    updateUser({ email: profile?.email, adress: profile?.adress })
    console.log('Updated user:', user);
    
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {
        profile!==null && 

        <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue={profile.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="adress"
            defaultValue={profile?.adress}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Update Profile</Button>
      </form>
      }
     
    </div>
  );
}