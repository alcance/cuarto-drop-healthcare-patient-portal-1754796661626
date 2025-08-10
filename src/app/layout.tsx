import './globals.css'

export const metadata = {
  title: 'cuarto-drop-healthcare-patient-portal-1754796661626 - Healthcare Portal',
  description: 'Dropit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}