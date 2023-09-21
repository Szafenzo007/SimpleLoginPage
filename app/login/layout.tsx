import LoginNav from "@/components/LoginNav"


export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="">
            <LoginNav />
            {children}</body>
      </html>
    )
  }