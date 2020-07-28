import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class AlphavantageDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        baseURL: string;
        crud: boolean;
        options: {
            headers: {
                "content-type": string;
            };
        };
        operations: {
            template: {
                method: string;
                url: string;
            };
            functions: {
                getDetails: string[];
            };
        }[];
    };
    constructor(dsConfig?: object);
}
