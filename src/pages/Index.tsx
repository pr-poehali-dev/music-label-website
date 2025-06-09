import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNavigation from "@/components/Layout/MobileNavigation";
import DesktopSidebar from "@/components/Layout/DesktopSidebar";
import MusicPlayer from "@/components/Music/MusicPlayer";
import MusicSection from "@/components/Music/MusicSection";
import ArtistsSection from "@/components/Artists/ArtistsSection";
import ConcertsSection from "@/components/Concerts/ConcertsSection";
import MerchSection from "@/components/Merch/MerchSection";
import ProfileSection from "@/components/Profile/ProfileSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("music");
  const isMobile = useIsMobile();

  const renderSection = () => {
    switch (activeSection) {
      case "music":
        return <MusicSection />;
      case "artists":
        return <ArtistsSection />;
      case "concerts":
        return <ConcertsSection />;
      case "merch":
        return <MerchSection />;
      case "profile":
        return <ProfileSection />;
      default:
        return <MusicSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Desktop Sidebar */}
      <DesktopSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content */}
      <div className={`${isMobile ? "pb-32" : "pb-20 md:ml-64"} p-4 md:p-8`}>
        <div className="max-w-7xl mx-auto">{renderSection()}</div>
      </div>

      {/* Music Player */}
      <MusicPlayer />

      {/* Mobile Navigation */}
      <MobileNavigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
    </div>
  );
};

export default Index;
