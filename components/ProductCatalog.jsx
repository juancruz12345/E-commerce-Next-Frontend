'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from 'lucide-react';

const initialProducts = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 79.99, 
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Electronics"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 199.99, 
    description: "Feature-packed smartwatch with health tracking capabilities",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    category: "Electronics"
  },
  { 
    id: 3, 
    name: "Leather Wallet", 
    price: 49.99, 
    description: "Genuine leather wallet with multiple card slots",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0fGVufDB8fDB8fHww",
    category: "Accessories"
  },
];

export function ProductCatalog({ onAddToCart, searchTerm }) {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Product Catalog</h2>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute top-2 right-2 bg-blue-500">{product.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-green-600">
                    ${product.price.toFixed(2)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </div>
              <CardFooter className="mt-4">
                <Button 
                  onClick={() => handleAddToCart(product)} 
                  className="w-full text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}