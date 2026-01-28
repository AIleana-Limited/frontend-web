import LiveCreatorCard from "@/components/cards/LiveCreatorCard";
import { demoCreators2 } from "@/data/demoCreators";

export default function FeaturedTab() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {demoCreators2.map((creator) => (
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
