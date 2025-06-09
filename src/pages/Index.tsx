import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/components/Layout/Header";
import MobileNavigation from "@/components/Layout/MobileNavigation";
import DesktopSidebar from "@/components/Layout/DesktopSidebar";
import MusicPlayer from "@/components/Music/MusicPlayer";
import HomeSection from "@/components/Home/HomeSection";
import MusicSection from "@/components/Music/MusicSection";
import ArtistsSection from "@/components/Artists/ArtistsSection";
import ConcertsSection from "@/components/Concerts/ConcertsSection";
import MerchSection from "@/components/Merch/MerchSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isMobile = useIsMobile();

  const sections = ["home", "music", "artists", "concerts", "merch"];

  // Swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    const currentIndex = sections.indexOf(activeSection);

    if (isLeftSwipe && currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }

    if (isRightSwipe && currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1]);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "music":
        return <MusicSection />;
      case "artists":
        return <ArtistsSection />;
      case "concerts":
        return <ConcertsSection />;
      case "merch":
        return <MerchSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Header */}
      <Header />

      {/* Desktop Sidebar */}
      <DesktopSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content */}
      <div
        className={`${isMobile ? "pb-32 pt-20" : "pb-20 md:ml-64 pt-20"} p-4 md:p-8`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in">{renderSection()}</div>
        </div>
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
