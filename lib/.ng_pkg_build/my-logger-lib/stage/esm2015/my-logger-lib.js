import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class LoggerConfig {
}
LoggerConfig.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class LogFormatterService {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoggerService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DefaultLogFormatterService {
    /**
     * @param {?} message
     * @return {?}
     */
    format(message) {
        return message;
    }
}
DefaultLogFormatterService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoggerModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: LoggerModule,
            providers: [
                LoggerService,
                { provide: LoggerConfig, useValue: config },
                ...(!config.logFormatterImplementation) ?
                    [{ provide: LogFormatterService, useClass: DefaultLogFormatterService }] :
                    [{ provide: LogFormatterService, useClass: config.logFormatterImplementation }]
            ]
        };
    }
}
LoggerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [],
                declarations: [],
                exports: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { LoggerConfig, LoggerModule, LoggerService, LogFormatterService, DefaultLogFormatterService };
//# sourceMappingURL=my-logger-lib.js.map
