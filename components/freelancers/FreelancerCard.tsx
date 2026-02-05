import { MapPin, Star } from "lucide-react";
import { Freelancer } from '@/types/freelancer'
import Link from "next/link";

type Props = {
  freelancer: Freelancer;
};

export default function FreelancerCard({ freelancer }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-(--surface-1) p-5 text-(--text-primary) space-y-4">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex gap-3 ">
          <img
            src={freelancer.avatar}
            alt={freelancer.name}
            className="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <p className="font-semibold text-base">{freelancer.name}</p>
            <div  className="flex justify-between items-center gap-2">
            <p className="text-sm text-(--text-primary)/60">
              {freelancer.tagline}
            </p>

            <div className="mt-1 flex items-center gap-1 text-sm">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span>{freelancer.rating}</span>
            </div>                   
            </div>
          </div>
        </div>

        <span className="inline-flex gap-2 place-content-center rounded-full bg-black/40 px-3 py-2 text-sm">
          <MapPin className="h-5 w-5"/> {freelancer.location}
        </span>
      </div>

      {/* Info */}
      <div className="mt-3">
        <div className="mt-1 flex items-center gap-2 text-sm">
        <p className="font-semibold text-base">{freelancer.title}</p>
            <span className="rounded-sm border border-[#7749F3] px-2 py-1 text-xs font-medium text-[#7749F3]">
            {freelancer.availability}
          </span>     
        </div>
          <span className="text-(--text-primary)/70">${freelancer.hourlyRate}/hr</span>

      </div>
      <p className="text-(--text-primary)/70">this is were a curated shorten and well crafted and briefed
         description of the freelancer would be situated for sure.......</p>

      {/* Skills */}
      <div className="mt-3 flex flex-wrap gap-2">
        {freelancer.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-(--text-primary)/70"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-4 grid grid-cols-2 gap-3">
     <Link
  href={`/jobs/freelancers/${freelancer.id}`}
  className="
    flex h-10 items-center justify-center
    rounded-xl border border-blue-500/40
    text-sm text-white
    hover:bg-white/5
  "
>
  View Details
</Link>
        <button className="h-10 rounded-xl bg-blue-700/70 text-sm hover:bg-blue-700">
          Send Message
        </button>
      </div>
    </div>
  );
}
