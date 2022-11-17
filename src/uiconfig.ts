import { InputElement } from './elements/input';

export type UIConfig<T> = {
  columnTemplate?: string;
  rowTemplate?: string;
  gap?: number;
  elements: InputElement<T>[];
};
