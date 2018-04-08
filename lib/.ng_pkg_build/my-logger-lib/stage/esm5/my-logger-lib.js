import { __spread } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var LoggerConfig = /** @class */ (function () {
    function LoggerConfig() {
    }
    return LoggerConfig;
}());
LoggerConfig.decorators = [
    { type: Injectable },
];
var LogFormatterService = /** @class */ (function () {
    function LogFormatterService() {
    }
    return LogFormatterService;
}());
var LoggerService = /** @class */ (function () {
    function LoggerService(config, logFormatter) {
        this.config = config;
        this.logFormatter = logFormatter;
    }
    LoggerService.prototype.debug = function (message) {
        if (!this.config.enableDebug)
            return;
        console.debug(this.logFormatter.format(message));
    };
    LoggerService.prototype.log = function (message) {
        console.log(this.logFormatter.format(message));
    };
    return LoggerService;
}());
LoggerService.decorators = [
    { type: Injectable },
];
LoggerService.ctorParameters = function () { return [
    { type: LoggerConfig, },
    { type: LogFormatterService, },
]; };
var DefaultLogFormatterService = /** @class */ (function () {
    function DefaultLogFormatterService() {
    }
    DefaultLogFormatterService.prototype.format = function (message) {
        return message;
    };
    return DefaultLogFormatterService;
}());
DefaultLogFormatterService.decorators = [
    { type: Injectable },
];
var LoggerModule = /** @class */ (function () {
    function LoggerModule() {
    }
    LoggerModule.forRoot = function (config) {
        return {
            ngModule: LoggerModule,
            providers: __spread([
                LoggerService,
                { provide: LoggerConfig, useValue: config }
            ], (!config.logFormatterImplementation) ?
                [{ provide: LogFormatterService, useClass: DefaultLogFormatterService }] :
                [{ provide: LogFormatterService, useClass: config.logFormatterImplementation }])
        };
    };
    return LoggerModule;
}());
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

export { LoggerConfig, LoggerModule, LoggerService, LogFormatterService, DefaultLogFormatterService };
//# sourceMappingURL=my-logger-lib.js.map
