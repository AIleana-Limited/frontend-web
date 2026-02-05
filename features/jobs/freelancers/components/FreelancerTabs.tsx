import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileTab from "./tabs/ProfileTabs";
import ReviewsTab from "./tabs/ReviewsTab";
import PortfolioTab from "./tabs/PortfolioTabs";

type Props = {
  freelancer: any;
};

const TABS = [
  {
    value: "profile",
    label: "Profile",
    render: (freelancer: any) => (
      <ProfileTab freelancer={freelancer} />
    ),
  },
  {
    value: "reviews",
    label: "Reviews",
    render: (freelancer: any) => (
      <ReviewsTab reviews={freelancer.reviews} />
    ),
  },
  {
    value: "portfolio",
    label: "Portfolio",
    render: (freelancer: any) => (
      <PortfolioTab portfolio={freelancer.portfolio} />
    ),
  },
];

export default function FreelancerTabs({ freelancer }: Props) {
  return (
    <Tabs defaultValue="profile" className="w-full">
      {/* Tabs Header */}
      <div  className="w-full p-3 rounded-md flex items-center justify-center bg-(--surface-1)">
      <TabsList className="flex w-full gap-6 bg-transparent">
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="
                  whitespace-nowrap rounded-sm  border border-white/10
        bg-white/5 px-2 h-10 text-sm text-(--text-primary)/70
        data-[state=active]:bg-primary
        data-[state=active]:text-white
        dark:data-[state=active]:bg-blue-500/80
            "
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
              
      </div>
      {/* Tabs Content */}
      {TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="max-h-105 h-full overflow-y-auto hide-scrollbar">
          {tab.render(freelancer)}
        </TabsContent>
      ))}

     <button className="h-12 w-full rounded-md border-2 border-primary text-sm hover:bg-blue-700 mt-4">
          Send Message
        </button>
    </Tabs>
  );
}
