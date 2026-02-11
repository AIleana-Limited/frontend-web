
'use client'
import SupportAuthSlider from "@/components/support/auth/SupportAuthSlider"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <div className="grid h-screen lg:grid-cols-2 lg:p-6 p-2 bg-background">
      <div className="bg-muted hidden relative md:block">
       <SupportAuthSlider />
      </div>
      <div className="flex flex-col  gap-4 p-6 md:p-10 overflow-y-auto hide-scrollbar">

        <div className="flex flex-1 items-center justify-center ">
          <div className="w-full max-w-lg">
                    {children}
          </div>
        </div>
      </div>
    </div>
  )
}