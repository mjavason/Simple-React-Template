import { MyProfileResponseType } from '../api/auth/types/my-profile.type';
import { ContentType } from '../api/content/types/content.type';
import { PARENT_APP_BASE_URL } from './env';

export const CookieKeys = {
  TOKEN: 'gwa_kid_token',
  USER: 'gwa_kid',
  REDIRECT_ROUTE: 'gwa_kid_redirect_route',
  THEME: 'gwa_kid_theme',
  VISITED: 'gwa_kid_visited',

  USER_TYPE: 'gwa_kid_user_type',
  ORG_UUID: 'gwa_kid_org_uuid',
  ONBOARDING_COMPLETE: 'gwa_kid_onboarding_complete',
  PAYMENT_GATEWAY: 'gwa_kid_payment_gateway',
  IS_EXPRESS_REGISTRATION: 'gwa_kid_is_express_registration',
  IS_AUTO_LOGIN: 'gwa_kid_is_auto_login',
  ERROR_MESSAGE: 'gwa_kid_error_message',

  ACTIVE_TOUR: 'gwa_kid_active_tour',
  SEEN_INTRO_VIDEO: 'gwa_kid_seen_intro_video',
};

export const CacheKeys = {
  USERS: 'users',
  PARENT_CHILD: 'parent_child',
  PROFILE: 'profile',
  CONTENT: 'content',
  NEXT_CONTENT: 'next_content',
  PROGRAMMES: 'programmes',
  PROGRAMME: 'programme',
  VIEWING_HISTORY: 'viewing_history',
  CRITICAL_THINKING_QUIZ: 'critical_thinking_quiz',
  QUIZ: 'quiz',
  QUIZ_ATTEMPTS: 'quiz_attempts',
  STORY_STOP: 'story_stop',
  PLEDGE: 'pledge',
};

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const THEMES = {
  text: {
    400: '#51190A',
  },
  placeholder: '#51190A7A',
  brown: {
    50: 'hsl(26, 100%, 79%)',
    100: 'hsl(26, 100%, 69%)',
    200: 'hsl(26, 100%, 59%)',
    300: 'hsl(26, 100%, 49%)',
    400: 'hsl(26, 100%, 39%)',
    500: 'hsl(26, 100%, 29%)',
    600: 'hsl(26, 100%, 26%)',
    700: 'hsl(26, 100%, 23%)',
    800: 'hsl(26, 100%, 20%)',
    900: 'hsl(26, 100%, 18%)',
  },
  whiteColorScheme: {
    50: '#fff',
    100: 'hsl(26, 100%, 100%)',
    200: 'hsl(26, 100%, 100)',
    300: 'hsl(26, 100%, 100%)',
    400: 'hsl(26, 100%, 100%)',
    500: 'hsl(26, 100%, 100%)',
    600: 'hsl(26, 100%, 100%)',
    700: 'hsl(26, 100%, 100%)',
    800: 'hsl(26, 100%, 100%)',
    900: 'hsl(26, 100%, 100%)',
  },
  bg: '#F5FCFF',
  bg100: '#FBE5D2',
  bgbase: 'linear-gradient(180deg, #FFB2B2 0%, #FFCC53 100%)',
  bgauth: 'linear-gradient(180deg, #FFE8B6 0%, #FFCBD8 100%)',
  bgprofile:
    'linear-gradient(180deg, #6D65F2 0%, #CCA7F9 49.94%, #FADAFC 105.13%)',
  bgeco: 'linear-gradient(180deg, #96C94A 0%, #71B637 100%)',
  bgspotlight: 'linear-gradient(180deg, #A663F5 0%, #5700E8 100%)',
  bgtv: 'linear-gradient(180deg, #2687E5 0%, #1E236F 100%)',
  bggwh: 'background: linear-gradient(180deg, #5EC6D9 0%, #2E7BC6 100%)',
  border: 'hsl(13, 78%, 78%)',
  border50: '#FFFFFF29',
  border100: '#51190A1F',
  borderhover: 'hsl(13, 78%, 80%)',
  buttonborder: '#FFFFFF33',

  brand: {
    50: 'hsl(197, 99%, 78%)',
    100: 'hsl(197, 99%, 70%)',
    200: 'hsl(197, 99%, 62%)',
    300: 'hsl(197, 99%, 55%)',
    400: 'hsl(197, 99%, 50%)',
    500: 'hsl(197, 99%, 48%)',
    600: 'hsl(197, 99%, 48%)',
    700: 'hsl(197, 99%, 36%)',
    800: 'hsl(197, 99%, 31%)',
    900: 'hsl(197, 99%, 28%)',
  },
};

