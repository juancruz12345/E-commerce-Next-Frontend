"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";

export default function Verify({ params }) {
    const resolvedParams = use(params); // Se usa `use()` para desempaquetar `params`
    const { email } = resolvedParams; // Ahora `email` se puede acceder correctamente

    const [mensaje, setMensaje] = useState("Verificando...");

    useEffect(() => {
        if (!email) return;

        const verificarUsuario = async () => {
            try {
                const response = await fetch(`http://localhost:5000/verify/${email}`);
                const data = await response.json();

                if (data.success) {
                    setMensaje("✅ Tu cuenta ha sido verificada con éxito.");
                } else {
                    setMensaje("❌ Hubo un problema verificando tu cuenta.");
                }
            } catch (error) {
                setMensaje("❌ Error al conectar con el servidor.");
                console.error(error);
            }
        };

        verificarUsuario();
    }, [email]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>{mensaje}</h2>
            <h3 style={{ color: "blue", marginTop: "10px" }}>
                <Link href="/login">Back to login</Link>
            </h3>
        </div>
    );
}
