export type SignalNodeServiceManager = {
  registerService: (service: () => void, interval: [string, string, string, string, string, string?]) => void;
  //   unregisterService: () => void;
};
