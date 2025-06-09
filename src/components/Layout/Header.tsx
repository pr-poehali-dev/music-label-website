import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onProfileClick?: () => void;
}

const Header = ({ onProfileClick }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0F1419]/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-[#9b87f5] to-[#8b5cf6] rounded-lg flex items-center justify-center mr-3">
            <Icon name="Music" size={18} className="text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">SoundWave</h1>
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
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 rounded-full focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Profile & Notifications */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden md:flex relative">
            <Icon name="Bell" size={20} className="text-gray-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#9b87f5] rounded-full text-xs"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-800/50 rounded-full p-2 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-[#9b87f5] to-[#8b5cf6] rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} className="text-white" />
                </div>
                <span className="hidden md:block text-white text-sm font-medium">
                  Космический Путешественник
                </span>
                <Icon
                  name="ChevronDown"
                  size={16}
                  className="text-gray-400 hidden md:block"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-gray-800 border-gray-700"
              align="end"
            >
              <DropdownMenuItem
                onClick={onProfileClick}
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Icon name="User" size={16} className="mr-2" />
                Мой профиль
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                <Icon name="Download" size={16} className="mr-2" />
                Загрузки
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                <Icon name="LogOut" size={16} className="mr-2" />
                Выйти
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
