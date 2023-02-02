export type SignalNodePropertyTask<C> = {
  interval: [string, string, string, string, string, string?];
  run: (config: C) => Promise<string | number | boolean>;
};

export type SignalNodeAddonTask<C, P extends string> = {
  interval: [string, string, string, string, string, string?];
  run: (config: C) => Promise<{ [name in P]: string | number | boolean }>;
};
