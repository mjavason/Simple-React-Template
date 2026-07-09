import { useEffect, useState } from 'react';
import { characterPositions, textPositions } from './constants';
import type { Placement, TutorialStep } from './types';
import { useTutorial } from './useTutorial';

interface Props {
  isOpen: boolean;
  steps: TutorialStep[];
  onFinish?: () => void;
}

// Fairly stabilized, but may need some tweaking for different screen sizes
function getPointerPosition(rect: DOMRect, placement: Placement) {
  switch (placement) {
    case 'top':
      return {
        left: rect.left, // ✅
        top: rect.top - rect.height * 2,
      };
    case 'top-right':
      return {
        left: rect.left + rect.width / 2, // ✅
        top: rect.top - rect.height * 2,
      };
    case 'right':
      return {
        left: rect.right + 40,
        top: rect.top, // ✅
      };
    case 'bottom-right':
      return {
        left: rect.right - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };
    case 'bottom':
      return {
        left: rect.left, // ✅
        top: rect.bottom + 20,
      };

    case 'bottom-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };

    case 'left':
      return {
        left: rect.left - rect.width - 40,
        top: rect.top, // ✅
      };

    case 'top-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.top - rect.height * 2,
      };
  }
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
      const values = step.highlight
        ? ([
            document
              .getElementById(step.highlight.elementId)
              ?.getBoundingClientRect(),
          ].filter(Boolean) as DOMRect[])
        : [];

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
              pointerEvents:
                step.highlight?.action === 'click' ? 'none' : 'auto',
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
            background: overlayColor,
            zIndex: 9997,
          }}
        />
      )}

      {/* Pointer */}
      {step.pointerPosition?.placement && rects.length > 0 && (
        <img
          src={step.pointerPosition.icon}
          style={{
            position: 'fixed',
            width: step.pointerPosition.width ?? 100,
            left: getPointerPosition(rects[0], step.pointerPosition?.placement)
              .left,
            top: getPointerPosition(rects[0], step.pointerPosition?.placement)
              .top,
            zIndex: 9999,
          }}
        />
      )}

      {step.characterPosition ? (
        <div
          style={{
            position: 'fixed',
            zIndex: 10000,
            left: characterPositions[
              step.characterPosition?.placement ?? 'bottom'
            ].left,
            top: characterPositions[
              step.characterPosition?.placement ?? 'bottom'
            ].top,
            display: textPositions[step.textPlacement ?? 'bottom'].display,
            flexDirection:
              textPositions[step.textPlacement ?? 'bottom'].flexDirection,
          }}
        >
          {/* Character */}
          {step.characterPosition && (
            <img
              src={step.characterPosition.icon}
              style={{
                zIndex: 9999,
                width: step.characterPosition.width ?? 400,
              }}
            />
          )}

          {/* Speech bubble */}
          <div
            style={{
              width: 350,
              background: 'white',
              borderRadius: 12,
              padding: 20,
              zIndex: 10000,
              textAlign: 'center',
            }}
          >
            {step.title && <h3>{step.title}</h3>}

            <p>{step.content}</p>

            {!step.highlight?.action || step.highlight.action === 'none' ? (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:cursor-pointer"
                onClick={next}
              >
                {step.actionButtonText ?? 'Continue'}
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <div
          style={{
            position: 'fixed',
            width: 350,
            background: 'white',
            borderRadius: 12,
            padding: 20,
            zIndex: 10000,
            textAlign: 'center',
          }}
        >
          {step.title && <h3>{step.title}</h3>}

          <p>{step.content}</p>

          {!step.highlight?.action || step.highlight.action === 'none' ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:cursor-pointer"
              onClick={next}
            >
              {step.actionButtonText ?? 'Continue'}
            </button>
          ) : null}
        </div>
      )}
    </>
  );
}
