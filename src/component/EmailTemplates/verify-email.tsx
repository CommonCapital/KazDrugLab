import * as React from 'react';


interface VerifyEmailTemplateProps {
    firstName: string,
    verificationUrl: string,
} 


export const VerifyEmailTemplate: React.FC<Readonly<VerifyEmailTemplateProps>> = ({firstName, verificationUrl}) => (
 <div style={{fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#f9f9f9"}}>
<h1 className='font-bold text-lg sm:text-xl'>Welcome, {firstName}!</h1>
<p className='font-semibold text-sm sm:text-xs'>
    Welcome to KazDrugLab--an innovative AI-powered platform designed to facilitate drug discovery and research. To get started, verify your email address by clicking the link below:
</p>
<a href={verificationUrl} style={{color: "#007bff", textDecoration: "none", fontWeight: "bold", display: "inline-block", marginTop: "15px", padding: "10px 15px", backgroundColor: "#e7f1ff", borderRadius: "5px"}}>
    Verify Email
</a>

    </div>
)