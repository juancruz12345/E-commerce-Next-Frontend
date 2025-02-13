'use client'



import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';


export default function Index() {
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Welcome to our e-commerce.</CardTitle>
        </CardHeader>
        
        <CardContent>
        <CardDescription className='text-center'>
        You must have an account to log in.
          </CardDescription>
        </CardContent>
        <CardFooter className="flex-col">
        <div className="flex-col mt-4 text-center text-sm space-y-2">
        ¿Do you have an account? 
        <br></br>
            <Button>
            <Link href="/login">
           Log in
            </Link>
            </Button>
          </div>
          <div className="flex-col mt-4 text-center text-sm space-y-2">
        ¿You dont have an account? 
        <br></br>
            <Button>
            <Link href="/signup">
           Sign up
            </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}