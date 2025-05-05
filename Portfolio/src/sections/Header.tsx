'use client';
import { useState, useEffect } from "react";

// Define the menu structure
const menuItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "faqs", label: "Faqs" }
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    // Function to check which section is in the viewport
    const handleScroll = () => {
      // Get IDs from menu items
      const sections = menuItems.map(item => item.id);
      
      // Find the section that is currently most visible in the viewport
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section "active" if its top is near the top of the viewport
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      }) || "about"; // Default to home if nothing is found
      
      setActiveSection(currentSection);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Function to determine link classes based on active state
  const getLinkClasses = (section: string): string => {
    return `nav-items ${
      activeSection === section
        ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        : ""
    }`;
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {menuItems.map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`} 
            className={getLinkClasses(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};