import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface DesktopSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const DesktopSidebar = ({
  activeSection,
  onSectionChange,
}: DesktopSidebarProps) => {
  const navItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "music", label: "Музыка", icon: "Music" },
    { id: "artists", label: "Артисты", icon: "Users" },
    { id: "concerts", label: "Концерты", icon: "Calendar" },
    { id: "merch", label: "Мерч", icon: "ShoppingBag" },
  ];

  const secondaryItems = [
    { id: "playlists", label: "Плейлисты", icon: "ListMusic" },
    { id: "radio", label: "Радио", icon: "Radio" },
    { id: "podcasts", label: "Подкасты", icon: "Headphones" },
  ];

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-[#1A1F2C] border-r border-gray-800">
      <div className="flex flex-col flex-1 min-h-0 pt-16">
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Main Navigation */}
          <nav className="flex-1 px-2 py-6 space-y-1">
            <div className="mb-6">
              <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Навигация
              </h3>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    "group flex items-center px-3 py-3 text-sm font-medium rounded-xl w-full transition-all duration-200",
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#9b87f5] to-[#8b5cf6] text-white shadow-lg"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-white",
                  )}
                >
                  <Icon
                    name={item.icon}
                    size={20}
                    className={cn(
                      "mr-3 transition-transform",
                      activeSection === item.id && "scale-110",
                    )}
                  />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Secondary Navigation */}
            <div>
              <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Библиотека
              </h3>
              {secondaryItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className="group flex items-center px-3 py-2 text-sm font-medium rounded-xl w-full text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-200"
                >
                  <Icon name={item.icon} size={18} className="mr-3" />
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="bg-gradient-to-r from-[#9b87f5]/20 to-[#8b5cf6]/20 rounded-xl p-4">
              <h4 className="text-white font-medium mb-1">SoundWave Premium</h4>
              <p className="text-gray-400 text-xs mb-3">
                Безлимитная музыка без рекламы
              </p>
              <button className="w-full bg-gradient-to-r from-[#9b87f5] to-[#8b5cf6] text-white text-sm font-medium py-2 rounded-lg hover:opacity-90 transition-opacity">
                Попробовать бесплатно
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
