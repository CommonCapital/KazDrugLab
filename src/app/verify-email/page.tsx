'use client';
import { verifyEmail } from "@/lib/actions/user.action";
import { CircleCheckBig } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, {useState, useEffect} from "react";
const VerifyEmailPage = () => {
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const router = useRouter();
    useEffect(() => {

        const verifyUserEmail = async () => {
  if (token) {
            try {
                await verifyEmail(token);
                setStatus("success");

            } catch (error) {
                console.error(error);
                setStatus("error");
            }
        } else {
            setStatus("error");

        }
        };

        verifyUserEmail();
      
    }, [token]);



    return (
        <div className="mt-20 h-screen text-center">
            <span className="mt-15 inline-block">

                <CircleCheckBig size={60} />

            </span>

            {status === "loading" && <p>Verifying your email...</p>}
            {status === "success" && ( <>
                <p>Email verified successfully!</p>
                <button onClick={() => router.push("/")}
                    className="mt-4 rounded-lg bg-primary p-3 text-white"
                    >
                     Next 
                </button>
        </>
        )}
        {status === "error" && <p>Email verification failed</p>}
            
        </div>
    )
}

export default VerifyEmailPage;