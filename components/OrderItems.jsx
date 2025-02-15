import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react"; // Icono de cierre

export function OrderItems({ orderId, onClose }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchOrderItems() {
      setLoading(true)
      try {
        const response = await fetch(`http://localhost:5000/order/${orderId}`)
        const data = await response.json()
        setItems(Array.isArray(data.orders) ? data.orders : [])
      } catch (error) {
        console.error("Error fetching order items:", error)
      } finally {
        setLoading(false)
      }
    }

    if (orderId) {
      fetchOrderItems()
    }
  }, [orderId])

  return (
    <Card className="mt-6 w-full max-w-2xl mx-auto shadow-lg border">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Order Details (ID: {orderId})</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-6">
            <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
          </div>
        ) : items.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.product_name}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-gray-500 text-center">No items found in this order.</p>
        )}
      </CardContent>
    </Card>
  );
}
