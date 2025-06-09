import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Banner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#9b87f5] via-[#8b5cf6] to-[#7c3aed] p-8 md:p-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-6 md:mb-0 md:mr-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Откройте новые
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              музыкальные горизонты
            </span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-6 leading-relaxed">
            Эксклюзивные релизы, живые концерты и уникальный мерч от лучших
            артистов нашего лейбла
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-[#8b5cf6] hover:bg-gray-100 font-semibold"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Слушать сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Ближайшие концерты
            </Button>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="w-80 h-80 relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
              alt="Featured Album"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl">
              <Icon name="Music" size={24} className="text-[#8b5cf6]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
