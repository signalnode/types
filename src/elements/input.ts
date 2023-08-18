export type InputElement<T> = {
  type: 'text' | 'password';
  label: string;
  name: keyof T;
  value?: string | boolean;
  options?: {
    columnStart?: string;
    rowStart?: string;
  };
};
