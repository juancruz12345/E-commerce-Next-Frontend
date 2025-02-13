'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2 } from 'lucide-react';

export function ShoppingCart({ cartItems, onUpdateCart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    onUpdateCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    onUpdateCart(updatedCart);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>
                <input 
                  type="number" 
                  min="1" 
                  value={item.quantity} 
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 p-1 border rounded"
                />
              </TableCell>
              <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
              <TableCell>
                <Button variant="ghost" onClick={() => removeItem(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 text-right">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
      <Button className="mt-4">Proceed to Checkout</Button>
    </div>
  );
}