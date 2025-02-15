'use client';

import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { OrderItems } from './OrderItems';
import { Loader2 } from 'lucide-react';



export function OrderHistory({user}) {
  


  const [orders, setOrders] = useState(null)
  const [selectedOrderId, setSelectedOrderId] = useState(null)
  const [loading, setLoading] = useState(false)
  
    async function FetchData(){
      setLoading(true)
      try{
        const response = await fetch(`http://localhost:5000/orders/${user.id}`)
        const data = await response.json()
        console.log(data)
        setOrders(Array.isArray(data.orders) ? data.orders : [])
      }
      catch(error){
        console.error("Error fetching order items:", error)
      }
      finally{
        setLoading(false)
      }
      
  }
  
  useEffect(()=>{
      
      FetchData()
    
  },[])

  


  return (
    <div>
     <div>
  <h2 className="text-2xl font-bold mb-4">Order History</h2>
  {loading ? (
          <div className="flex justify-center py-6">
            <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
          </div>
        )
      
        :
        orders?.length>0 ? (orders?.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment Method</TableHead>
               
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders?.map((order) => (
                <TableRow key={order.order_id} className="cursor-pointer hover:bg-gray-200"
                onClick={() => setSelectedOrderId(order.order_id)}>
                  <TableCell>{order.order_id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.payment_method}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-gray-500">No hay órdenes registradas.</p>
        ))
        : <p className="text-gray-500">No hay órdenes registradas.</p>
   }
  
</div>

{selectedOrderId && <OrderItems orderId={selectedOrderId} onClose={() => setSelectedOrderId(null)}/>}

    </div>
  );
}