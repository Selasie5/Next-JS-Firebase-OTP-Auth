import React from 'react'
import OtpLogin from '@/components/OtpLogin'

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center py-5">
      <h1 className="font-bold">Welcome to the Next JS Firebase OTP-Demo</h1>
      <OtpLogin/>
      </main>
  )
}

export default page