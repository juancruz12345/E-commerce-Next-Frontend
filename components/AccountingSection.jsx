import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const payments = [
  { id: "TXN001", date: "2024-02-10", method: "Tarjeta", amount: "$25.00", status: "Pagado" },
  { id: "TXN002", date: "2024-02-10", method: "Efectivo", amount: "$40.00", status: "Pendiente" },
  { id: "TXN003", date: "2024-02-09", method: "PayPal", amount: "$15.50", status: "Rechazado" },
];

export function AccountingSection() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Historial de Pagos</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID de Transacción</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Método de Pago</TableHead>
            <TableHead>Monto</TableHead>
            <TableHead>Estado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>{payment.method}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{payment.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
