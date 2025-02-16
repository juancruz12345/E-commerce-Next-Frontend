'use client';


import { Menu, TableIcon, ShoppingBasket, Truck, Calculator, Settings, LogOut, ShoppingCart, User, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useToken } from '@/hooks/useToken';


const navItems = [
  
  { icon: User, label: "Profile", color: "text-gray-600", component: "UserProfile" },
  { icon: TableIcon, label: "Product Catalog", color: "text-gray-600", component: "ProductCatalog" },
  { icon: ShoppingCart, label: "Cart", color: "text-gray-600", component: "ShoppingCart" },
  { icon: Truck, label: "Delivery", color: "text-gray-600", component: "DeliverySection" },
  { icon: Calculator, label: "Order History", color: "text-gray-600", component: "OrderHistory" },
  { icon: Settings, label: "Settings", color: "text-gray-600", component: "SettingsSection" },
]

export function SidebarNav({ onSectionChange, activeSection, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const {logout} = useToken()

  const handleSectionClick = (section) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 p-4 border-r bg-white transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <ShoppingBasket></ShoppingBasket>
          <span className="font-semibold">E-commerce</span>
        </div>
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <X className="h-6 w-6" />
        </Button>
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