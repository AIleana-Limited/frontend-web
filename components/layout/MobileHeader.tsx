import { Search, Bell, User2,  Menu} from "lucide-react";


const MobileHeader = () => {
  return (
      <header className="h-18 flex justify-between items-center px-2 lg:hidden">
          {/* Left: Search */}
        <div className="flex items-center gap-4">
          {/* Logo placeholder */}
          <div className="h-10 w-10 inline-flex justify-center items-center rounded-xl border border-gray-300/50 bg-background/20">
          <Menu />
          </div>
        </div>

        {/* Right: icons */}
        <div className="flex items-center gap-4">
          <button className="grid h-10 w-10 place-items-center rounded-full text-(--text-primary)/70 transition hover:bg-white/10 hover:text-white">
            <Search className="h-5 w-5" />
          </button>

          <button className="grid h-10 w-10 place-items-center rounded-full text-(--text-primary)/70 transition hover:bg-white/10 hover:text-white">
            <Bell className="h-5 w-5" />
          </button>

          <button className="grid h-10 w-10 place-items-center rounded-full text-(--text-primary)/70 transition hover:bg-white/10 hover:text-white">
            <User2 className="h-5 w-5" />
          </button>
        </div>
        </header>
  )
}

export default MobileHeader
