"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FreelancersTab from "./tabs/FreelancersTab";
import JobsTab from "./tabs/JobsTab";


const TABS = [
  { value: "Freelancer", label: "Freelancer", Component: FreelancersTab },
  { value: "Jobs", label: "Jobs", Component: JobsTab },
];

export default function JobTabs() {
  return (
    <Tabs defaultValue="Freelancer" className="w-full">
      {/* SCROLLABLE HEADER */}
      <TabsList
        className="
          mb-6 flex max-w-200 gap-2 overflow-x-auto rounded-none bg-transparent
          hide-scrollbar
        "
      >
        {TABS.map(({ value, label }) => (
          <Tab key={value} value={value} label={label} />
        ))}
      </TabsList>

      {/* CONTENT */}
      {TABS.map(({ value, Component }) => (
        <TabsContent key={value} value={value}>
          <Component />
        </TabsContent>
      ))}
    </Tabs>
  );
}

/* small helper */
function Tab({ value, label }: { value: string; label: string }) {
  return (
    <TabsTrigger
      value={value}
      className=" 
        whitespace-nowrap rounded-full  border border-white/10
        bg-white/5 px-4 py-2 text-sm text-(--text-primary)/70
        data-[state=active]:bg-primary
        data-[state=active]:text-white
        dark:data-[state=active]:bg-blue-500/80
      "
    >
      {label}
    </TabsTrigger>
  );
}
