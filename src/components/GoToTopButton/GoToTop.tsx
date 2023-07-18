import React, { useEffect, useState } from 'react';
import './GoToTop.css';
import { IconArrowUp } from '@tabler/icons';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    const heightToHidden = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className="wrapper_btn">
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <IconArrowUp className="top-btn--icon" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
