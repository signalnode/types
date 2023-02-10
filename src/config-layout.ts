import { InputElement } from './elements/input';

export type SignalNodeConfigLayout<C> = {
  columnTemplate?: string;
  rowTemplate?: string;
  gap?: number;
  elements: InputElement<C>[];
};
