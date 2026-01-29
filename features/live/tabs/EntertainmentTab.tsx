import LiveCreatorCard from "@/components/cards/LiveCreatorCard";
import { demoCreators1 } from "@/data/demoCreators";

export default function EntertainmentTab() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {demoCreators1.map((creator) => (
         <LiveCreatorCard
               id={creator.id}
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
