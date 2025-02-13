'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Login() {
  const [hidden, setHidden] = useState(true);
  const [spanTxt, setSpanTxt] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.currentTarget[0].value;
    const password = e.currentTarget[1].value;
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    fetch("http://localhost:5000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        setHidden(false);
        setSpanTxt("Login...");
        setTimeout(() => {
          window.location.href = "/protected";
        }, 2000);
      } else {
        e.preventDefault();
        setHidden(false);
        setSpanTxt("Login error...");
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
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form noValidate onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="register-username">User</Label>
              <Input id="register-username" minLength={2} required className="mt-1" />
            </div>
            <div className="mb-4">
              <Label htmlFor="register-password">Password</Label>
              <Input id="register-password" type="password" minLength={6} maxLength={16} required className="mt-1" />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
          <div className="mt-2 text-center text-sm">
            <span className={`text-red-500 ${hidden ? "hidden" : "block"}`}>{spanTxt}</span>
          </div>
          <div className="mt-4 text-center text-sm">
            <Link href="/signup" className="text-blue-600 hover:underline">
            ¿You don't have an account? Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
