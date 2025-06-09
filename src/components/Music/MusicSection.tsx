import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const MusicSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const albums = [
    {
      id: "1",
      title: "Космическая Одиссея",
      artist: "Звездный Экипаж",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      year: "2024",
      tracks: 12,
      genre: "rock",
      duration: "42:15",
      plays: "2.1M",
    },
    {
      id: "2",
      title: "Галактический Блюз",
      artist: "Небесные Странники",
      cover:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
      year: "2024",
      tracks: 9,
      genre: "electronic",
      duration: "38:22",
      plays: "1.8M",
    },
    {
      id: "3",
      title: "Межзвёздная Симфония",
      artist: "Орбитальный Оркестр",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      year: "2023",
      tracks: 15,
      genre: "classical",
      duration: "56:48",
      plays: "980K",
    },
    {
      id: "4",
      title: "Ночной Космос",
      artist: "Лунные Путешественники",
      cover:
        "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
      year: "2024",
      tracks: 8,
      genre: "ambient",
      duration: "45:30",
      plays: "1.2M",
    },
  ];

  const filters = [
    { id: "all", label: "Все", count: albums.length },
    { id: "rock", label: "Рок", count: 1 },
    { id: "electronic", label: "Электроника", count: 1 },
    { id: "classical", label: "Классика", count: 1 },
    { id: "ambient", label: "Эмбиент", count: 1 },
  ];

  const filteredAlbums = albums.filter((album) => {
    const matchesSearch =
      album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "all" || album.genre === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Музыка</h2>
          <p className="text-gray-400">Откройте лучшие треки нашего лейбла</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <Icon
              name="Search"
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Поиск музыки..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 bg-gray-800 border-gray-700 text-white w-64"
            />
          </div>
          <Button variant="outline" size="sm" className="border-gray-600">
            <Icon name="SlidersHorizontal" size={16} className="mr-2" />
            Фильтры
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter.id)}
            className={
              activeFilter === filter.id
                ? "bg-gradient-to-r from-[#9b87f5] to-[#8b5cf6] border-none"
                : "border-gray-600 hover:border-[#9b87f5]"
            }
          >
            {filter.label}
            <span className="ml-2 bg-white/20 text-xs px-1.5 py-0.5 rounded-full">
              {filter.count}
            </span>
          </Button>
        ))}
      </div>

      {/* Albums Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAlbums.map((album) => (
          <Card
            key={album.id}
            className="bg-gray-800/50 border-gray-700 overflow-hidden group hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
          >
            <div className="relative">
              <img
                src={album.cover}
                alt={album.title}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="lg"
                  className="bg-white/90 text-black hover:bg-white shadow-xl"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Играть
                </Button>
              </div>

              {/* Genre badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-[#9b87f5]/90 text-white text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm">
                  {filters.find((f) => f.id === album.genre)?.label}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-white mb-1 group-hover:text-[#9b87f5] transition-colors">
                {album.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3 hover:text-gray-300 transition-colors cursor-pointer">
                {album.artist}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>{album.year}</span>
                <span>{album.tracks} треков</span>
                <span>{album.duration}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Icon name="Play" size={12} className="text-gray-400" />
                  <span className="text-xs text-gray-400">{album.plays}</span>
                </div>

                <div className="flex items-center space-x-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-[#9b87f5] p-1"
                  >
                    <Icon name="Heart" size={14} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-[#9b87f5] p-1"
                  >
                    <Icon name="Plus" size={14} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-[#9b87f5] p-1"
                  >
                    <Icon name="Share" size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700/50">
          <div className="text-2xl font-bold text-[#9b87f5] mb-1">200+</div>
          <div className="text-gray-400 text-sm">Треков</div>
        </div>
        <div className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700/50">
          <div className="text-2xl font-bold text-[#9b87f5] mb-1">15+</div>
          <div className="text-gray-400 text-sm">Альбомов</div>
        </div>
        <div className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700/50">
          <div className="text-2xl font-bold text-[#9b87f5] mb-1">5M+</div>
          <div className="text-gray-400 text-sm">Прослушиваний</div>
        </div>
        <div className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700/50">
          <div className="text-2xl font-bold text-[#9b87f5] mb-1">12</div>
          <div className="text-gray-400 text-sm">Жанров</div>
        </div>
      </div>
    </div>
  );
};

export default MusicSection;
