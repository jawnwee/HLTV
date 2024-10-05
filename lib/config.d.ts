import { Agent as HttpsAgent } from 'https';
import { Agent as HttpAgent } from 'http';
export interface HLTVConfig {
    loadPage: (url: string) => Promise<string>;
    httpAgent: HttpsAgent | HttpAgent;
}
export declare const defaultLoadPage: (httpAgent: HttpsAgent | HttpAgent | undefined) => (url: string) => any;
export declare const defaultConfig: HLTVConfig;
