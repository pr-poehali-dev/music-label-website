import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ArtistsSection = () => {
  const artists = [
    {
      id: "1",
      name: "Звездный Экипаж",
      genre: "Космический Рок",
      photo:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      albums: 3,
      followers: "12.5K",
    },
    {
      id: "2",
      name: "Небесные Странники",
      genre: "Электронная Музыка",
      photo:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
      albums: 2,
      followers: "8.3K",
    },
    {
      id: "3",
      name: "Орбитальный Оркестр",
      genre: "Симфо-Метал",
      photo:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      albums: 4,
      followers: "15.2K",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Наши Артисты</h2>
        <Button variant="outline" size="sm">
          Все артисты
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <Card
            key={artist.id}
            className="bg-gray-800 border-gray-700 overflow-hidden group hover:bg-gray-750 transition-all"
          >
            <div className="relative">
              <img
                src={artist.photo}
                alt={artist.name}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-bold text-white text-lg mb-1">
                  {artist.name}
                </h3>
                <p className="text-gray-300 text-sm">{artist.genre}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <span>{artist.albums} альбомов</span>
                <span>{artist.followers} подписчиков</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  className="flex-1 bg-[#9b87f5] hover:bg-[#8b5cf6]"
                >
                  <Icon name="Play" size={14} className="mr-2" />
                  Слушать
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600">
                  <Icon name="UserPlus" size={14} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArtistsSection;
