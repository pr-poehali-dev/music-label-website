import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0F1419]/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white">Music Label</h1>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-4 md:mx-8">
          <div className="relative">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              type="text"
              placeholder="Поиск музыки, артистов, концертов..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 rounded-full focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
            />
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Icon name="Bell" size={20} className="text-gray-400" />
          </Button>
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-800/50 rounded-full p-2 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-[#9b87f5] to-[#8b5cf6] rounded-full flex items-center justify-center">
              <Icon name="User" size={16} className="text-white" />
            </div>
            <span className="hidden md:block text-white text-sm font-medium">
              Профиль
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
