import gHandOnWaist from '../../assets/grandmawura-hand-on-waist.png'
import gPointLeft from '../../assets/grandmawura-point-left.png'
import gPointRight from '../../assets/grandmawura-point-right.png'
import gPointUp from '../../assets/grandmawura-point-up.png'
import pointerLeftDown from '../../assets/pointer-left-down.png'
import pointerLeft from '../../assets/pointer-left.png'
import pointerRightUp from '../../assets/pointer-right-up.png'
import pointerRight from '../../assets/pointer-right.png'

export interface TutorialStep {
  title?: string;
  content: string;
  textPosition: {
    top: number;
    left: number;
  };
  characterPosition?: {
    icon: string;
    top: number;
    left: number;
  };
  pointerPosition?: {
    icon: string;
    top: number;
    left: number;
  };
  highlight?: {
    elementId: string;
    action: 'click' | 'hover' | 'next' | 'none';
  }[];
  actionButtonText?: string;
}

export const WelcomeSteps: TutorialStep[] = [
  {
    title: 'Welcome to the GrandmaWura Hub',
    content:
      'Ah Ha! Hello there, My name is Grandma Wura and welcome to my Hub! We are going have fun learning about our African Heritage, interesting skills and taking care of our environment',
    textPosition: {
      top: 120,
      left: 80,
    },
    characterPosition: {
      icon: gHandOnWaist,
      top: 420,
      left: 30,
    },
    highlight: [],
  },

  {
    title: 'Eco House',
    content:
      'Over here we will learn about our environment and how our actions can make the world a cleaner and safer place',
    textPosition: {
      top: 60,
      left: 720,
    },
    characterPosition: {
      icon: gPointLeft,
      top: 350,
      left: 850,
    },
    pointerPosition: {
      icon: pointerLeftDown,
      top: 180,
      left: 240,
    },
    highlight: [
      {
        elementId: 'eco-house-svg',
        action: 'none',
      },
    ],
  },

  {
    title: 'HQ',
    content:
      'Through stories, proverbs, fun activities, and everyday lessons, the HQ will help discover values that will guide you wherever you go.',
    textPosition: {
      top: 320,
      left: 480,
    },
    characterPosition: {
      icon: gPointUp,
      top: 520,
      left: 650,
    },
    pointerPosition: {
      icon: pointerLeft,
      top: 90,
      left: 950,
    },
    highlight: [
      {
        elementId: 'hq-svg',
        action: 'none',
      },
    ],
  },

  {
    title: 'Spotlight',
    content:
      'The Spotlight is the hub for creativity and expression. It is where we learn to Act, Sing, Dance and show all of our creativity that would throw us into the SPOTLIGHT!!',
    textPosition: {
      top: 520,
      left: 180,
    },
    characterPosition: {
      icon: gPointRight,
      top: 120,
      left: 1040,
    },
    pointerPosition: {
      icon: pointerRightUp,
      top: 400,
      left: 500,
    },
    highlight: [
      {
        elementId: 'spotlight-svg',
        action: 'none',
      },
    ],
  },

  {
    title: 'Hub TV',
    content:
      'A good story stays in the heart forever. At the Hub TV get to Watch, Sing along and let every video teach you something new.',
    textPosition: {
      top: 220,
      left: 980,
    },
    characterPosition: {
      icon: gPointRight,
      top: 480,
      left: 940,
    },
    pointerPosition: {
      icon: pointerRightUp,
      top: 300,
      left: 160,
    },
    highlight: [
      {
        elementId: 'hub-tv-svg',
        action: 'none',
      },
    ],
  },

  {
    content:
      'Now that we know what each faculty is about, lets take a look at one of them. Click on the HQ to explore all the fun it has to offer!',
    textPosition: {
      top: 150,
      left: 420,
    },
    characterPosition: {
      icon: gHandOnWaist,
      top: 560,
      left: 120,
    },
    pointerPosition: {
      icon: pointerRight,
      top: 120,
      left: 620,
    },
    highlight: [
      {
        elementId: 'hq-svg',
        action: 'click',
      },
    ],
  },
];
