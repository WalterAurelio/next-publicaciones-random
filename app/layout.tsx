import React from "react";

export const metadata = {
  title: 'Publicaciones Random',
  description: 'Esta es un sitio de práctica de Next.js'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}