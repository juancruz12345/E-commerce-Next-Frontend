'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckoutPaypal } from './CheckoutPaypal';

export function Checkout({ user,cartItems, total }) {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the payment and create the order
    console.log('Order placed:', { items: cartItems, total, shippingInfo });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={shippingInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            name="country"
            value={shippingInfo.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="zipCode">Zip Code</Label>
          <Input
            id="zipCode"
            name="zipCode"
            value={shippingInfo.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
        <Button type="submit">Place Order</Button>
        
      </form>
      <CheckoutPaypal user={user} items={cartItems} total={total} >Pagar con paypal</CheckoutPaypal>
    </div>
  );
}