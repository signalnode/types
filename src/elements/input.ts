export type InputElement<T> = {
  type: 'input';
  label: string;
  name: keyof T;
  value?: string | boolean;
  options?: {
    columnStart?: string;
    rowStart?: string;
  };
};
