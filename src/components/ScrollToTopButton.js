"use client";

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isVisible]);

  return (
    <div className={`fixed bottom-8 right-8 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ${isVisible ? 'block' : 'hidden'}`}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
