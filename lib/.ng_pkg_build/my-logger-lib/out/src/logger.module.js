/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerConfig } from './logger-config';
import { LoggerService } from './logger.service';
import { LogFormatterService } from './log-formatter.service';
import { DefaultLogFormatterService } from './default-log-formatter.service';
const /** @type {?} */ defaultFormatterConfig = [{
        provide: LogFormatterService,
        useClass: DefaultLogFormatterService
    }];
export class LoggerModule {
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
function LoggerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LoggerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LoggerModule.ctorParameters;
}
//# sourceMappingURL=logger.module.js.map