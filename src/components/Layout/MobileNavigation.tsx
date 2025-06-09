import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const MobileNavigation = ({
  activeSection,
  onSectionChange,
}: MobileNavigationProps) => {
  const navItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "music", label: "Музыка", icon: "Music" },
    { id: "artists", label: "Артисты", icon: "Users" },
    { id: "concerts", label: "Концерты", icon: "Calendar" },
    { id: "merch", label: "Мерч", icon: "ShoppingBag" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1F2C]/95 backdrop-blur-md border-t border-gray-800 z-50 md:hidden">
      <div className="flex relative">
        {/* Active indicator */}
        <div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#9b87f5] to-[#8b5cf6] transition-all duration-300 ease-out"
          style={{
            width: `${100 / navItems.length}%`,
            transform: `translateX(${navItems.findIndex((item) => item.id === activeSection) * 100}%)`,
          }}
        />

        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "flex-1 flex flex-col items-center py-3 px-1 transition-all duration-200 relative",
              activeSection === item.id
                ? "text-[#9b87f5]"
                : "text-gray-400 hover:text-white",
            )}
          >
            <div
              className={cn(
                "transition-all duration-200",
                activeSection === item.id ? "scale-110 mb-1" : "mb-1",
              )}
            >
              <Icon
                name={item.icon}
                size={20}
                className={cn(
                  "transition-all duration-200",
                  activeSection === item.id && "drop-shadow-lg",
                )}
              />
            </div>
            <span
              className={cn(
                "text-xs font-medium transition-all duration-200",
                activeSection === item.id ? "scale-105" : "scale-100",
              )}
            >
              {item.label}
            </span>

            {/* Active dot indicator */}
            {activeSection === item.id && (
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#9b87f5] rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
