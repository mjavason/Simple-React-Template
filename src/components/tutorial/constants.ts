import type { FlexDirection, Placement } from './types';

export const characterPositions: Record<
  Placement,
  {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
  }
> = {
 top: {
    top: '10%',
    left: '40%',
  },
  'top-right': {
    top: '10%',
    left: '80%',
  },
  right: {
    top: '40%',
    left: '80%',
  },
  'bottom-right': {
    top: '70%',
    left: '80%',
  },
  bottom: {
    top: '70%',
    left: '40%',
  },
  'bottom-left': {
    top: '70%',
    left: '5%',
  },
  left: {
    top: '40%',
    left: '5%',
  },
  'top-left': {
    top: '10%',
    left: '5%',
  },
};

export const textPositions: Record<
  Placement,
  { flexDirection?: FlexDirection; left?: string; top?: string }
> = {
  top: {
    top: '10%',
    left: '40%',
    flexDirection: 'column-reverse',
  },
  'top-right': {
    top: '10%',
    left: '80%',
    flexDirection: 'column',
  },
  right: {
    top: '40%',
    left: '80%',
    flexDirection: 'row-reverse',
  },
  'bottom-right': {
    top: '70%',
    left: '80%',
    flexDirection: 'column-reverse',
  },
  bottom: {
    top: '70%',
    left: '40%',
    flexDirection: 'column',
  },
  'bottom-left': {
    top: '70%',
    left: '5%',
    flexDirection: 'column-reverse',
  },
  left: {
    top: '40%',
    left: '5%',
    flexDirection: 'row',
  },
  'top-left': {
    top: '10%',
    left: '5%',
    flexDirection: 'column',
  },
};
