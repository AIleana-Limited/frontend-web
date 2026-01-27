type Props = {
  onClick: () => void;
  disabled?: boolean;
};

export default function LoadMoreButton({ onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mx-auto mt-6 block h-11 rounded-xl px-8 text-sm transition
      ${
        disabled
          ? "cursor-not-allowed bg-white/10 text-white/40"
          : "bg-blue-700/70 text-white hover:bg-blue-700"
      }`}
    >
      Load More
    </button>
  );
}
