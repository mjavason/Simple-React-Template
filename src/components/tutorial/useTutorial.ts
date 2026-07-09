import { useEffect, useMemo, useState } from 'react';
import type { TutorialStep } from './steps';

export function useTutorial(steps: TutorialStep[], onFinish?: () => void) {
  const [currentStep, setCurrentStep] = useState(0);

  const step = useMemo(() => steps[currentStep], [steps, currentStep]);

  const next = () => {
    if (currentStep === steps.length - 1) {
      onFinish?.();
      return;
    }

    setCurrentStep((x) => x + 1);
  };

  useEffect(() => {
    if (!step.highlight) return;

    const cleanups: (() => void)[] = [];

    step.highlight.forEach((highlight) => {
      if (!highlight.action) return;

      const element = document.getElementById(highlight.elementId);
      if (!element) return;

      const handler = () => next();
      element.addEventListener(highlight.action, handler);

      cleanups.push(() =>
        element.removeEventListener(highlight.action!, handler),
      );
    });

    return () => cleanups.forEach((c) => c());
  }, [step]);

  return {
    step,
    currentStep,
    next,
  };
}
