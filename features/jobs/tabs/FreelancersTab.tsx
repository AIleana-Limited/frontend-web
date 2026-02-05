import FreelancerList from "@/components/freelancers/FreelancerList";
import SearchBar from "@/components/freelancers/SearchBar";
import { demoFreelancers } from "@/features/jobs/freelancers/data/demoFreelancer";


export default function FreelancersTab() {
  return (
    <div className="mx-auto space-y-6">
      <SearchBar />
      <h2 className="text-xl font-semibold text-(--text-primary)">
        Top Freelancers
      </h2>

      <FreelancerList data={demoFreelancers} pageSize={10} />
    </div>
  );
}