export const Routes = {
  // landing: "/",
  login: '/login',
  profile: '/profile',
  register: `${PARENT_APP_BASE_URL}/register`,
  sections: '/',

  section: (param?: string) => {
    return `/section/${param ?? ':uuid'}`;
  },

  programme: (param?: string) => {
    return `/programme/${param ?? ':uuid'}`;
  },

  watch: (param?: string) => {
    return `/watch/${param ?? ':uuid'}`;
  },

  // new hq
  newHq: (param?: string) => `/hq/${param ?? ':uuid'}/menu`,
  criticalThinkingQuiz: (param?: string) => {
    return `/hq/critical-thinking-quiz/${param ?? ':uuid'}`;
  },
  storyStop: (param?: string) => `/hq/story-stop/${param ?? ':uuid'}`,
  storyStopContent: (param?: string) =>
    `/hq/story-stop/content/${param ?? ':uuid'}`,
  pledge: (param?: string) => `/hq/pledge/${param ?? ':uuid'}`,

  // sample routes
  sampleFaculties: '/sample',
  sampleCriticalThinking: '/sample/critical-thinking',
  sampleStoryStop: (param?: string) => {
    return `/sample/story-stop/${param ?? ':uuid'}`;
  },
  sampleStoryStopContent: (param?: string) => {
    return `/sample/story-stop/content/${param ?? ':uuid'}`;
  },
  sampleProgrammes: (param?: string) => {
    return `/sample/programmes/${param ?? ':uuid'}`;
  },
  sampleContent: (param?: string) => {
    return `/sample/content/${param ?? ':uuid'}`;
  },
  sampleWatch: (param?: string) => {
    return `/sample/watch/${param ?? ':uuid'}`;
  },
  sampleNewHq: '/sample/new-hq',
  samplePledge: (param?: string) => {
    return `/sample/pledge/${param ?? ':uuid'}`;
  },
};

export const SubscriptionBenefits = ['eco_house', 'hq', 'spotlight', 'hub_tv'];

// sample profile data for tour
export const SampleProfile: MyProfileResponseType = {
  id: 'sample-profile-id',
  uuid: '54d0d8e7-b120-427c-9440-7f179ddd2c2a',
  email: 'sample@example.com',
  pictureUrl: '',
  role: null,
  permissions: [],
  status: 'active',
  isSuper: false,
  is2FAEnabled: false,
  isEmailVerified: false,
  hasActiveSubscription: false,
  activeSubscription: null,
  isAutoSubscriptionEnabled: false,
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '2004-02-29T00:00:00.000Z',
  phoneNumber: null,
  country: 'Nigeria',
  userType: 'child',
  gender: 'male',
  isActive: true,
  orgType: null,
  orgName: null,
  orgSize: null,
  parentEmail: 'parent@gmail.com',
  parentId: '6a0328ded9d7f73160c347b1',
  parent: {
    role: 'parent',
    parentId: null,
    parent: null,
    dateOfBirth: '2000-01-01T00:00:00.000Z',
    uuid: '54d0d8e7-b120-427c-9440-7f179ddd2c2a',
    email: 'parent@gmail.com',
    pictureUrl:
      'https://api.dicebear.com/5.x/lorelei-neutral/svg?seed=parent-uc69m-gmail-dnvnz-com&size=200&radius=50',
    isEmailVerified: false,
    permissions: [],
    status: 'active',
    isSuper: false,
    is2FAEnabled: false,
    hasActiveSubscription: true,
    isAutoSubscriptionEnabled: false,
    firstName: 'Michael',
    lastName: 'Orji',
    phoneNumber: null,
    country: 'Nigeria',
    userType: 'parent',
    gender: 'other',
    isActive: true,
    orgType: null,
    orgName: null,
    orgSize: null,
    parentEmail: null,
    parentalControlStartTime: '00:00',
    parentalControlEndTime: '00:00',
    isOnboardingCompleted: false,
    controlPin: '1234',
    isExpressRegistration: false,
    activeSubscription: {
      hasExpired: true,
      startDate: '2026-05-12T13:20:22.276Z',
      endDate: '2026-06-11T13:20:22.276Z',
      subscriptionPlan: {
        title: 'deluxe',
        benefits: ['eco_house', 'hq', 'spotlight', 'hub_tv'],
        id: '69f243363ce7b75a324cac02',
      },
    },
    id: '6a0328ded9d7f73160c347b1',
  },
  parentalControlStartTime: '00:00',
  parentalControlEndTime: '00:00',
  isOnboardingCompleted: false,
  isExpressRegistration: false,
  controlPin: '1235',
};

