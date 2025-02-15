'use client';

import { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function Header({ onSearch, children, setActiveSection, cartItems }) {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(cartItems)
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="bg-white p-4 flex items-center gap-4 border-b">
      {children}
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search Product here..."
          className="pl-10 w-full"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="relative inline-block cursor-pointer" onClick={()=>{setActiveSection('ShoppingCart')}}>
      {/* Ícono del carrito */}
      <ShoppingCart className="w-6 h-6" />

      {/* Badge con el número de items */}
      {cartItems.length > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartItems.length}
        </div>
      )}
    </div>
    </div>
  );
}