export interface Routing {
  region: string;
  platform: string;
}

export interface serverOptions {
  id: number;
  label: string;
  value: Routing;
}
