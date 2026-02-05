export default function ProfileTab({ freelancer }: any) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-(--surface-1) p-4">
        <h4 className="font-medium text-base mb-2 text-(--text-primary)/70">About Me</h4>
        <p className="text-base text-(--text-primary)/90">{freelancer.about}</p>
      </div>

      <div className="text-sm space-y-4 rounded-2xl bg-(--surface-1) p-4">
        <div className="space-y-1">
        <p className="text-base text-(--text-primary)/70 font-medium">Availability</p>
        <p className="text-sm text-(--text-primary)">{freelancer.availability}</p>
        </div>
        <div className="space-y-1">
        <p className="text-base text-(--text-primary)/70 font-medium">Location</p>
        <p className="text-sm text-(--text-primary)">{freelancer.location}</p>
        </div>
      </div>
    </div>     
  );
}