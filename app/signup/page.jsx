'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SignUp() {
  const [hidden, setHidden] = useState(true);
  const [spanTxt, setSpanTxt] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.currentTarget[0].value;
    const username = e.currentTarget[1].value;
    const password = e.currentTarget[2].value;
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    fetch("http://localhost:5000/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    }).then((res) => {
      if (res.ok) {
        setHidden(false);
        setSpanTxt("Creating user...");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        e.preventDefault();
        setHidden(false);
        setSpanTxt("Error creating user...");
        setTimeout(() => {
          setHidden(true);
        }, 2000);
      }
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
              <Input id="register-email" type="email" minLength={6} maxLength={16} required className="mt-1" />
            </div>
            <div className="mb-4">
              <Label htmlFor="register-username">User</Label>
              <Input id="register-username" minLength={2} required className="mt-1" />
            </div>
            <div className="mb-4">
              <Label htmlFor="register-password">Password</Label>
              <Input id="register-password" type="password" minLength={6} maxLength={16} required className="mt-1" />
            </div>
            <Button type="submit" className="w-full">Sign Up</Button>
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
