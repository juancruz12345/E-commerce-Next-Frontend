import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SuccessPayment(){

    return(
        <div>
            <h1>Pago exitoso</h1>
            <Link href={'/protected'}>Volver al inicio</Link>
        </div>

    )
}