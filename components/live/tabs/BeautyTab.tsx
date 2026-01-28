import LiveCreatorCard from "@/components/cards/LiveCreatorCard";
import { demoCreators3 } from "@/data/demoCreators";

export default function BeautyTab() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {demoCreators3.map((creator) => (
        <LiveCreatorCard
          key={creator.id}
          image={creator.image}
          name={creator.name}
          category={creator.category}
          watching={creator.watching}
          live={creator.live}
        />
      ))}
    </div>
  );
}
