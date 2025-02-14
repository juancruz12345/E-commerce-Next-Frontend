'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react"


export default function SignUp() {
  const [hidden, setHidden] = useState(true);
  const [spanTxt, setSpanTxt] = useState("");
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const email = e.currentTarget[0].value
    const username = e.currentTarget[1].value
    const password = e.currentTarget[2].value
    const form = e.currentTarget

    if (form.checkValidity() === false) {
        e.stopPropagation()
        setLoading(false)
        return
    }

    setValidated(true)

    
    const isValid = await validateEmail(email);
    if (!isValid) {
        setHidden(false);
        setSpanTxt("Email inválido. Introduce un email real.");
        setLoading(false);
        return;
    }

   
    fetch("http://localhost:5000/register", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
    })
    .then(async (res) => {
        const data = await res.json()
        setHidden(false)
        if (res.ok) {
            setSpanTxt("Registro exitoso, revisa tu correo para verificar tu cuenta.");
            sendEmail(email, username)
        } else {
            setSpanTxt(data.error || "Ocurrió un error inesperado.");
        }
    })
    .catch(() => setSpanTxt("Error en la solicitud. Inténtalo de nuevo."))
    .finally(() => setLoading(false));
};




const validateEmail = async (email) => {
  
  const url = `https://apilayer.net/api/check?access_key=${process.env.NEXT_PUBLIC_API_KEY_MAILBOXLAYER}&email=${email}`;

  try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      
      // Verifica si el email tiene un formato válido y existe en el servidor
      return data.format_valid && data.mx_found
  } catch (error) {
      console.log("Error validando el email:", error);
      return false;
  }
};



  const sendEmail = async(userEmail, userName) => {

    const templateParams = {
        to_email:userEmail,
        user_name: userName,
        user_email: userEmail,
        verification_link: `http://localhost:3000/verify/${userEmail}`,
    }


    emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,   // Reemplázalo con tu Service ID
        process.env.NEXT_PUBLIC_TEMPLATE_ID,  // Reemplázalo con tu Template ID
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY   // Reemplázalo con tu Public Key
    )
    .then((response) => {
        console.log("Email enviado con éxito:", response);
        console.log("Código de estado:", response.status); // Código de estado HTTP (200 si es exitoso)
        console.log("Texto de respuesta:", response.text); // "OK" si fue exitoso
    })
    .catch((error) => {
        console.log("Error enviando email:", error);
    });
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form noValidate onSubmit={handleSubmit}>
          <div className="mb-4">
              <Label htmlFor="register-password">Email</Label>
              <Input id="register-email" type="email" minLength={6} required className="mt-1" />
            </div>
            <div className="mb-4">
              <Label htmlFor="register-username">User</Label>
              <Input id="register-username" minLength={2} required className="mt-1" />
            </div>
            <div className="mb-4">
              <Label htmlFor="register-password">Password</Label>
              <Input id="register-password" type="password" minLength={6} maxLength={16} required className="mt-1" />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ?  <Loader2 className="animate-spin" /> : "Sign Up"}
            </Button>
          </form>
          <div className="mt-2 text-center text-sm">

            <span className={`text-red-500 ${hidden ? "hidden" : "block"}`}>{spanTxt}</span>
          </div>
          <div className="mt-4 text-center text-sm">
            <Link href="/login" className="text-blue-600 hover:underline">
          ¿Do you have an account? Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
