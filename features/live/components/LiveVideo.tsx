// components/LiveVideo.tsx
export default function LiveVideo() {
  return (
    <div className="absolute inset-0">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/demo/creator-3.jpg" // fallback image
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
" type="video/mp4" />
        {/* fallback */}
        Your browser does not support the video tag.
      </video>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
