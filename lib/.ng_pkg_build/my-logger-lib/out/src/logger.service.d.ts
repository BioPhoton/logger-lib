import { LoggerConfig } from './logger-config';
import { LogFormatterService } from './log-formatter.service';
export declare class LoggerService {
    private config;
    private logFormatter;
    constructor(config: LoggerConfig, logFormatter: LogFormatterService);
    debug(message: string): void;
    log(message: string): void;
}
