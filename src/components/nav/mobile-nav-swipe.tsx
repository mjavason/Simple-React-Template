import { useEffect, useRef } from 'react';
import { useMobileNavStore } from '@/stores/nav-store';

const SWIPE_THRESHOLD = 125;

export function MobileNavSwipe() {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const triggered = useRef(false);

  const open = useMobileNavStore((state) => state.open);
  const close = useMobileNavStore((state) => state.close);
  const isOpen = useMobileNavStore((state) => state.isOpen);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];

      startX.current = touch.clientX;
      startY.current = touch.clientY;
      triggered.current = false;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (
        startX.current === null ||
        startY.current === null ||
        triggered.current
      ) {
        return;
      }

      const touch = event.touches[0];

      const deltaX = touch.clientX - startX.current;
      const deltaY = touch.clientY - startY.current;

      // Ignore predominantly vertical gestures.
      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY) * 0.5;

      if (!isHorizontal) return;

      // Closed → swipe right → open
      if (!isOpen && deltaX >= SWIPE_THRESHOLD) {
        triggered.current = true;
        open();
        return;
      }

      // Open → swipe left → close
      if (isOpen && deltaX <= -SWIPE_THRESHOLD) {
        triggered.current = true;
        close();
      }
    };

    const reset = () => {
      startX.current = null;
      startY.current = null;
      triggered.current = false;
    };

    window.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });

    window.addEventListener('touchmove', handleTouchMove, {
      passive: true,
    });

    window.addEventListener('touchend', reset, {
      passive: true,
    });

    window.addEventListener('touchcancel', reset, {
      passive: true,
    });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', reset);
      window.removeEventListener('touchcancel', reset);
    };
  }, [open, close, isOpen]);

  return null;
}
