import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProfileSection = () => {
  const playlists = [
    {
      id: "1",
      name: "Любимые треки",
      tracks: 45,
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
    },
    {
      id: "2",
      name: "Космическая подборка",
      tracks: 23,
      cover:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=100&h=100&fit=crop",
    },
    {
      id: "3",
      name: "Для работы",
      tracks: 67,
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
    },
  ];

  const recentPurchases = [
    {
      id: "1",
      item: 'Футболка "Космическая Одиссея"',
      date: "10 декабря 2024",
      price: "1990₽",
    },
    {
      id: "2",
      item: 'Билет на концерт "Галактический Фестиваль"',
      date: "5 декабря 2024",
      price: "3000₽",
    },
    {
      id: "3",
      item: 'Виниловая пластинка "Симфония"',
      date: "28 ноября 2024",
      price: "2800₽",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 bg-gradient-to-br from-[#9b87f5] to-[#8b5cf6] rounded-full flex items-center justify-center">
          <Icon name="User" size={32} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">
            Космический Путешественник
          </h2>
          <p className="text-gray-400">Пользователь с 2024 года</p>
          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
            <span>12 плейлистов</span>
            <span>145 треков</span>
            <span>8 покупок</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Мои Плейлисты</h3>
            <Button size="sm" variant="outline" className="border-gray-600">
              <Icon name="Plus" size={14} className="mr-2" />
              Создать
            </Button>
          </div>
          <div className="space-y-3">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <img
                  src={playlist.cover}
                  alt={playlist.name}
                  className="w-12 h-12 rounded-md"
                />
                <div className="flex-1">
                  <p className="text-white font-medium">{playlist.name}</p>
                  <p className="text-gray-400 text-sm">
                    {playlist.tracks} треков
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Play" size={16} />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gray-800 border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              Последние Покупки
            </h3>
            <Button size="sm" variant="outline" className="border-gray-600">
              Все покупки
            </Button>
          </div>
          <div className="space-y-3">
            {recentPurchases.map((purchase) => (
              <div
                key={purchase.id}
                className="flex items-center justify-between p-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">
                    {purchase.item}
                  </p>
                  <p className="text-gray-400 text-xs">{purchase.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#9b87f5] font-medium">{purchase.price}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Настройки Аккаунта
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="border-gray-600 justify-start">
            <Icon name="Settings" size={16} className="mr-2" />
            Личные данные
          </Button>
          <Button variant="outline" className="border-gray-600 justify-start">
            <Icon name="Bell" size={16} className="mr-2" />
            Уведомления
          </Button>
          <Button variant="outline" className="border-gray-600 justify-start">
            <Icon name="CreditCard" size={16} className="mr-2" />
            Способы оплаты
          </Button>
          <Button variant="outline" className="border-gray-600 justify-start">
            <Icon name="Download" size={16} className="mr-2" />
            Скачанная музыка
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProfileSection;
