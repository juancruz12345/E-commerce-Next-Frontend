import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PagoExitoso() {


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardHeader>
          <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
          <CardTitle className="text-2xl font-bold mt-4">¡Payment successful!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Your payment has been processed successfully.</p>
          <p className="text-gray-600 mt-2">You can view your purchase details in the app, under the order history tab.</p>
          <Button
            className="mt-6 w-full bg-green-500 hover:bg-green-600"
            
          >
            <Link href="/protected">Volver al inicio</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}