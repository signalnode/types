export type SignalNodeEntity<C, E> = {
  name: E;
  description: string;
  value: string | number | boolean;
  history?: { value: string | number | boolean; timestamp: number }[];
  unit?: string;
  job?: {
    interval: [string, string, string, string, string, string?];
    run: (config: C) => Promise<any>;
  };
};
