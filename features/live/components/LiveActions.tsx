// components/LiveActions.tsx
export default function LiveActions() {
  return (
    <div className="absolute bottom-50 right-4 z-20">
      <button
        className="
          rounded-xl border border-blue-500
          bg-black/40 px-5 py-2 text-sm text-white
          backdrop-blur hover:bg-black/70 hover:border-blue-500/20
        "
      >
        Request to join Live
      </button>
    </div>
  );
}
