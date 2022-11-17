export type Job = <T>(config?: T) => any;

export type AsyncJob = (config?: any) => Promise<any>;
