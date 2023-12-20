import './globals.css'

export const metadata = {
  title: "Lukas Olivier's Blog",
  description: 'Read everything about Lukas Olivier, student at Howest Brugge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-white bg-gradient-to-r from-slate-950 to-zinc-900'>
      <body >{children}</body>
    </html>
  )
}
