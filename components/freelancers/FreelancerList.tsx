"use client";

import { useState } from "react";
import FreelancerCard from "./FreelancerCard";
import LoadMoreButton from "./LoadMoreButton";
import { Freelancer } from "@/types/freelancer";

type Props = {
  data: Freelancer[];
  pageSize?: number;
};

export default function FreelancerList({ data, pageSize = 10 }: Props) {
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const visibleData = data.slice(0, visibleCount);
  const hasMore = visibleCount < data.length;

  return (
    <div>
      <div className="grid gap-5">
        {visibleData.map((freelancer) => (
          <FreelancerCard
            key={freelancer.id}
            freelancer={freelancer}
          />
        ))}
      </div>

      {hasMore && (
        <LoadMoreButton
          onClick={() => setVisibleCount((c) => c + pageSize)}
        />
      )}
    </div>
  );
}
