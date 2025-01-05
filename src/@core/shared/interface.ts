export interface IAppConfig {
    app: string;
    version: string;
    codes: string;
    env: IEnv[];
}

export interface IEnv {
    codes: string | any;
    [nameKey: string]: IEnvConfig;
}

export interface IEnvConfig {
    name: string;
    env: string;
    prefix: string;
    production: boolean;
    config: IEnvConfigDetail;
}

export interface IEnvConfigDetail {
    base_url: string;
    stripe_public_key?: string;
    third_parties: object;
}