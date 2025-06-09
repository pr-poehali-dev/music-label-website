import { useState } from "react";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack] = useState<Track>({
    id: "1",
    title: "Звездный Путь",
    artist: "Космическая Группа",
    album: "Галактический Альбом",
    duration: "3:45",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
  });

  return (
    <div className="fixed bottom-16 md:bottom-0 left-0 right-0 md:left-64 bg-[#1A1F2C] border-t border-gray-800 p-4 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <img
            src={currentTrack.cover}
            alt={currentTrack.album}
            className="w-10 h-10 rounded-md"
          />
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">
              {currentTrack.title}
            </p>
            <p className="text-gray-400 text-xs truncate">
              {currentTrack.artist}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Icon name="SkipBack" size={20} />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-[#9b87f5] text-white p-2 rounded-full hover:bg-[#8b5cf6] transition-colors"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Icon name="SkipForward" size={20} />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-2 flex-1 justify-end">
          <span className="text-gray-400 text-xs">2:15</span>
          <div className="w-20 h-1 bg-gray-700 rounded-full">
            <div className="w-1/2 h-full bg-[#9b87f5] rounded-full"></div>
          </div>
          <span className="text-gray-400 text-xs">{currentTrack.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
