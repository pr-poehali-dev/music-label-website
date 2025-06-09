import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MusicSection = () => {
  const albums = [
    {
      id: "1",
      title: "Космическая Одиссея",
      artist: "Звездный Экипаж",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      year: "2024",
      tracks: 12,
    },
    {
      id: "2",
      title: "Галактический Блюз",
      artist: "Небесные Странники",
      cover:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
      year: "2024",
      tracks: 9,
    },
    {
      id: "3",
      title: "Межзвёздная Симфония",
      artist: "Орбитальный Оркестр",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      year: "2023",
      tracks: 15,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Новые Релизы</h2>
        <Button variant="outline" size="sm">
          <Icon name="Search" size={16} className="mr-2" />
          Поиск
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((album) => (
          <Card
            key={album.id}
            className="bg-gray-800 border-gray-700 overflow-hidden group hover:bg-gray-750 transition-all"
          >
            <div className="relative">
              <img
                src={album.cover}
                alt={album.title}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button size="sm" className="bg-[#9b87f5] hover:bg-[#8b5cf6]">
                  <Icon name="Play" size={16} className="mr-2" />
                  Играть
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white mb-1">{album.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{album.artist}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{album.year}</span>
                <span>{album.tracks} треков</span>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Heart" size={14} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Plus" size={14} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Share" size={14} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MusicSection;
