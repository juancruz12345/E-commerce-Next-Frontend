'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const initialProducts = [
  { id: 1, name: "Product 1", price: 19.99, description: "This is product 1" },
  { id: 2, name: "Product 2", price: 29.99, description: "This is product 2" },
  { id: 3, name: "Product 3", price: 39.99, description: "This is product 3" },
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
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>${product.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}