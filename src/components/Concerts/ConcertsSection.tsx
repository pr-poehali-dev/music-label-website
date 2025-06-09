import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ConcertsSection = () => {
  const concerts = [
    {
      id: "1",
      title: "Космическая Ночь",
      artist: "Звездный Экипаж",
      date: "15 декабря 2024",
      time: "20:00",
      venue: "Дворец Космоса",
      city: "Москва",
      price: "от 2500₽",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
    },
    {
      id: "2",
      title: "Галактический Фестиваль",
      artist: "Небесные Странники",
      date: "22 декабря 2024",
      time: "19:30",
      venue: "Арена Вселенной",
      city: "Санкт-Петербург",
      price: "от 3000₽",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=200&fit=crop",
    },
    {
      id: "3",
      title: "Симфония Звёзд",
      artist: "Орбитальный Оркестр",
      date: "29 декабря 2024",
      time: "19:00",
      venue: "Концертный Зал Галактика",
      city: "Екатеринбург",
      price: "от 1800₽",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Предстоящие Концерты</h2>
        <Button variant="outline" size="sm">
          <Icon name="Calendar" size={16} className="mr-2" />
          Календарь
        </Button>
      </div>

      <div className="space-y-4">
        {concerts.map((concert) => (
          <Card
            key={concert.id}
            className="bg-gray-800 border-gray-700 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-48 h-48 md:h-auto">
                <img
                  src={concert.image}
                  alt={concert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {concert.title}
                    </h3>
                    <p className="text-[#9b87f5] font-medium mb-1">
                      {concert.artist}
                    </p>
                    <div className="space-y-1 text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Icon name="Calendar" size={14} className="mr-2" />
                        {concert.date} в {concert.time}
                      </div>
                      <div className="flex items-center">
                        <Icon name="MapPin" size={14} className="mr-2" />
                        {concert.venue}, {concert.city}
                      </div>
                      <div className="flex items-center">
                        <Icon name="Ticket" size={14} className="mr-2" />
                        {concert.price}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Button className="bg-[#9b87f5] hover:bg-[#8b5cf6]">
                      <Icon name="Ticket" size={16} className="mr-2" />
                      Купить билет
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600"
                    >
                      <Icon name="Share" size={14} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ConcertsSection;
