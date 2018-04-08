import { LogFormatterService } from './log-formatter.service';
export declare type LogFormatterServiceType = new () => LogFormatterService;
export declare abstract class LoggerConfig {
    enableDebug: boolean;
    logFormatterImplementation: LogFormatterServiceType;
}
