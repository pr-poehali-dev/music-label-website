import { useState, useEffect, useRef } from "react";
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
import ProfileSection from "@/components/Profile/ProfileSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = useIsMobile();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = ["home", "music", "artists", "concerts", "merch", "profile"];

  // Enhanced swipe navigation with smooth transitions
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    const currentIndex = sections.indexOf(activeSection);

    if (isLeftSwipe && currentIndex < sections.length - 1) {
      navigateToSection(sections[currentIndex + 1]);
    }

    if (isRightSwipe && currentIndex > 0) {
      navigateToSection(sections[currentIndex - 1]);
    }

    // Reset touch values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const navigateToSection = (section: string) => {
    if (section === activeSection || isTransitioning) return;

    setIsTransitioning(true);
    setActiveSection(section);

    // Add haptic feedback for mobile
    if (isMobile && "vibrate" in navigator) {
      navigator.vibrate(10);
    }

    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleProfileClick = () => {
    navigateToSection("profile");
  };

  const renderSection = () => {
    const sectionMap = {
      home: <HomeSection />,
      music: <MusicSection />,
      artists: <ArtistsSection />,
      concerts: <ConcertsSection />,
      merch: <MerchSection />,
      profile: <ProfileSection />,
    };

    return (
      sectionMap[activeSection as keyof typeof sectionMap] || <HomeSection />
    );
  };

  return (
    <div className="min-h-screen bg-[#0F1419] overflow-hidden">
      {/* Header */}
      <Header onProfileClick={handleProfileClick} />

      {/* Desktop Sidebar */}
      <DesktopSidebar
        activeSection={activeSection}
        onSectionChange={navigateToSection}
      />

      {/* Main Content */}
      <div
        ref={containerRef}
        className={`${
          isMobile ? "pb-32 pt-20" : "pb-20 md:ml-64 pt-20"
        } p-4 md:p-8 transition-all duration-300 ease-out ${
          isTransitioning
            ? "opacity-80 transform scale-[0.98]"
            : "opacity-100 transform scale-100"
        }`}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
        style={{
          touchAction: isMobile ? "pan-y" : "auto",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-300 ease-out ${
              isTransitioning
                ? "opacity-0 transform translate-y-4"
                : "opacity-100 transform translate-y-0 animate-fade-in"
            }`}
          >
            {renderSection()}
          </div>
        </div>
      </div>

      {/* Music Player */}
      <MusicPlayer />

      {/* Mobile Navigation */}
      <MobileNavigation
        activeSection={activeSection}
        onSectionChange={navigateToSection}
      />

      {/* Loading overlay for smooth transitions */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] z-30 transition-all duration-300" />
      )}
    </div>
  );
};

export default Index;
