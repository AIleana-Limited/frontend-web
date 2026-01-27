'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
  const isFreelancers = pathname === "/jobs";
  const isJobs = pathname.startsWith("/jobs/work");
  return (

<div className="max-w-3xl p-4">
    <div className="flex gap-6 items-center text-sm py-4 ">
        <Link href="/jobs">
      <button
        className={` transition ${
          isFreelancers
            ? "rounded-2xl p-2.5 bg-primary text-(--text-primary)"
            : "text-(--text-primary)/50 hover:text-(--text-primary)"
        }`}
      >
        Freelancers
      </button>
              
        </Link>

        <Link href="jobs/work">
      <button
        className={`transition ${
          isJobs
             ? "rounded-2xl p-2.5 bg-primary text-(--text-primary)"
            : "text-(--text-primary)/50 hover:text-(--text-primary)"
        }`}
      >
        Jobs
      </button>
              </Link>
    </div>


        <main>{children}</main>
    </div>
  )}