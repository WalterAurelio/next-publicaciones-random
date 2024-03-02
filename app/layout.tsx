import React from "react";
import './globals.css';

export const metadata = {
  title: 'Publicaciones Random',
  description: 'Esta es un sitio de práctica de Next.js'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <h1 className="text-[4rem] text-center mb-6">Publicaciones random Next.js</h1>

        {children}
      </body>
    </html>
  );
}