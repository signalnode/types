import { SignalNodePropertyTask } from './task';

export type SignalNodeProperty<C, P> = {
  name: P;
  description: string;
  value: string | number | boolean;
  unit: string;
  useHistory?: boolean;
  history?: { value: string | number | boolean; timestamp: number }[];
  task?: SignalNodePropertyTask<C>;
};
