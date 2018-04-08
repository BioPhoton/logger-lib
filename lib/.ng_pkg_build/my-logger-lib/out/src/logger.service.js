/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LoggerConfig } from './logger-config';
import { LogFormatterService } from './log-formatter.service';
export class LoggerService {
    /**
     * @param {?} config
     * @param {?} logFormatter
     */
    constructor(config, logFormatter) {
        this.config = config;
        this.logFormatter = logFormatter;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    debug(message) {
        if (!this.config.enableDebug)
            return;
        console.debug(this.logFormatter.format(message));
    }
    /**
     * @param {?} message
     * @return {?}
     */
    log(message) {
        console.log(this.logFormatter.format(message));
    }
}
LoggerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LoggerService.ctorParameters = () => [
    { type: LoggerConfig, },
    { type: LogFormatterService, },
];
function LoggerService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LoggerService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LoggerService.ctorParameters;
    /** @type {?} */
    LoggerService.prototype.config;
    /** @type {?} */
    LoggerService.prototype.logFormatter;
}
//# sourceMappingURL=logger.service.js.map