"use client";

import { demoLiveSession } from "./data/demoLiveSession";
import LiveVideo from "./components/LiveVideo";
import LiveTopBar from "./components/LiveTopBar";
import LiveChat from "./components/LiveChat";
import LiveActions from "./components/LiveActions";
import LiveInput from "./components/LiveInput";

export default function LiveSessionPage({ sessionId }: { sessionId: string }) {
  const session = demoLiveSession;

  return (
    <div className="flex h-screen w-full justify-center ">
      {/* 80% width container */}
      <div className="relative h-full w-full md:w-[80%] md:max-w-[900px] overflow-hidden rounded-2xl">
        <LiveVideo />
        <LiveTopBar host={session.host} stats={session.stats} />
        <LiveChat comments={session.comments} />
        <LiveActions />
        <LiveInput />
      </div>
    </div>
  );
}
