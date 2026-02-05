import { FreelancerPortfolioItem } from "@/types/freelancer";

export default function PortfolioTab({
  portfolio,
}: {
  portfolio?: FreelancerPortfolioItem[];
}) {
  if (!portfolio?.length) {
    return <p className="text-sm text-(--text-secondary)">No portfolio yet.</p>;
  }

  return (
    <div className="space-y-4">
      {portfolio.map((item) => (
        <div key={item.id} className="rounded-2xl space-y-4 bg-(--surface-1) p-4">
          <h4 className="font-medium text-base">{item.title}</h4>
          <div>
          <p className="text-(--text-primary)/50 font-medium text-base">Role</p>
          <p className="text-sm text-(--text-secondary)">{item.role}</p>                  
          </div>

          <div>
          <p className="text-(--text-primary)/50 font-medium text-base">Tech Stack</p>
            <ul className="flex gap-2 items-center">
          {item.techStack.map((stack ) =>(
                <li key={stack}  className="text-(--text-primary)/80 text-sm">{stack}</li>
          ))}
                   </ul>                
          </div>

          <div>
          <p className="text-(--text-primary)/50 font-medium text-base">Overview</p>
          <p className="text-sm text-(--text-secondary)">{item.overview}</p>                  
          </div>
        </div>
      ))}
    </div>
  );
}
