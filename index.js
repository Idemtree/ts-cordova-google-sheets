var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin
 * wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name GoogleSheets
 * @description
 * This plugin allows you to perform requests to the GoogleSheets API v4
 * using the native client built for android.
 *
 * @usage
 * ```typescript
 * import { GoogleSheets } from '@ionic-native/google-sheets';
 *
 *
 * constructor(private googleSheets: GoogleSheets) { }
 *
 * ...
 *
 *
 * this.googleSheets.signIn()
 *   .then(username => console.log(res))
 *   .catch(error => console.error(error));
 *
 * ```
 */
var GoogleSheets = (function (_super) {
    __extends(GoogleSheets, _super);
    function GoogleSheets() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spreadsheets = new SpreadsheetsOperations();
        return _this;
    }
    /**
     * Prompts the permissions dialog, so the user may grant access to their
     * identity via contacts.
     * @return {Promise<any>} Returns a promise that resolves the user grants
     * permission to her data
     */
    GoogleSheets.prototype.signIn = function () {
        return;
    };
    /**
     * Removes stored credentials and revoke permissions.
     * @return {Promise<any>} Returns a promise that resolves if the credential
     * was successfully destroyed, fails with an error message otherwise.
     */
    GoogleSheets.prototype.signOut = function () {
        return;
    };
    /*
     * Find out whether there is a signed in user.
     */
    GoogleSheets.prototype.isUserSignedIn = function () {
        return;
    };
    return GoogleSheets;
}(IonicNativePlugin));
GoogleSheets.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GoogleSheets.ctorParameters = function () { return []; };
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleSheets.prototype, "signIn", null);
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleSheets.prototype, "signOut", null);
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleSheets.prototype, "isUserSignedIn", null);
GoogleSheets = __decorate([
    Plugin({
        pluginName: 'GoogleSheets',
        plugin: 'cordova-plugin-google-sheets',
        // cordova-plugin-camera
        pluginRef: 'cordova.plugins.GoogleSheets',
        // the plugin, example:
        // navigator.geolocation
        repo: '',
        platforms: [
            'Android'
        ],
        install: '',
    })
], GoogleSheets);
export { GoogleSheets };
var SheetsOperations = (function (_super) {
    __extends(SheetsOperations, _super);
    function SheetsOperations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Copies a single sheet from a spreadsheet to another spreadsheet.
     * https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.sheets/copyTo
     * @param spreadsheetId {string} The ID of the spreadsheet containing the
     * sheet to copy.
     * @param sheetId {string} The ID of the sheet to copy.
     * @param destinationSpreadsheetId {string} The ID of the spreadsheet to copy
     * the sheet to.
     */
    SheetsOperations.prototype.copyTo = function (spreadsheetId, sheetId, destinationSpreadsheetId) {
        return;
    };
    return SheetsOperations;
}(IonicNativePlugin));
SheetsOperations.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SheetsOperations.ctorParameters = function () { return []; };
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], SheetsOperations.prototype, "copyTo", null);
SheetsOperations = __decorate([
    Plugin({
        pluginName: 'GoogleSheets',
        plugin: 'cordova-plugin-google-sheets',
        // cordova-plugin-camera
        pluginRef: 'cordova.plugins.GoogleSheets.spreadsheets.sheets',
        // to call the plugin,
        // example:
        // navigator.geolocation
        repo: '',
        platforms: [
            'Android'
        ],
        install: '',
    })
], SheetsOperations);
export { SheetsOperations };
var ValuesOperations = (function (_super) {
    __extends(ValuesOperations, _super);
    function ValuesOperations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Appends values to a spreadsheet.
     * @param spreadsheetId {string} The ID of the spreadsheet to update.
     * @param range {string} The A1 notation of a range to search for a logical
     * table of data. Values will be appended after the last row of the table (see
     * https://goo.gl/Cn53Gt).
     * @param valueInputOption {string} How the input data should be interpreted.
     * @param insertDataOption {string} How the input data should be inserted.
     */
    ValuesOperations.prototype.append = function (spreadsheetId, range, values, valueInputOption, insertDataOption) {
        return;
    };
    /**
     * Clears one or more ranges of values from a spreadsheet.
     * @param spreadsheetId {string} The ID of the spreadsheet to update.
     * @param ranges {Array<string>} The ranges to clear, in A1 notation (see
     * https://goo.gl/Cn53Gt).
     */
    ValuesOperations.prototype.batchClear = function (spreadsheetId, ranges) {
        return;
    };
    /**
     * Returns one or more ranges of values from a spreadsheet.
     * @param spreadsheetId {string} The ID of the spreadsheet to retrieve data
     * from.
     * @param ranges {Array<string>} The A1 notation of the values to retrieve
     * (see https://goo.gl/Cn53Gt).
     * @param majorDimension {string} The dimension that results should use.
     * @return {Promise<any>} Returns a promise that resolves if the request was
     * successful (e.g. http status 200 ok), fails with an error message
     * otherwise.
     */
    ValuesOperations.prototype.batchGet = function (spreadsheetId, ranges, majorDimension, valueRenderOption, dateTimeRenderOption, standardParams) {
        return;
    };
    ValuesOperations.prototype.batchGetByDataFilter = function () {
        return;
    };
    /**
     * Sets values in one or more ranges of a spreadsheet.
     * @param spreadsheetId {string} The ID of the spreadsheet to update.
     * @param data {Array<ValueRange>} The new values to apply to the spreadsheet.
     */
    ValuesOperations.prototype.batchUpdate = function (spreadsheetId, data) {
        return;
    };
    ValuesOperations.prototype.batchUpdateByDataFilter = function () {
        return;
    };
    /**
     * Clears values from a spreadsheet. Only values are cleared -- all other
     * properties of the cell (such as formatting, data validation, etc..) are
     * kept.
     * @param spreadsheetId {string} The ID of the spreadsheet to update.
     * @param range {string} The A1 notation of the values to clear.
     */
    ValuesOperations.prototype.clear = function (spreadsheetId, range) {
        return;
    };
    /**
     * Returns a range of values from a spreadsheet.
     * @param spreadsheetId {string} The ID of the spreadsheet to retrieve data
     * from.
     * @param range {string} The A1 notation of the values to retrieve.
     */
    ValuesOperations.prototype.get = function (spreadsheetId, range) {
        return;
    };
    /**
     * Sets values in a range of a spreadsheet.
     * @param spreadsheetId {string} The ID of the spreadsheet to update.
     * @param range {string} The A1 notation of the values to update.
     * @param valueInputOption {string} How the input data should be interpreted.
     */
    ValuesOperations.prototype.update = function (spreadsheetId, range, values, valueInputOption) {
        return;
    };
    return ValuesOperations;
}(IonicNativePlugin));
ValuesOperations.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ValuesOperations.ctorParameters = function () { return []; };
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Array, String, String]),
    __metadata("design:returntype", Promise)
], ValuesOperations.prototype, "append", null);
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], ValuesOperations.prototype, "batchClear", null);
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], ValuesOperations.prototype, "batchGet", null);
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ValuesOperations.prototype, "batchGetByDataFilter", null);
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], ValuesOperations.prototype, "batchUpdate", null);
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ValuesOperations.prototype, "batchUpdateByDataFilter", null);
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ValuesOperations.prototype, "clear", null);
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ValuesOperations.prototype, "get", null);
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Array, String]),
    __metadata("design:returntype", Promise)
], ValuesOperations.prototype, "update", null);
ValuesOperations = __decorate([
    Plugin({
        pluginName: 'GoogleSheets',
        plugin: 'cordova-plugin-google-sheets',
        // cordova-plugin-camera
        pluginRef: 'cordova.plugins.GoogleSheets.spreadsheets.values',
        // to call the plugin,
        // example:
        // navigator.geolocation
        repo: '',
        platforms: [
            'Android'
        ],
        install: '',
    })
], ValuesOperations);
export { ValuesOperations };
var ValueRange = (function () {
    function ValueRange() {
    }
    return ValueRange;
}());
export { ValueRange };
var SpreadsheetBuilder = (function () {
    function SpreadsheetBuilder(title, locale) {
        this._title = title;
        this._locale = locale;
    }
    Object.defineProperty(SpreadsheetBuilder.prototype, "title", {
        get: function () { return this._title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetBuilder.prototype, "locale", {
        get: function () { return this._locale; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetBuilder.prototype, "autoRecalc", {
        get: function () { return this._autoRecalc; },
        enumerable: true,
        configurable: true
    });
    SpreadsheetBuilder.prototype.setAutoRecalc = function (value) {
        this._autoRecalc = value;
        return this;
    };
    Object.defineProperty(SpreadsheetBuilder.prototype, "timeZone", {
        get: function () { return this._timeZone; },
        enumerable: true,
        configurable: true
    });
    ;
    SpreadsheetBuilder.prototype.setTimezone = function (value) {
        this._timeZone = value;
        return this;
    };
    SpreadsheetBuilder.prototype.build = function () { return; };
    return SpreadsheetBuilder;
}());
export { SpreadsheetBuilder };
;
var Spreadsheet = (function () {
    function Spreadsheet(params) {
        if (params instanceof SpreadsheetBuilder) {
            this.title = params.title;
            this.locale = params.locale;
            this.autoRecalc = params.autoRecalc || undefined;
            this.timeZone = params.timeZone || undefined;
        }
        else {
            throw new TypeError('');
        }
    }
    Spreadsheet.Builder = function (title, locale) {
        SpreadsheetBuilder.prototype.build = function () {
            return new Spreadsheet(this);
        };
        return new SpreadsheetBuilder(title, locale);
    };
    ;
    return Spreadsheet;
}());
export { Spreadsheet };
var SpreadsheetsOperations = (function (_super) {
    __extends(SpreadsheetsOperations, _super);
    function SpreadsheetsOperations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sheets = new SheetsOperations();
        _this.values = new ValuesOperations();
        return _this;
    }
    /*
     *
     */
    SpreadsheetsOperations.prototype.get = function (spreadsheetId, ranges, includeGridData) {
        return;
    };
    /**
     * Creates a spreadsheet, returning the newly created spreadsheet.
     * @param spreadsheet {Spreadsheet} Contains the definition of the spreadsheet to be created. This object needs it's title and locale fields to be defined.
     */
    SpreadsheetsOperations.prototype.create = function (spreadsheet) {
        return;
    };
    return SpreadsheetsOperations;
}(IonicNativePlugin));
SpreadsheetsOperations.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SpreadsheetsOperations.ctorParameters = function () { return []; };
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Boolean]),
    __metadata("design:returntype", Promise)
], SpreadsheetsOperations.prototype, "get", null);
__decorate([
    Cordova({ callbackOrder: 'reverse' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Spreadsheet]),
    __metadata("design:returntype", Promise)
], SpreadsheetsOperations.prototype, "create", null);
SpreadsheetsOperations = __decorate([
    Plugin({
        pluginName: 'GoogleSheets',
        plugin: 'cordova-plugin-google-sheets',
        // cordova-plugin-camera
        pluginRef: 'cordova.plugins.GoogleSheets.spreadsheets',
        // to call the plugin,
        // example:
        // navigator.geolocation
        repo: '',
        platforms: [
            'Android'
        ],
        install: '',
    })
], SpreadsheetsOperations);
export { SpreadsheetsOperations };
//# sourceMappingURL=index.js.map