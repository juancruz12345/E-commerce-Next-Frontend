'use client'

import { useState } from 'react'
import { SidebarNav } from "@/components/sidebar-nav"
import { Header } from "@/components/header"
import { CategoryFilter } from "@/components/category-filter"
import { FoodGrid } from "@/components/food-grid"
import { Cart } from "@/components/cart"
import { Footer } from "@/components/footer"
import { MenuSection } from "@/components/MenuSection"
import { TableSection } from "@/components/TableSection"
import { ReservationSection } from "@/components/ReservationSection"
import { DeliverySection } from "@/components/DeliverySection"
import { AccountingSection } from "@/components/AccountingSection"
import { SettingsSection } from "@/components/SettingsSection"

export default function POSPage() {
  const [cartItems, setCartItems] = useState([])
  const [activeSection, setActiveSection] = useState("MenuSection")

  const handleAddToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.title === item.title)
      if (existingItem) {
        return prevItems.map(i => 
          i.title === item.title ? { ...i, quantity: item.quantity } : i
        )
      } else {
        return [...prevItems, item]
      }
    })
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case "MenuSection":
        return (
          <>
            <CategoryFilter />
            <FoodGrid onAddToCart={handleAddToCart} />
          </>
        )
      case "TableSection":
        return <TableSection />
      case "ReservationSection":
        return <ReservationSection />
      case "DeliverySection":
        return <DeliverySection />
      case "AccountingSection":
        return <AccountingSection />
      case "SettingsSection":
        return <SettingsSection />
      default:
        return <MenuSection />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarNav onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-auto p-4">
            {renderActiveSection()}
          </main>
          {activeSection === "MenuSection" && <Cart cartItems={cartItems} onUpdateCart={setCartItems} />}
        </div>
        <Footer />
      </div>
    </div>
  )
}