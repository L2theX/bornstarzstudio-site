export const metadata = {
  title: 'Born Starz Studio',
  description: 'Official website for Born Starz Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
