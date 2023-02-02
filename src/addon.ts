import { SignalNodeConfigLayout } from './config_layout';
import { SignalNodeProperty } from './property';
import { SignalNodeAddonTask } from './task';

export interface SignalNodeAddon<C, P extends string> {
  // name: string;
  // description: string;
  // version: string;
  // author: string;
  /**
   * Will be executed every time the settings page get called
   */
  configLayout?: SignalNodeConfigLayout<C>;

  /**
   * Will be executed once while the installation
   */
  properties: SignalNodeProperty<C, P>[];

  /**
   * Registrates jobs which will be executed on an defined interval
   */
  tasks?: SignalNodeAddonTask<C, P>[];

  /**
   * Function which will be called when starting the module
   */
  start: (config: C) => Promise<void>;
}
