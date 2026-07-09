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
      top: 0,
      left: 0,
    },
    characterPosition: {
      icon: '/images/characters/grandma-wura.png',
      top: 0,
      left: 0,
    },
    pointerPosition: {
      icon: '/images/pointers/pointer.png',
      top: 0,
      left: 0,
    },
    highlight: [],
  },

  {
    title: 'Eco House',
    content:
      'Over here we will learn about our environment and how our actions can make the world a cleaner and safer place',
    textPosition: {
      top: 0,
      left: 0,
    },
    characterPosition: {
      icon: '/images/characters/grandma-wura.png',
      top: 0,
      left: 0,
    },
    pointerPosition: {
      icon: '/images/pointers/pointer.png',
      top: 0,
      left: 0,
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
      top: 0,
      left: 0,
    },
    characterPosition: {
      icon: '/images/characters/grandma-wura.png',
      top: 0,
      left: 0,
    },
    pointerPosition: {
      icon: '/images/pointers/pointer.png',
      top: 0,
      left: 0,
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
      top: 0,
      left: 0,
    },
    characterPosition: {
      icon: '/images/characters/grandma-wura.png',
      top: 0,
      left: 0,
    },
    pointerPosition: {
      icon: '/images/pointers/pointer.png',
      top: 0,
      left: 0,
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
      top: 0,
      left: 0,
    },
    characterPosition: {
      icon: '/images/characters/grandma-wura.png',
      top: 0,
      left: 0,
    },
    pointerPosition: {
      icon: '/images/pointers/pointer.png',
      top: 0,
      left: 0,
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
      'Now that we know what each faculty is about, lets take a look at one of them. click on the HQ to explore all the fun it has to offer!',
    textPosition: {
      top: 0,
      left: 0,
    },
    characterPosition: {
      icon: '/images/characters/grandma-wura.png',
      top: 0,
      left: 0,
    },
    highlight: [
      {
        elementId: 'hq-svg',
        action: 'click',
      },
    ],
  },
];
