import type { FlexDirection, Placement } from './types';

export const characterPositions: Record<
  Placement,
  {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    transform?: string;
  }
> = {
  'top-left': {
    top: '32',
    left: '32',
  },

  top: {
    top: '32',
    left: '50%',
    transform: 'translateX(-50%)',
  },

  'top-right': {
    top: '32',
    right: '32',
  },

  right: {
    top: '50%',
    right: '32',
    transform: 'translateY(-50%)',
  },

  'bottom-right': {
    bottom: '32',
    right: '32',
  },

  bottom: {
    bottom: '32',
    left: '50%',
    transform: 'translateX(-50%)',
  },

  'bottom-left': {
    bottom: '32',
    left: '32',
  },

  left: {
    top: '50%',
    left: '32',
    transform: 'translateY(-50%)',
  },
};

export const textPositions: Record<
  Placement,
  { display: string; flexDirection: FlexDirection }
> = {
  left: {
    display: 'flex',
    flexDirection: 'row',
  },
  right: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  top: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'column',
  },

  // untested
  'top-left': {
    display: 'flex',
    flexDirection: 'column',
  },
  'top-right': {
    display: 'flex',
    flexDirection: 'column',
  },
  'bottom-left': {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  'bottom-right': {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
};
