import { SignalNodeConfigLayout } from './config-layout';
import { EventBus } from './event-bus';
import { SignalNodeProperty } from './property';
import { SignalNodeServiceManager } from './service-manager';
import { SignalNodeAddonTask } from './task';

export interface SignalNodeIntegration<C, P extends string> {
  configLayout?: SignalNodeConfigLayout<C>;
  useForeignProperties?: boolean;
  properties?: SignalNodeProperty<C, P>;
  start: (eventBus: EventBus, serviceManager: SignalNodeServiceManager, config: C) => Promise<void>;
}