export function getSampleProgrammes(faculty: string) {
  switch (faculty) {
    case 'eco_house':
      return [
        {
          id: '69f243313ce7b75a324caa82',
          uuid: 'bb5316be-28ea-4b12-8787-27c7791e0a31',
          title: 'ECO LESSONS WITH SINGING TREE',
          type: 'movie',
          format: 'video',
          description:
            'Educational lessons on climate change are led by the enchanting character Singing Tree, who teaches children about preserving the earth.',
          banner:
            'https://eu2.contabostorage.com/172f71e8fb6d4a24b3ed13a23e2fd052:par/par/ECO_LESSONS_WITH_SINGING_TREE.jpg',
          trailer: 'xksz5nmngn5lfljbfzte',
          cast: ['Oluchi Odii', 'Bola Edwards'],
          isFeatured: true,
          category: 'eco_house',
          thumbnail:
            'http://res.cloudinary.com/dwetieo5k/image/upload/v1730050615/yibc2qlq02jmtio2kymy.jpg',
          createdAt: '2026-04-29T17:43:13.379Z',
          updatedAt: '2026-04-29T17:43:13.379Z',
          numberOfContents: 0,
          badgeId: null,
        },
      ];
    case 'hq':
      return [
        {
          id: '6a44c417603d63e237de6df6',
          uuid: '9bc14d7b-e5c8-4cd6-a391-e5cf2a0c4cab',
          title: 'SELF AWARENESS',
          type: 'series',
          format: 'video',
          description: '',
          banner:
            'https://par-prod-private.s3.eu-west-1.amazonaws.com/par-prod-private/uploads/bf317cb8-6ad9-46c3-80ea-f348c790102b-IMG-20250909-WA0002.jpg',
          trailer:
            'https://par-prod-private.s3.eu-west-1.amazonaws.com/par-prod-private%2Fuploads%2F25a805c4-a3ff-4140-b504-910ac93b6ef3-DISCIPLINE+OUT_.mp4',
          cast: ['Grandma Wura and the finders'],
          isFeatured: true,
          category: 'hq',
          thumbnail:
            'https://par-prod-private.s3.eu-west-1.amazonaws.com/par-prod-private/uploads/eb2c4016-78e6-498e-9e0e-62e7ced99ad6-IMG_0193.jpeg',
          createdAt: '2026-07-01T07:39:03.933Z',
          updatedAt: '2026-07-08T08:26:47.031Z',
          numberOfContents: 0,
          badgeId: null,
        },
      ];
    case 'spotlight':
      return [
        {
          id: '69f243313ce7b75a324caa92',
          uuid: '5456b0f8-6171-4ea6-b8ce-739f996e7917',
          title: 'SINGING GARDENS',
          type: 'movie',
          format: 'video',
          description: 'Introduction to the rudiments of Singing.',
          banner:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/6160985D-7011-4E24-9633-A4D8B8BD64D0.jpeg',
          trailer:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/trim.3D9A9DA8-3C6A-4DB4-A757-321106A5C685.MOV',
          cast: ['Charity Omaghomi', 'Oluchi Odia'],
          isFeatured: true,
          category: 'spotlight',
          thumbnail:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/EA07B90F-A04A-4491-86A5-08020AA67565.jpeg',
          createdAt: '2026-04-29T17:43:13.415Z',
          updatedAt: '2026-04-29T17:43:13.415Z',
          numberOfContents: 0,
          badgeId: null,
        },
      ];
    case 'hub_tv':
      return [
        {
          id: '69f243313ce7b75a324caa86',
          uuid: '54368799-0c40-4453-9c6b-9adbc2fc14b0',
          title: 'STORY HUT',
          type: 'movie',
          format: 'video',
          description:
            'Stories aided with illustrations/animations, focused on teaching children good morals, African cultural values, life based teachings and how to apply them.',
          banner:
            'https://eu2.contabostorage.com/172f71e8fb6d4a24b3ed13a23e2fd052:par/par/GRANDMA_WURA_STORY_HUT.jpg',
          trailer: 'dcihfwul3xvglwrxaafj',
          cast: ['Grandma Wura'],
          isFeatured: true,
          category: 'hub_tv',
          thumbnail:
            'http://res.cloudinary.com/dwetieo5k/image/upload/v1730084797/nj3l6m0uwluygu3o4tlk.jpg',
          createdAt: '2026-04-29T17:43:13.387Z',
          updatedAt: '2026-04-29T17:43:13.387Z',
          numberOfContents: 0,
          badgeId: null,
        },
      ];
    default:
      return [];
  }
}

