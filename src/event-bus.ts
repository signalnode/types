import emitter from 'events';

export type EventBus = {
  emit: (key: string, value: string | number | boolean | Date) => void;
  on: (eventName: string, listener: (value: string | number | boolean | Date) => void) => void;
};
