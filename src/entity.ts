export type SignalNodeEntity<E> = {
  name: E;
  description: string;
  value: string | number;
  unit?: string;
  interval?: [string, string, string, string, string, string?];
  job?: ((config: any) => any) | ((config: any) => Promise<any>);
};
