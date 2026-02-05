import { Star } from "lucide-react";


export default function FreelancerHeader({ freelancer }: any) {
  return (
    <section>
        {/* Profile Images (Cover and Profile Pic) */}
  <div className="relative h-40 rounded-2xl mb-10 bg-(--surface-1)">
      {/* Cover */}
      {freelancer.coverImage ? (
        <img
          src={freelancer.coverImage}
          alt="Profile cover"
          className="h-full w-full rounded-2xl object-cover"
        />
      ) : (
        // Fallback gradient
        <div className="h-full w-full bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      )}



      {/* Avatar */}
      <img
        src={freelancer.avatar}
        alt={freelancer.name}
        className="
          absolute left-1/2  -bottom-12
          h-24 w-24 -translate-x-1/2
          rounded-full border-4 border-(--surface-1)
          object-cover
        "
      />
    </div>

    {/* Profile Details */}
    <div className="flex flex-col items-center mt-5">
    <h2 className="mt-3 text-lg font-semibold">{freelancer.name}</h2>
      <p className="text-sm text-white/60">{freelancer.role}</p>

      <div className="mt-1 flex justify-center gap-1 text-sm">
        <p className="text-(--text-primary)/60">{freelancer.rank}</p>
        <Star size="16" fill="#FFD700" color="#FFD700"/>
        {freelancer.rating}
      </div>       
    </div>
    </section>
  );
}
