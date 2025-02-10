'use client';

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { CreditCard, QrCode, Banknote, Edit2 } from 'lucide-react'

export function Cart({ cartItems, onUpdateCart }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    setTotal(newTotal)
  }, [cartItems])

  const tax = total * 0.05
  const grandTotal = total + tax

  return (
    <div className="w-[380px] bg-white border-l flex flex-col h-full">
      <div className="p-4 border-b flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Table 4</h2>
          <p className="text-sm text-gray-500">Floyd Miles</p>
        </div>
        <Button variant="ghost" size="icon">
          <Edit2 className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex-1 overflow-auto p-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg"
              alt={item.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="text-sm font-medium">{item.title}</h4>
              <div className="flex justify-between items-center mt-1">
                <span className="text-green-600 font-bold">${item.price.toFixed(2)}</span>
                <span className="text-sm text-gray-500">{item.quantity}X</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t p-4">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Sub Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax 5%</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total Amount</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Button variant="outline" className="flex flex-col items-center py-2">
            <Banknote className="h-5 w-5 mb-1" />
            <span className="text-xs">Cash</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center py-2">
            <CreditCard className="h-5 w-5 mb-1" />
            <span className="text-xs">Credit/Debit Card</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center py-2">
            <QrCode className="h-5 w-5 mb-1" />
            <span className="text-xs">QR Code</span>
          </Button>
        </div>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12">Place Order</Button>
      </div>
    </div>
  )
}