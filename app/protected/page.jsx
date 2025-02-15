'use client'

import { useState, useEffect } from 'react'
import { SidebarNav } from "@/components/sidebar-nav"
import { Header } from "@/components/header"
import { ProductCatalog } from "@/components/ProductCatalog"
import { ShoppingCart } from "@/components/ShoppingCart"
import { OrderHistory } from "@/components/OrderHistory"
import { UserProfile } from "@/components/UserProfile"
import { Checkout } from "@/components/Checkout"
import { SettingsSection } from '@/components/SettingsSection'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function POSPage() {
  const [cartItems, setCartItems] = useState([]);
  const [activeSection, setActiveSection] = useState("ProductCatalog");
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  async function FetchData(){
    const response = await fetch('http://localhost:5000',{
        method : 'GET',
        credentials: 'include'
    })
    
    const data = await response.json()
    setUser(data)
  }

  useEffect(() => {
    FetchData()
  }, [])

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "ProductCatalog":
        return <ProductCatalog onAddToCart={handleAddToCart} searchTerm={searchTerm}/>;
      case "ShoppingCart":
        return <ShoppingCart cartItems={cartItems} onUpdateCart={handleUpdateCart} setActiveSection={setActiveSection} />;
      case "OrderHistory":
        return <OrderHistory user={user}/>;
      case "UserProfile":
        return <UserProfile user={user}/>;
      case "Checkout":
        return <Checkout user={user} cartItems={cartItems} total={cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} />;
      case "SettingsSection":
        return <SettingsSection user={user}/>
      default:
        return <ProductCatalog onAddToCart={handleAddToCart} searchTerm={searchTerm}/>;
    }
  };

  return (
    <div>
      {user !== null ? (
        <div className="flex flex-col h-screen bg-gray-100 md:flex-row">
          <SidebarNav 
            onSectionChange={setActiveSection} 
            activeSection={activeSection} 
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header onSearch={handleSearch} setActiveSection={setActiveSection} cartItems={cartItems}>
              <Button 
                variant="ghost" 
                className="md:hidden mr-2" 
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </Header>
            <main className="flex-1 overflow-auto p-4">
              {renderActiveSection()}
            </main>
          </div>
        </div>
      ) : (
        <h3 className='text-center p-4'>Cargando usuario</h3>
      )}
    </div>
  );
}