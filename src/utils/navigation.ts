/**
 * Smoothly scrolls to a section by ID, accounting for the fixed header
 * @param sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Get the element's position relative to the viewport
    const rect = element.getBoundingClientRect();
    
    // Calculate the absolute position and adjust for header height
    const offsetTop = window.scrollY + rect.top;
    
    window.scrollTo({ 
      top: offsetTop, 
      behavior: 'smooth' 
    });
  }
}; 