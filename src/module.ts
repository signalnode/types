import { SignalNodeEntity } from './entity';
import { UIConfig } from './uiconfig';

export interface SignalNodeModule<C, E> {
  /**
   * Will be executed every time the settings page get called
   */
  uiConfig?: UIConfig<C>;

  /**
   * Will be executed once while the installation
   */
  entities: SignalNodeEntity<C, E>[];

  /**
   * Registrates jobs which will be executed on an defined interval
   */
  jobs?: {
    interval: [string, string, string, string, string, string?];
    run: (config: C) => Promise<[E, string | number | boolean][]>;
  }[];

  /**
   * Function which will be called when starting the module
   */
  run: (config: C) => Promise<void>;
}
