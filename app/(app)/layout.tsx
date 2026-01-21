import Header from "@/components/dashboard/Header";
import MobileHeader from "@/components/dashboard/MobileHeader";
import Sidebar from "@/components/dashboard/Sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full overflow-hidden bg-(--surface-1)">
      <Header />
      <MobileHeader />
      <section className="w-full h-full flex">
              <aside className="hidden px-4 py-8 md:block md:w-80 shrink-0 ">
        <Sidebar />
      </aside>
        <main className="flex-1 overflow-y-auto scrollbar-hide bg-background">
          {children}
        </main>
      </section>
    </div>
  );
} 