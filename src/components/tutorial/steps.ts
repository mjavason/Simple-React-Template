import {
  gHandOnWaist,
  gPointLeft,
  gPointRight,
  gPointUp,
  pointerLeftDown,
  pointerRight,
  pointerRightUp,
} from '@/assets';

export type Placement =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left';

export type HighlightAction = 'click' | 'hover' | 'next' | 'none';

export interface TutorialStep {
  title?: string;
  content: string;
  textPlacement?: Placement;
  characterPosition?: {
    icon: string;
    placement: Placement;
    width?: number;
  };
  pointerPosition?: {
    icon: string;
    placement: Placement;
    width?: number;
  };
  highlight?: {
    elementId: string;
    action: HighlightAction;
  };
  actionButtonText?: string;
}

export const WelcomeSteps: TutorialStep[] = [
  {
    title: 'Welcome to the GrandmaWura Hub',
    content:
      'Ah Ha! Hello there, My name is Grandma Wura and welcome to my Hub! We are going have fun learning about our African Heritage, interesting skills and taking care of our environment',
    textPlacement: 'top',
    characterPosition: {
      icon: gHandOnWaist,
      placement: 'right',
    },
  },

  {
    title: 'Eco House',
    content:
      'Over here we will learn about our environment and how our actions can make the world a cleaner and safer place',
    textPlacement: 'top',
    characterPosition: {
      icon: gPointLeft,
      placement: 'bottom-right',
    },

    pointerPosition: {
      icon: pointerLeftDown,
      placement: 'top-right',
    },

    highlight: {
      elementId: 'eco-house-svg',
      action: 'none',
    },
  },

  {
    title: 'HQ',
    content:
      'Through stories, proverbs, fun activities, and everyday lessons, the HQ will help discover values that will guide you wherever you go.',
    textPlacement: 'top',
    characterPosition: {
      icon: gPointUp,
      placement: 'bottom-left',
    },
    pointerPosition: {
      icon: pointerLeftDown,
      placement: 'top-right',
    },
    highlight: {
      elementId: 'hq-svg',
      action: 'none',
    },
  },

  {
    title: 'Spotlight',
    content:
      'The Spotlight is the hub for creativity and expression. It is where we learn to Act, Sing, Dance and show all of our creativity that would throw us into the SPOTLIGHT!!',
    textPlacement: 'top',
    characterPosition: {
      icon: gPointRight,
      placement: 'bottom-left',
    },
    pointerPosition: {
      icon: pointerRightUp,
      placement: 'bottom-left',
    },
    highlight: {
      elementId: 'spotlight-svg',
      action: 'none',
    },
  },

  {
    title: 'Hub TV',
    content:
      'A good story stays in the heart forever. At the Hub TV get to Watch, Sing along and let every video teach you something new.',
    textPlacement: 'top',
    characterPosition: {
      icon: gPointRight,
      placement: 'bottom-left',
    },
    pointerPosition: {
      icon: pointerRight,
      placement: 'left',
    },
    highlight: {
      elementId: 'hub-tv-svg',
      action: 'none',
    },
  },

  {
    content:
      'Now that we know what each faculty is about, lets take a look at one of them. Click on the HQ to explore all the fun it has to offer!',
    textPlacement: 'top',
    characterPosition: {
      icon: gHandOnWaist,
      placement: 'bottom-left',
    },
    pointerPosition: {
      icon: pointerLeftDown,
      placement: 'top-right',
    },
    highlight: {
      elementId: 'hq-svg',
      action: 'click',
    },
  },
];
