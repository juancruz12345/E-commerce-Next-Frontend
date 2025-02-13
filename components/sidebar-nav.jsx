'use client';

import { useState } from 'react';
import { Menu, TableIcon, CalendarRange, Truck, Calculator, Settings, LogOut, ShoppingCart, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useToken } from '@/hooks/useToken';

const navItems = [
  { icon: Menu, label: "Menu", color: "text-gray-600", component: "MenuSection" },
  { icon: User, label: "Profile", color: "text-gray-600", component: "UserProfile" },
  { icon: TableIcon, label: "Product Catalog", color: "text-gray-600", component: "ProductCatalog" },
  { icon: ShoppingCart, label: "Cart", color: "text-gray-600", component: "ShoppingCart" },
  { icon: Truck, label: "Delivery", color: "text-gray-600", component: "DeliverySection" },
  { icon: Calculator, label: "Order History", color: "text-gray-600", component: "OrderHistory" },
  { icon: Settings, label: "Settings", color: "text-gray-600", component: "SettingsSection" },
]

export function SidebarNav({ onSectionChange, activeSection }) {
  const {logout} = useToken()

  const handleSectionClick = (section) => {
    onSectionChange(section);
  };

  return (
    <div className="w-64 p-4 border-r h-screen bg-white">
      <div className="flex items-center gap-2 mb-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg"
          alt="Chili POS Logo"
          className="w-8 h-8"
        />
        <span className="font-semibold">E-commerce</span>
      </div>
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <Button 
            key={index} 
            variant={activeSection === item.component ? "secondary" : "ghost"} 
            className={`w-full justify-start ${item.color}`}
            onClick={() => handleSectionClick(item.component)}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>
      <Button onClick={logout} variant="ghost" className="justify-start mt-auto text-gray-600 absolute bottom-4 left-4">
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </div>
  )
}