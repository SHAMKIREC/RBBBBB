'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
      language="ru"
    >
      {children}
    </GoogleReCaptchaProvider>
  )
} 