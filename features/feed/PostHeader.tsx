import { Globe, Users } from "lucide-react";

export function PostHeader({ user,  visibility }: any) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={user.avatar}
        className="h-9 w-9 rounded-full object-cover"
      />

      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2 text-sm font-medium">
          {user.name}
          <button className="bg-blue-500 py-1 px-4 rounded-full text-white">Follow</button>
        </div>
        <div className="flex  flex-col items-center gap-1 text-xs text-(--text-primary)/70">
          {visibility === "public" ? <span className="font-medium text-sm inline-flex gap-2 items-center"> Publlic <Globe size={15} /></span> : 
          <span className="font-medium text-sm inline-flex gap-2 items-center">Friends <Users size={15} /></span>}
        </div>
      </div>
    </div>
  );
}
