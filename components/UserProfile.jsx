'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function UserProfile({user}) {
  console.log(user)
  const [user2, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St, City, Country',
  });

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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={user2.name}
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
            value={user2.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={user2.address}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Update Profile</Button>
      </form>
    </div>
  );
}