import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { resetPassword } from "@/lib/actions/user.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { OctagonAlertIcon } from "lucide-react";
import { useScroll } from "motion/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {  useForm } from "react-hook-form";
import z from "zod";
const formSchema = z
  .object({
   
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


  const ResetPasswordPage = () => {
     const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          
         
          password: "",
          confirmPassword: "",
        
    
          
        },
      });
      const [error, setError] = useState<string|null>(null);
      const [success, setSuccess] = useState<boolean>(false);
      const [isLoading, setIsLoading] = useState<boolean>(false);
      const router = useRouter();
      const searchParams = useSearchParams();
      const token = searchParams.get("token");

      const handleSubmit = async (data: z.infer<typeof formSchema>) => {
        setError(null);
        setIsLoading(true);
        if (!data.password || !data.confirmPassword) {
            setError("Please fill in all fields");
            setIsLoading(false);
            return;
        }

        try {
            await resetPassword(token!, data.password);
            setSuccess(true);
            setTimeout(() => {
                router.push("/auth/sign-in");
            }, 3000);
        } catch (error) {
            
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
  Reser Password
</h1>
<p className="text-muted-foreground text-balance">
  Please enter your new password.
</p>
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
                 Don't have an account? {""}
                  <Link
                    href="/auth/sign-up"
                    className="underline underline-offset-4"
                  >
                    Sign Up
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

  export default ResetPasswordPage