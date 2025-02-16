'use client';

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckoutPaypal } from './CheckoutPaypal';
import { toast } from 'sonner';
import { useUserContext } from '@/context/UserContext';

export function Checkout({ user,cartItems, total }) {

  const [showCheck, setShowCheck] = useState(false)
  const [adress, setAdress] = useState('')
  const {updateUserAddress} = useUserContext()
  
  
  const handleUpdateAddress = () => {
    updateUserAddress.mutate(adress, {
      onSuccess: () => {

        toast.success("Dirección actualizada correctamente!")
      },
      onError: (error) => {
        toast.error("Error actualizando dirección:", error.message)
      },
    })
  }
  

  const handleChange = (e) => {
    const inputAddress = e.target.value
    setAdress(inputAddress)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    handleUpdateAddress()
  }
  useEffect(()=>{
    console.log('address update', adress)
  },[user?.adress])
  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            defaultValue={user?.adress}
            onChange={handleChange}
            required
            minLength={3}
          />
        </div>
       
        <div>
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
       <div>
       <Button className="mt-4" type="submit">Update address</Button>
       </div>
       </form>
       <div>
       <Button className="mt-4" disabled={user.adress===null} onClick={()=>{setShowCheck(true)}}>Pagar con paypal</Button>
       </div>
 
     {
      showCheck 
      ?  <CheckoutPaypal user={user} items={cartItems} total={total} ></CheckoutPaypal>
      : <></>
     }
    </div>
  );
}