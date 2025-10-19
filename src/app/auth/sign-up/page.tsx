'use client';

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { OctagonAlertIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "@/lib/actions/user.action";


const formSchema = z
  .object({
    firstName: z.string().min(1, { message: "Write your firstName" }),
 lastName: z.string().min(1, { message: "Write your lastName" }).optional(),

    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password should contain at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password should contain at least 8 characters" }),
    
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
const SignUp = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
       
    })
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();





  


 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      

      
    },
  });
    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
  setError(null);
  setIsLoading(true);

  try {
    // ✅ Use `data` directly — it's fresh and validated!
    const createdUser = await createUser({
      firstName: data.firstName,
      lastName: data.lastName || "",
      email: data.email,
      password: data.password,
   
    });
    console.log(createdUser);
     
    router.push("/");
  } catch (error) {
    setError("An unexpected error occurred. Please try again.");
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};


    return (
         <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                 <h1 className="text-2xl font-bold">
  Create your KazDrugLab account
</h1>
<p className="text-muted-foreground text-balance">
  Sign up to get started.
</p>
                </div>
                 <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="firstName"
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
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="lastName"
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
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Confirm Password"
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
                  Sign Up
                </Button>
               
                

                <div className="text-center text-sm ">
                 Already have an account? {""}
                  <Link
                    href="/auth/sign-in"
                    className="underline underline-offset-4"
                  >
                    Log In
                  </Link>
                </div>
                
              </div>
            </form>

        {/**Image section */}

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

export default SignUp;