export function getSampleContent(faculty: string): ContentType[] | any[] {
  switch (faculty) {
    case 'eco_house':
      return [
        {
          id: '69f243343ce7b75a324caac6',
          uuid: '330406e9-f2ad-435a-a045-d612380beb01',
          title: 'Water pollution',
          format: 'video',
          description:
            'Join singing tree as she teaches us how to save the world from Water pollution',
          category: 'eco_house',
          thumbnail:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/WATER_POLLUTION_02_-_ECO_LESSONS.jpg',
          isFeatured: true,
          badgeCriteria: 'end',
          quizDisplayCriteria: 'end',
          badgeId: null,
          quizId: null,
          badge: null,
          quiz: null,
          priority: 2,
          programmeId: '69f243313ce7b75a324caa82',
          programme: null,
          content:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/ECO_HOUSE-_WATER_POLUTION_prob3.mp4',
          season: 1,
          cast: [],
          views: 5,
          quizAttempt: {
            id: null,
            quizId: null,
            quiz: null,
            userId: null,
            user: null,
            score: null,
            hasPassed: false,
            createdAt: null,
            updatedAt: null,
          },
          pdfUrl: null,
          createdAt: '2026-04-29T17:43:16.178Z',
          updatedAt: '2026-07-07T09:19:38.970Z',
          isPreviousCompleted: true,
        },
        {
          id: '69f243343ce7b75a324caaca',
          uuid: 'eeacce93-1fb3-44e3-a53c-943f12cde9d0',
          title: 'Animal extinction',
          format: 'video',
          description:
            'Join singing tree as she teaches us to save the world from Animal extinction',
          category: 'eco_house',
          thumbnail:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/ANIMAL_EXCTINCTION_02_-_ECO_LESSONS.jpg',
          isFeatured: true,
          badgeCriteria: 'end',
          quizDisplayCriteria: 'end',
          badgeId: null,
          quizId: null,
          badge: null,
          quiz: null,
          priority: 3,
          programmeId: '69f243313ce7b75a324caa82',
          programme: null,
          content:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/EH_EP3.mp4',
          season: 1,
          cast: [],
          views: 1,
          quizAttempt: {
            id: null,
            quizId: null,
            quiz: null,
            userId: null,
            user: null,
            score: null,
            hasPassed: false,
            createdAt: null,
            updatedAt: null,
          },
          pdfUrl: null,
          createdAt: '2026-04-29T17:43:16.187Z',
          updatedAt: '2026-07-07T09:24:46.959Z',
          isPreviousCompleted: true,
        },
      ];
    case 'hq':
      return [
        {
          id: '69f243343ce7b75a324cab06',
          uuid: 'cad1a627-ed59-4afe-a894-9a68d3f64a10',
          title: 'INTEGRITY',
          format: 'video',
          description:
            'Being honest, trustworthy, and doing what’s right, even when no one is watching.',
          category: 'hq',
          thumbnail:
            'https://par-prod-private.s3.eu-west-1.amazonaws.com/IMG_7805.PNG',
          isFeatured: true,
          badgeCriteria: 'end',
          quizDisplayCriteria: 'midpoint',
          badgeId: null,
          quizId: '69f243373ce7b75a324cad7e',
          badge: null,
          quiz: null,
          priority: 1,
          programmeId: '6a44c417603d63e237de6df6',
          programme: null,
          content:
            'https://par-prod-private.s3.eu-west-1.amazonaws.com/GWSB_-_Integrity.mp4',
          season: 1,
          cast: [
            'At the end of this episode the children are expected to; understand what it means to be a person of integrity',
            'Learn the meaning of integrity',
            'Learn how to spell integrity',
            'know how to apply integrity in your everyday life',
            'To be able to quote the Proverb',
          ],
          views: 4,
          quizAttempt: {
            id: '6a3d0ba3603d63e237de6834',
            quizId: '69f243373ce7b75a324cad7e',
            quiz: null,
            userId: '69f2432f3ce7b75a324ca97a',
            user: null,
            score: 100,
            hasPassed: true,
            createdAt: '2026-06-25T11:06:11.208Z',
            updatedAt: '2026-06-25T11:06:11.208Z',
          },
          pdfUrl: null,
          createdAt: '2026-04-29T17:43:16.308Z',
          updatedAt: '2026-07-09T09:43:34.681Z',
          isPreviousCompleted: true,
        },
        {
          id: '69f243343ce7b75a324cab16',
          uuid: '58d657db-335f-4b2c-a6d2-d128cd39ba9d',
          title: 'DISCIPLINE',
          format: 'video',
          description:
            'Staying focused, consistent, and committed to doing the right thing.',
          category: 'hq',
          thumbnail:
            'https://par-prod-private.s3.eu-west-1.amazonaws.com/IMG_4896_(1).JPG',
          isFeatured: true,
          badgeCriteria: 'end',
          quizDisplayCriteria: 'end',
          badgeId: null,
          quizId: null,
          badge: null,
          quiz: null,
          priority: 1,
          programmeId: '6a44c417603d63e237de6df6',
          programme: null,
          content:
            'https://par-prod-private.s3.eu-west-1.amazonaws.com/GWSB_-_Discipline.mp4',
          season: 1,
          cast: [
            'At the end of this episode the children are expected to; understand what it means to be a person of discipline',
            'know the meaning of discipline',
            'know how to spell discipline',
            'know how to apply discipline in your everyday life',
            'To be able to quote the Proverb',
          ],
          views: 4,
          quizAttempt: {
            id: null,
            quizId: null,
            quiz: null,
            userId: null,
            user: null,
            score: null,
            hasPassed: false,
            createdAt: null,
            updatedAt: null,
          },
          pdfUrl:
            'https://par-prod-private.s3.eu-west-1.amazonaws.com/par-prod-private/uploads/810f0158-e7c5-4332-adf4-882497eafffb-Untitled%20document.pdf',
          createdAt: '2026-04-29T17:43:16.348Z',
          updatedAt: '2026-07-09T09:41:45.696Z',
          isPreviousCompleted: true,
        },
      ];
    case 'spotlight':
      return [
        {
          id: '69f243343ce7b75a324caaa6',
          uuid: 'd3f08ac6-b020-48cd-ac75-655f1e5ea2d3',
          title: 'INTRODUCTION TO SINGING',
          format: 'video',
          description:
            'Learn the basic rudiments of singing and how to care for your voice.',
          category: 'spotlight',
          thumbnail:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/5D65CFC3-1606-40AB-9018-DCF17F51DE78.jpeg',
          isFeatured: true,
          badgeCriteria: 'end',
          quizDisplayCriteria: 'end',
          badgeId: null,
          quizId: null,
          badge: null,
          quiz: null,
          priority: 1,
          programmeId: '69f243313ce7b75a324caa92',
          programme: null,
          content:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/trim.DB6FA0BD-0A5F-4943-92D5-21B217DFBB25.MOV',
          season: 1,
          cast: [],
          views: 1,
          quizAttempt: {
            id: null,
            quizId: null,
            quiz: null,
            userId: null,
            user: null,
            score: null,
            hasPassed: false,
            createdAt: null,
            updatedAt: null,
          },
          pdfUrl: null,
          createdAt: '2026-04-29T17:43:16.113Z',
          updatedAt: '2026-07-07T13:10:13.685Z',
          isPreviousCompleted: true,
        },
        {
          id: '69f243343ce7b75a324caab6',
          uuid: '9d2dec96-0fee-4670-b82b-2f619e4c617d',
          title: 'BREATHING',
          format: 'video',
          description:
            'Learn effective breathing techniques for flawless singing',
          category: 'spotlight',
          thumbnail:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/DEDDFAE6-9615-4238-A919-2FABBA6A9230.jpeg',
          isFeatured: true,
          badgeCriteria: 'end',
          quizDisplayCriteria: 'end',
          badgeId: null,
          quizId: null,
          badge: null,
          quiz: null,
          priority: 2,
          programmeId: '69f243313ce7b75a324caa92',
          programme: null,
          content:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/trim.F215FD71-0C0F-488B-80C0-4C732875DBF1.MOV',
          season: 1,
          cast: [],
          views: 1,
          quizAttempt: {
            id: null,
            quizId: null,
            quiz: null,
            userId: null,
            user: null,
            score: null,
            hasPassed: false,
            createdAt: null,
            updatedAt: null,
          },
          pdfUrl: null,
          createdAt: '2026-04-29T17:43:16.145Z',
          updatedAt: '2026-07-07T13:11:47.084Z',
          isPreviousCompleted: true,
        },
      ];
    case 'hub_tv':
      return [
        {
          id: '69f243343ce7b75a324caaba',
          uuid: '88695b79-a863-4e35-9c0c-37b392e2b2cd',
          title: 'Ebibulu',
          format: 'video',
          description:
            'Two friends who face trials for the sake of their country which is falling into ruins.',
          category: 'hub_tv',
          thumbnail:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/WhatsApp_Image_2025-04-19_at_1.29.06_PM.jpeg',
          isFeatured: true,
          badgeCriteria: 'end',
          quizDisplayCriteria: 'end',
          badgeId: null,
          quizId: null,
          badge: null,
          quiz: null,
          priority: 1,
          programmeId: '69f243313ce7b75a324caa86',
          programme: null,
          content:
            'https://par-private-staging.s3.eu-north-1.amazonaws.com/SH_EBIBULU_NEW_2.MP4',
          season: 1,
          cast: [],
          views: 1,
          quizAttempt: {
            id: null,
            quizId: null,
            quiz: null,
            userId: null,
            user: null,
            score: null,
            hasPassed: false,
            createdAt: null,
            updatedAt: null,
          },
          pdfUrl: null,
          createdAt: '2026-04-29T17:43:16.154Z',
          updatedAt: '2026-07-07T09:48:55.992Z',
          isPreviousCompleted: true,
        },
        {
          id: '6a5518c844eef96e345a9ff8',
          uuid: 'bdb8c839-c968-4e7b-8f54-889bbaa98fda',
          title: 'THE COW AND THE FLY',
          format: 'video',
          description:
            'Join Grandma Wura as she takes you on an amazing African adventure through story telling',
          category: 'hub_tv',
          thumbnail:
            'https://par-prod-private.s3.eu-west-1.amazonaws.com/par-prod-private/uploads/b7671e5e-de95-46bf-aaef-eee98e926cad-Screenshot%202026-07-13%20062917.png',
          isFeatured: true,
          badgeCriteria: 'end',
          quizDisplayCriteria: 'end',
          badgeId: null,
          quizId: null,
          badge: null,
          quiz: null,
          priority: 1,
          programmeId: '69f243313ce7b75a324caa86',
          programme: null,
          content:
            'https://par-prod-private.s3.eu-west-1.amazonaws.com/par-prod-private%2Fuploads%2F056b0831-34ea-4237-962c-9024bba56325-THE+COW+AND+THE+FLY.mp4',
          season: 2,
          cast: [''],
          views: 0,
          quizAttempt: {
            id: null,
            quizId: null,
            quiz: null,
            userId: null,
            user: null,
            score: null,
            hasPassed: false,
            createdAt: null,
            updatedAt: null,
          },
          pdfUrl: null,
          createdAt: '2026-07-13T16:56:40.431Z',
          updatedAt: '2026-07-13T16:56:40.431Z',
          isPreviousCompleted: true,
        },
      ];
    default:
      return [];
  }
}
