import LiveSessionPage from "@/features/live/LiveSessionPage";

export default function Page({
  params,
}: {
  params: { sessionId: string };
}) {
  return <LiveSessionPage sessionId={params.sessionId} />
}
