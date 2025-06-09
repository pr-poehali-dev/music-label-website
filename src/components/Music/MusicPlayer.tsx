import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
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
  const [progress, setProgress] = useState(45);
  const [volume, setVolume] = useState(80);
  const [currentTrack] = useState<Track>({
    id: "1",
    title: "Звездный Путь",
    artist: "Космическая Группа",
    album: "Галактический Альбом",
    duration: "3:45",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-16 md:bottom-0 left-0 right-0 md:left-64 bg-[#1A1F2C]/95 backdrop-blur-md border-t border-gray-800 z-40">
      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-700 cursor-pointer hover:h-2 transition-all duration-200">
        <div
          className="h-full bg-gradient-to-r from-[#9b87f5] to-[#8b5cf6] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center justify-between p-4">
        {/* Track Info */}
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div className="relative group">
            <img
              src={currentTrack.cover}
              alt={currentTrack.album}
              className="w-12 h-12 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate hover:text-[#9b87f5] transition-colors cursor-pointer">
              {currentTrack.title}
            </p>
            <p className="text-gray-400 text-xs truncate hover:text-gray-300 transition-colors cursor-pointer">
              {currentTrack.artist}
            </p>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="hidden sm:flex text-gray-400 hover:text-white"
          >
            <Icon name="Heart" size={16} />
          </Button>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button
            size="sm"
            variant="ghost"
            className="text-gray-400 hover:text-white transition-colors hidden md:flex"
          >
            <Icon name="Shuffle" size={18} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Icon name="SkipBack" size={20} />
          </Button>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className={cn(
              "bg-gradient-to-r from-[#9b87f5] to-[#8b5cf6] text-white p-3 rounded-full hover:scale-105 transition-all duration-200 shadow-lg",
              isPlaying && "animate-pulse",
            )}
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Icon name="SkipForward" size={20} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-gray-400 hover:text-white transition-colors hidden md:flex"
          >
            <Icon name="Repeat" size={18} />
          </Button>
        </div>

        {/* Time & Volume */}
        <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end">
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <span>{formatTime(Math.floor((progress / 100) * 225))}</span>
            <span>/</span>
            <span>{currentTrack.duration}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Icon name="Volume2" size={16} className="text-gray-400" />
            <div className="w-20 h-1 bg-gray-700 rounded-full cursor-pointer">
              <div
                className="h-full bg-[#9b87f5] rounded-full transition-all duration-200"
                style={{ width: `${volume}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
