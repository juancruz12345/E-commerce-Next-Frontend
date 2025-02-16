"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, CircleX } from "lucide-react";

export default function Verify({ params }) {
    const resolvedParams = use(params); // Se usa `use()` para desempaquetar `params`
    const { email } = resolvedParams; // Ahora `email` se puede acceder correctamente

    const [mensaje, setMensaje] = useState("Verificando...");
    const [verificado, setVerificado] = useState(false)

    useEffect(() => {
        if (!email) return;

        const verificarUsuario = async () => {
            try {
                const response = await fetch(`http://localhost:5000/verify/${email}`);
                const data = await response.json();

                if (data.success) {
                    setVerificado(true)
                    setMensaje("¡Verified account!");
                } else {
                   setVerificado(false)
                    setMensaje("Error to verified account.");
                }
            } catch (error) {
                setMensaje("Error to server connection.");
                console.error(error);
            }
        };

        verificarUsuario();
    }, [email]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <Card className="max-w-md w-full text-center shadow-lg">
          <CardHeader>
           {
            verificado
            ?  <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
            : <CircleX className="text-red-500 w-16 h-16 mx-auto"/>
           }
            <CardTitle className="text-2xl font-bold mt-4">{mensaje}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              className="mt-6 w-full bg-green-500 hover:bg-green-600"
              
            >
              <Link href="/login">Back to Login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
}
