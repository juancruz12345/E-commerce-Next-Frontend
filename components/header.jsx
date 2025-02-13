'use client';

import { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react'
import { Input } from "@/components/ui/input"
import Link from 'next/link';

export function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="bg-white p-4 flex items-center gap-4 border-b">
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
      <ShoppingCart></ShoppingCart>
    </div>
  );
}
