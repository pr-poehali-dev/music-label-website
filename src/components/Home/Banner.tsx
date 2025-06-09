import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Banner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#9b87f5] via-[#8b5cf6] to-[#7c3aed] p-6 md:p-8 min-h-[200px] md:min-h-[250px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-24 h-24 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-2xl"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-6 right-12 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-24 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-12 left-16 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-4 md:mb-0 md:mr-6">
          <div className="mb-3">
            <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
              🎵 Новый релиз
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Откройте новые
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              музыкальные горизонты
            </span>
          </h1>
          <p className="text-white/80 text-sm md:text-lg mb-4 leading-relaxed">
            Эксклюзивные релизы, живые концерты и уникальный мерч от лучших
            артистов нашего лейбла
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-white text-[#8b5cf6] hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Слушать сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold backdrop-blur-sm"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Концерты
            </Button>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="w-48 h-48 relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
              alt="Featured Album"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-xl animate-bounce">
              <Icon name="Music" size={20} className="text-[#8b5cf6]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
