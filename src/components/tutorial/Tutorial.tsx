import { useEffect, useState } from 'react';
import type { TutorialStep } from './steps';
import { useTutorial } from './useTutorial';

interface Props {
  isOpen: boolean;
  steps: TutorialStep[];
  onFinish?: () => void;
}

export default function Tutorial({ isOpen, steps, onFinish }: Props) {
  const { step, next } = useTutorial(steps, onFinish);
  const [rects, setRects] = useState<DOMRect[]>([]);
  const overlayColor = 'rgba(0, 0, 0, 0.7)';

  useEffect(() => {
    if (!step.highlight) {
      setRects([]);
      return;
    }

    const updateRects = () => {
      const values = step
        .highlight!.map((h) =>
          document.getElementById(h.elementId)?.getBoundingClientRect(),
        )
        .filter(Boolean) as DOMRect[];

      setRects(values);
    };

    updateRects();

    window.addEventListener('resize', updateRects);
    window.addEventListener('scroll', updateRects);

    return () => {
      window.removeEventListener('resize', updateRects);
      window.removeEventListener('scroll', updateRects);
    };
  }, [step]);

  if (!isOpen) return null;

  return (
    <>
      {/* Highlight overlay */}
      {/* Dark overlay */}
      {rects.map((rect, i) => (
        <div key={i}>
          {/* Top */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: rect.top,
              background: overlayColor,
              zIndex: 9997,
            }}
          />

          {/* Bottom */}
          <div
            style={{
              position: 'fixed',
              top: rect.bottom,
              left: 0,
              width: '100vw',
              bottom: 0,
              background: overlayColor,
              zIndex: 9997,
            }}
          />

          {/* Left */}
          <div
            style={{
              position: 'fixed',
              top: rect.top,
              left: 0,
              width: rect.left,
              height: rect.height,
              background: overlayColor,
              zIndex: 9997,
            }}
          />

          {/* Right */}
          <div
            style={{
              position: 'fixed',
              top: rect.top,
              left: rect.right,
              right: 0,
              height: rect.height,
              background: overlayColor,
              zIndex: 9997,
            }}
          />

          {/* Highlight border */}
          <div
            style={{
              position: 'fixed',
              left: rect.left,
              top: rect.top,
              width: rect.width,
              height: rect.height,
              border: '4px solid gold',
              borderRadius: 12,
              pointerEvents: step.highlight?.some(h => h.action === "click") ? "none" : "auto",
              zIndex: 9998,
            }}
          />
        </div>
      ))}

      {rects.length === 0 && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            zIndex: 9997,
          }}
        />
      )}

      {/* Pointer */}
      {step.pointerPosition && (
        <img
          src={step.pointerPosition.icon}
          style={{
            position: 'fixed',
            left: step.pointerPosition.left,
            top: step.pointerPosition.top,
            zIndex: 9999,
          }}
        />
      )}

      {/* Character */}
      {step.characterPosition && (
        <img
          src={step.characterPosition.icon}
          style={{
            position: 'fixed',
            left: step.characterPosition.left,
            top: step.characterPosition.top,
            zIndex: 9999,
          }}
        />
      )}

      {/* Speech bubble */}
      <div
        style={{
          position: 'fixed',
          left: step.textPosition.left,
          top: step.textPosition.top,
          width: 350,
          background: 'white',
          borderRadius: 12,
          padding: 20,
          zIndex: 10000,
        }}
      >
        {step.title && <h3>{step.title}</h3>}

        <p>{step.content}</p>

        {!step.highlight?.some((h) => h.action !== 'none') && (
          <button onClick={next}>{step.actionButtonText ?? 'Continue'}</button>
        )}
      </div>
    </>
  );
}
