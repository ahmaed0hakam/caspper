import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Animate section entrance with fade-in and staggered element animations
 * @param sectionId - The ID of the section to animate
 * @param elementsSelector - CSS selector for child elements to animate individually
 */
export const animateSectionEntrance = (sectionId: string, elementsSelector: string = '.animate-item') => {
  // Main section fade in
  gsap.fromTo(
    `#${sectionId}`,
    { opacity: 0 },
    { 
      opacity: 1, 
      duration: 0.8,
      scrollTrigger: {
        trigger: `#${sectionId}`,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    }
  );
  
  // Staggered animation for child elements
  const elements = document.querySelectorAll(`#${sectionId} ${elementsSelector}`);
  if (elements.length > 0) {
    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: `#${sectionId}`,
          start: 'top bottom-=150',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }
};

/**
 * Animate images with float effect
 * @param selector - CSS selector for images to animate
 */
export const animateFloatingImages = (selector: string) => {
  gsap.to(selector, {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });
};

/**
 * Create text split animation
 * @param selector - CSS selector for text to animate
 */
export const animateText = (selector: string) => {
  const textElements = document.querySelectorAll(selector);
  
  textElements.forEach(text => {
    const content = text.innerHTML;
    let newContent = '';
    
    // Split text by character for animation
    for (let i = 0; i < content.length; i++) {
      newContent += `<span class="char">${content[i]}</span>`;
    }
    
    text.innerHTML = newContent;
    
    gsap.fromTo(
      `${selector} .char`,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.03,
        duration: 0.5,
        scrollTrigger: {
          trigger: text,
          start: 'top bottom-=100',
        }
      }
    );
  });
};

/**
 * Initialize all animations when the app loads
 */
export const initAnimations = () => {
  // Scroll to top on page load
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Home Section
  animateSectionEntrance('home');
  animateFloatingImages('.home-main-image, .home-side-image');
  
  // About Section
  animateSectionEntrance('about');
  animateText('#about p');
  
  // Services Section
  animateSectionEntrance('services');
  animateFloatingImages('.service-info');
  
  // Contact Section
  animateSectionEntrance('contact');
}; 