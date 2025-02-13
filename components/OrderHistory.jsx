'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialOrders = [
  { id: 1, date: '2023-06-01', total: 59.97, status: 'Delivered' },
  { id: 2, date: '2023-06-15', total: 89.98, status: 'Shipped' },
  { id: 3, date: '2023-06-30', total: 29.99, status: 'Processing' },
];

export function OrderHistory() {
  const [orders, setOrders] = useState(initialOrders);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}