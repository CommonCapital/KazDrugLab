'use client';

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { OctagonAlertIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});
const SignIn = () => {
    
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
     
       setError(null);
       setIsLoading(true);
       
       

       try {
        const result = await signIn("credentials", {
redirect: false,
email: data.email,
password: data.password,
        })

        if (result?.error) {
            console.error("Sign-in error:", result.error)
            setError(result?.error);
           
        } else {
            router.push("/");
        }


       } catch (error) {
        setError("An unexpected error occurred. Please try again.");
       console.error(error);
       
       } finally {
 setIsLoading(false);
       }
    }


    return (
         <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">
                    Welcome back to KazDrugLab!
                  </h1>
                  <p className="text-muted-foreground text-balance">
                    Login to your account to proceed.
                  </p>
                </div>
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="email@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {!!error && (
                  <Alert className="bg-destructive/10 border-none">
                    <OctagonAlertIcon className="h-4 w-4 !text-destructive" />
                    <AlertTitle>{error}</AlertTitle>
                  </Alert>
                )}

                <Button disabled={isLoading} type="submit" className="w-full">
                  Sign In
                </Button>
               
                

                <div className="text-center text-sm ">
                  Don't have an account? {""}
                  <Link
                    href="/auth/sign-up"
                    className="underline underline-offset-4"
                  >
                    Create an account
                  </Link>
                </div>
               {/**   <div className="text-center text-sm ">
                     <Link
                    href="/forget-password"
                    className="underline underline-offset-4"
                  >
                    Forgot password?
                  </Link>
                 </div>*/}
              </div>
            </form>
          </Form>
          <div className="bg-radial from-indigo-500 via-purple-500 to-pink-500 relative hidden md:flex flex-col gap-y-4 items-center justify-center">
            <img src="/KazDrugLab-removebg-preview.png" alt="Image" className="h-[250px] w-[250px]" />
          </div>
        </CardContent>
      </Card>

      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>
      </div>
    </div>
    )

}

export default SignIn;