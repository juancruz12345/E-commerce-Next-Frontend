'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Lock, User } from 'lucide-react'
import { useToken } from '@/hooks/useToken';
import { toast } from 'sonner';
import { useUserContext } from '@/context/UserContext';

export function SettingsSection({ user }) {


const {logout} = useToken()
const [profile, setProfile] = useState(user)
const {updateUser} = useUserContext()

const handleUpdate = ({ email, adress }) => {
  updateUser.mutate(
    { email, adress }, 
    {
      onSuccess: () => {
        toast.success("Dirección actualizada correctamente!");
      },
      onError: (error) => {
        toast.error("Error actualizando dirección:", error.message);
      },
    }
  );
};



async function deleteUser() {
  try {
    const response = await fetch(`http://localhost:5000/user/${user.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
      
    });

    const data = await response.json();
    console.log(data)
    if (!response.ok) {
      throw new Error(data.message || "Error al eliminar el usuario");
    }

    
    toast.success('Usuario eliminado');
    setTimeout(() => {
      logout()
    }, 2000);
  } catch (error) {
    console.error("Error:", error.message);
    toast.error(error.message);
  }
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevUser => ({
      ...prevUser,
      [name]: value
    }));
   
  };

  const saveChange = () => {
    

    if (!profile) {
      toast.error("El perfil no está cargado.");
      return;
    }
    console.log(profile?.email)
    console.log(profile?.adress)
    handleUpdate({ email: profile?.email, adress: profile?.adress })
    
    
  };


  

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
  });

  

  const handleNotificationChange = (setting) => {
    setNotificationSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
  };



  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Settings</h2>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account"><User></User> Account</TabsTrigger>
          <TabsTrigger value="notifications"><Bell></Bell> Notifications</TabsTrigger>
          
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
    
            <div className='space-y-2'>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue={profile?.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="adress"
            defaultValue={profile?.adress}
            onChange={handleChange}
            required
          />
        </div>
            </CardContent>
            <CardFooter className='flex items-center justify-between'>
          
              <Button onClick={saveChange}>Save Changes</Button>
              
              <Button  variant="destructive" onClick={deleteUser}>Delete user</Button>
            </CardFooter>
      
          </Card>
        </TabsContent>



        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle><Bell></Bell> Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={notificationSettings.emailNotifications}
                  onCheckedChange={() => handleNotificationChange('emailNotifications')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications on your devices</p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={notificationSettings.pushNotifications}
                  onCheckedChange={() => handleNotificationChange('pushNotifications')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                </div>
                <Switch
                  id="sms-notifications"
                  checked={notificationSettings.smsNotifications}
                  onCheckedChange={() => handleNotificationChange('smsNotifications')}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleSave('notifications')}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
       
      </Tabs>
    </div>
  );
}