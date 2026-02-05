"use client";

import { useParams } from "next/navigation";
import { demoFreelancers } from "@/features/jobs/freelancers/data/demoFreelancer";
import FreelancerHeader from "./components/FreelancerHeader";
import FreelancerTabs from './components/FreelancerTabs' ;

export default function FreelancerDetailsPage() {
  const { id } = useParams();
  const freelancer = demoFreelancers.find(f => f.id === id);

  if (!freelancer) return null;

  return (
    <section className="mx-auto max-w-2xl space-y-6 pb-24">
      <FreelancerHeader freelancer={freelancer} />
      <FreelancerTabs freelancer={freelancer} />
    </section>
  );
}
