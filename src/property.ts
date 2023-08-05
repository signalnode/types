import { PropertyType } from './property-types';
import { SignalNodePropertyTask } from './task';

export type SignalNodeProperty<C, P> = {
  name: P;
  description: string;
  value: any;
  unit: string;
  type: PropertyType;
  useHistory?: boolean;
  //   history?: { value: string | number | boolean; timestamp: number }[];
  //   task?: SignalNodePropertyTask<C>;
};
