import * as React from 'react';
interface ResetPasswordTemplateProps {
    firstName: string,
    resetUrl: string,
}

export const ResetPasswordTemplate: React.FC<Readonly<ResetPasswordTemplateProps>> = ({
    firstName, resetUrl
}) => (
    <div style={{fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#f9f9f9"}}>
<h1 className='font-bold text-lg sm:text-xl'>Greetings, {firstName}!</h1>
<p className='font-semibold text-sm sm:text-xs'>
    It looks like you requested a password reset. Click the reset link below to set a new password:
</p>
<a href={resetUrl} style={{color: "#007bff", textDecoration: "none", fontWeight: "bold", display: "inline-block", marginTop: "15px", padding: "10px 15px", backgroundColor: "#e7f1ff", borderRadius: "5px"}}>
    Reset Password
</a>

    </div>
)

