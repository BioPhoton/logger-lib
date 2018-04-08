(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@my/logger-lib', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.my = global.my || {}, global.my['logger-lib'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */










function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var LoggerConfig = /** @class */ (function () {
    function LoggerConfig() {
    }
    return LoggerConfig;
}());
LoggerConfig.decorators = [
    { type: core.Injectable },
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
    { type: core.Injectable },
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
    { type: core.Injectable },
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                providers: [],
                declarations: [],
                exports: []
            },] },
];

exports.LoggerConfig = LoggerConfig;
exports.LoggerModule = LoggerModule;
exports.LoggerService = LoggerService;
exports.LogFormatterService = LogFormatterService;
exports.DefaultLogFormatterService = DefaultLogFormatterService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-logger-lib.umd.js.map
