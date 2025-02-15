'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function UserProfile({user}) {
  


  const [profile, setProfile] = useState(null)

  async function FetchData(){
    const response = await fetch(`http://localhost:5000/user/${user.id}`,{
        method : 'GET',
        credentials: 'include'
    })
    
    const data = await response.json()
    console.log(data.user)
    setProfile(data.user[0])
}

useEffect(()=>{
    
    FetchData()
  
},[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated user data to your backend
    console.log('Updated user:', user);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {
        profile!==null && 

        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={profile.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={''}
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