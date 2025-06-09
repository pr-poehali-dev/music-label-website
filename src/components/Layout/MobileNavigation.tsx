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
    { id: "music", label: "Музыка", icon: "Music" },
    { id: "concerts", label: "Концерты", icon: "Calendar" },
    { id: "artists", label: "Артисты", icon: "Users" },
    { id: "merch", label: "Мерч", icon: "ShoppingBag" },
    { id: "profile", label: "Профиль", icon: "User" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1F2C] border-t border-gray-800 z-50 md:hidden">
      <div className="flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "flex-1 flex flex-col items-center py-2 px-1 transition-colors",
              activeSection === item.id
                ? "text-[#9b87f5]"
                : "text-gray-400 hover:text-white",
            )}
          >
            <Icon name={item.icon} size={20} />
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
