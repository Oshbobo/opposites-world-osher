export const metadata = {
  title: 'עולם ההפכים של אושר',
  description: 'משחק חינוכי לילדים ללימוד הפכים',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
