'use client';

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from 'lucide-react'

export function FoodCard({ image, title, price, discount, type, onAddToCart }) {
  const [quantity, setQuantity] = useState(0)

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
    onAddToCart({ title, price, type, quantity: quantity + 1 })
  }

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1)
      onAddToCart({ title, price, type, quantity: quantity - 1 })
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-40 object-cover" />
        {discount && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-md text-xs font-medium">
            {discount}% Off
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium mb-1">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-600 font-bold">${price.toFixed(2)}</span>
          <div className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${type === "Veg" ? "bg-green-500" : "bg-red-500"}`}></span>
            <span className="text-xs text-gray-500">{type}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button variant="outline" size="icon" className="rounded-full" onClick={decrementQuantity}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="font-medium">{quantity}</span>
          <Button variant="outline" size="icon" className="rounded-full" onClick={incrementQuantity}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}