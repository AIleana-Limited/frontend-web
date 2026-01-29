// components/LiveVideo.tsx
export default function LiveVideo() {
  return (
    <div className="absolute inset-0">
      <img
        src="/demo/creator-3.jpg"
        alt="Live stream"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
