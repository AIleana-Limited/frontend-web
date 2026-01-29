import Header from "@/components/layout/Header";
import MobileHeader from "@/components/layout/MobileHeader";
import Sidebar from "@/components/layout/Sidebar";
import ChatOnline from '@/components/dashboard/ChatOnline'
import CirclesCard from '@/components/dashboard/CircleCard'
import RecentActivities from '@/components/dashboard/RecentActivities'
import DashboardTabs from "@/components/dashboard/DashboardTabs";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full overflow-hidden bg-(--surface-1)">
      <section className="w-full h-full flex">             
        <Sidebar />
      <section className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="">
            <Header />
      <MobileHeader />
        </div>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:p-8 p-4 h-screen bg-background ">
        <div className="col-span-2 space-y-8 overflow-y-auto hide-scrollbar">
            {/* Tabs (Feeds / Jobs / Creator’s hub / Videos) */}
                <DashboardTabs />
            {children}
        </div>
          {/* Right Panel */}
               <div className='col-span-1 hidden lg:block space-y-8 overflow-y-auto hide-scrollbar mb-20'>
        <RecentActivities />
        <ChatOnline />
        <CirclesCard />
      </div>
        </main>
      </section>
        
      </section>
    </div>
  );
} 