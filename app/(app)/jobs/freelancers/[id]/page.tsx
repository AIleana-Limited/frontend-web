"use client";

import { useParams, useRouter } from "next/navigation";
import { demoFreelancers } from "@/features/jobs/freelancers/data/demoFreelancer";
import FreelancerHeader from "@/features/jobs/freelancers/components/FreelancerHeader";
import FreelancerTabs from "@/features/jobs/freelancers/components/FreelancerTabs";
import { ArrowLeft } from "lucide-react";


export default function FreelancerDetailsPage() {
  const router = useRouter()
  const { id } = useParams();
  const freelancer = demoFreelancers.find(f => f.id === id);

  if (!freelancer) return null;

  return (
    <section className="mx-auto max-w-2xl space-y-6 pb-24">
        <button className='bg-transparent border-none cursor-pointer inline-flex items-center gap-2
        hover:bg-transparent hover:scale-[1.1] text-sm text-(--text-secondary) shadow-none'
        onClick={() => {router.back()}}><ArrowLeft />Go Back</button>

      <FreelancerHeader freelancer={freelancer} />
      <FreelancerTabs freelancer={freelancer} />
    </section>
  );
}
