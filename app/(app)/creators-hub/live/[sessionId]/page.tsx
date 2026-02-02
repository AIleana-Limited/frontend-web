'use client'
import LiveSessionPage from "@/features/live/LiveSessionPage";
import { ArrowLeft } from "lucide-react";
import { useRouter } from 'next/navigation'
export default function Page({
  params,
}: {
  params: { sessionId: string };
}) {
   const router = useRouter()
  return (
    <div>
      <button className='bg-transparent border-none cursor-pointer inline-flex items-center gap-2
      md:ml-20
        hover:bg-transparent hover:scale-[1.1] text-sm text-(--text-secondary) shadow-none'
        onClick={() => {router.back()}}><ArrowLeft />Go Back</button>

      <LiveSessionPage sessionId={params.sessionId} />
    </div>
  )
}
