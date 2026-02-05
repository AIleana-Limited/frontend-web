import { FreelancerReview } from "@/types/freelancer";
import { Star } from "lucide-react";

export default function ReviewsTab({
  reviews,
}: {
  reviews?: FreelancerReview[];
}) {
  if (!reviews?.length) {
    return <p className="text-sm text-(--text-secondary)">No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((r) => (
        <div key={r.id} className="rounded-2xl bg-(--surface-1) p-4">
            <span className="flex items-center gap-2">
                 <div className="flex items-center gap-2">
            <Star size="16" fill="#FFD700" color="#FFD700"/>
            {r.rating.toFixed(1)}
          </div>
                <p className="text-base text-(--text-primary)">
            — {r.clientName}
          </p>
             
            </span>
          <p className="mt-2 text-sm">{r.comment}</p>    
        </div>
      ))}
    </div>
  );
}
