'use client';
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getUserByEmail, requestPasswordReset } from "@/lib/actions/user.action";
import { handleError } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, OctagonAlertIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";


const formSchema = z.object({
  email: z.string().email(),
 
});

const forgetPasswordPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
         
        },
      });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const router = useRouter();
    const {data: session} = useSession();
    const [user, setUser] = useState<string | any>(null);
    useEffect(() => {
        const fetchUser = async () => {
            if (session?.user?.email) {
                try {
                    const fetchedUser = await getUserByEmail(session.user.email);
                    setUser(fetchedUser)
                } catch (error) {
                    console.error("Error fetching user:", error)
                }
            }
        };
        fetchUser();
    }, [session?.user?.email]
);
console.log(user);

const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    
    setStatus("loading");

    try {
 if (!data.email) {
     setStatus("error");
            setErrorMessage("Email is required");
            return;
 }
        await requestPasswordReset(data.email);
        setStatus("success")
    } catch (error: any) {
        setStatus("error")
       
        setErrorMessage(error.message)
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
                    Forgot Password ?
                  </h1>
                  <p className="text-muted-foreground text-balance">
                    Then, we will send you a link to reset your password
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
              

                {status === 'error' && (
                  <Alert className="bg-destructive/10 border-none">
                    <OctagonAlertIcon className="h-4 w-4 !text-destructive" />
                    <AlertTitle>{errorMessage}</AlertTitle>
                  </Alert>
                )}
               {status === 'success' && (
                <div className="mb-6"> We've sent a password reset link to your email: {form.getValues("email")}  </div>
               )}
                <Button disabled={status === "loading"} type="submit" className="w-full">
                 Send Reset Password Link
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
                
              </div >
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

export default forgetPasswordPage;