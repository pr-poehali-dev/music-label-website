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
    { id: "concerts", label: "Концерты", icon: "Calendar" },
    { id: "artists", label: "Артисты", icon: "Users" },
    { id: "merch", label: "Мерч", icon: "ShoppingBag" },
  ];

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-[#1A1F2C] border-r border-gray-800">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="flex items-center h-16 flex-shrink-0 px-4">
          <h1 className="text-xl font-bold text-white">Music Label</h1>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full transition-colors",
                  activeSection === item.id
                    ? "bg-[#9b87f5] text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                )}
              >
                <Icon name={item.icon} size={20} className="mr-3" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
