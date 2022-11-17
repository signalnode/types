import { SignalNodeEntity } from './entity';
import { UIConfig } from './uiconfig';
import { Job } from './job';

export interface SignalNodeModule<C, E> {
  /**
   * Will be executed every time the settings page get called
   */
  getUIConfig?: () => UIConfig<C>;

  /**
   * Will be executen once while the installation
   */
  getEntities?: () => SignalNodeEntity<E>[];

  /**
   * Registrates jobs which will be executed on an defined interval
   */
  registerJobs?: () => {
    interval: [string, string, string, string, string, string?];
    job: ((config: C) => [E, any][]) | ((config: C) => Promise<[E, any][]>);
  }[];

  /**
   * Function which will be called when starting the module
   */
  run: (config: C) => void;
}
