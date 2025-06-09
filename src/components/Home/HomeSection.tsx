import { useState } from "react";
import Banner from "./Banner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HomeSection = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const featuredContent = [
    {
      id: "1",
      type: "album",
      title: "Космическая Одиссея",
      artist: "Звездный Экипаж",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      label: "Новый альбом",
    },
    {
      id: "2",
      type: "concert",
      title: "Галактический Фестиваль",
      artist: "15 декабря, Москва",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
      label: "Скоро",
    },
    {
      id: "3",
      type: "merch",
      title: 'Футболка "Космос"',
      artist: "Эксклюзивный дизайн",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      label: "Новинка",
    },
  ];

  const quickActions = [
    {
      id: "playlists",
      icon: "ListMusic",
      title: "Плейлисты",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "radio",
      icon: "Radio",
      title: "Радио",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "podcasts",
      icon: "Headphones",
      title: "Подкасты",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "charts",
      icon: "TrendingUp",
      title: "Чарты",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Banner */}
      <Banner />

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action) => (
          <Card
            key={action.id}
            className="bg-gradient-to-br bg-gray-800 border-gray-700 p-6 cursor-pointer group hover:scale-105 transition-all duration-300"
          >
            <div
              className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
            >
              <Icon name={action.icon} size={24} className="text-white" />
            </div>
            <h3 className="text-white font-semibold">{action.title}</h3>
          </Card>
        ))}
      </div>

      {/* Featured Content */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Рекомендуем</h2>
          <div className="flex space-x-2">
            <Button
              variant={activeTab === "featured" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("featured")}
              className={activeTab === "featured" ? "bg-[#9b87f5]" : ""}
            >
              Популярное
            </Button>
            <Button
              variant={activeTab === "new" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("new")}
              className={activeTab === "new" ? "bg-[#9b87f5]" : ""}
            >
              Новинки
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredContent.map((item) => (
            <Card
              key={item.id}
              className="bg-gray-800 border-gray-700 overflow-hidden group hover:bg-gray-750 transition-all cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#9b87f5] text-white text-xs px-2 py-1 rounded-full font-medium">
                    {item.label}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-gray-100"
                  >
                    <Icon name="Play" size={16} className="mr-2" />
                    Открыть
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.artist}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 rounded-xl p-6 text-center">
          <div className="text-2xl font-bold text-[#9b87f5] mb-1">50+</div>
          <div className="text-gray-400 text-sm">Артистов</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-6 text-center">
          <div className="text-2xl font-bold text-[#9b87f5] mb-1">200+</div>
          <div className="text-gray-400 text-sm">Треков</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-6 text-center">
          <div className="text-2xl font-bold text-[#9b87f5] mb-1">25+</div>
          <div className="text-gray-400 text-sm">Концертов</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-6 text-center">
          <div className="text-2xl font-bold text-[#9b87f5] mb-1">1M+</div>
          <div className="text-gray-400 text-sm">Слушателей</div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
