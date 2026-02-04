type Props = {
  watchingCount: number;
  viewers: string[];
};

export default function LiveWatchingBar({
  watchingCount,
  viewers,
}: Props) {
  return (
    <div className="flex items-center gap-2 px-4 py-4 text-sm text-(--text-primary)/70">
      <div className="flex items-center">
        {viewers.slice(0, 3).map((src, i) => (
          <img
            key={src}
            src={src}
            className={`h-9 w-9 rounded-full object-cover ${
              i !== 0 ? "-ml-2" : ""
            }`}
          />
        ))}
      </div>

      <span>
        +{(watchingCount / 1000).toFixed(0)}k people are watching this live
      </span>
    </div>
  );
}
