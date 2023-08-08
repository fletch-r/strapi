import type { ConfigFunction } from './shared.d.ts';

export type AppProp = {
  keys: string[];
};

export type CronProp = {
  enabled?: boolean;
  tasks?: object; // TODO: does strapi crash if cron is enabled but tasks is empty?
};

export type DirsProp = {
  public?: string;
};

export type WebhooksProp = {
  populateRelations?: boolean;
};

export type ServerConfiguration = {
  // required
  host: string;
  post: number;
  app: AppProp;

  // optional
  socket?: string | number;
  emitErrors?: boolean;
  url?: string;
  proxy?: boolean;
  globalProxy?: string;
  cron?: CronProp;
  dirs?: DirsProp;
  webhooks?: WebhooksProp;
};

// TODO: can this just be an object rather than a function?
export type Server = ConfigFunction<ServerConfiguration>;