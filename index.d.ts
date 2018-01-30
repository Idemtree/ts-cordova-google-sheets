import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class GoogleSheets extends IonicNativePlugin {
    spreadsheets: SpreadsheetsOperations;
    /**
     * Prompts the permissions dialog, so the user may grant access to their
     * identity via contacts.
     * @return {Promise<any>} Returns a promise that resolves the user grants
     * permission to her data
     */
    signIn(): Promise<any>;
    /**
     * Removes stored credentials and revoke permissions.
     * @return {Promise<any>} Returns a promise that resolves if the credential
     * was successfully destroyed, fails with an error message otherwise.
     */
    signOut(): Promise<null>;
    isUserSignedIn(): Promise<any>;
}
export declare class SheetsOperations extends IonicNativePlugin {
    /**
     * Copies a single sheet from a spreadsheet to another spreadsheet.
     * https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.sheets/copyTo
     * @param spreadsheetId {string} The ID of the spreadsheet containing the
     * sheet to copy.
     * @param sheetId {string} The ID of the sheet to copy.
     * @param destinationSpreadsheetId {string} The ID of the spreadsheet to copy
     * the sheet to.
     */
    copyTo(spreadsheetId: string, sheetId: string, destinationSpreadsheetId: string): Promise<any>;
}
export declare class ValuesOperations extends IonicNativePlugin {
    /**
     * Appends values to a spreadsheet.
     * @param spreadsheetId {string} The ID of the spreadsheet to update.
     * @param range {string} The A1 notation of a range to search for a logical
     * table of data. Values will be appended after the last row of the table (see
     * https://goo.gl/Cn53Gt).
     * @param valueInputOption {string} How the input data should be interpreted.
     * @param insertDataOption {string} How the input data should be inserted.
     */
    append(spreadsheetId: string, range: string, values: Array<Array<string>>, valueInputOption?: string, insertDataOption?: string): Promise<any>;
    /**
     * Clears one or more ranges of values from a spreadsheet.
     * @param spreadsheetId {string} The ID of the spreadsheet to update.
     * @param ranges {Array<string>} The ranges to clear, in A1 notation (see
     * https://goo.gl/Cn53Gt).
     */
    batchClear(spreadsheetId: string, ranges: Array<string>): Promise<any>;
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
    batchGet(spreadsheetId: string, ranges: Array<string>, majorDimension?: string, valueRenderOption?: string, dateTimeRenderOption?: string, standardParams?: any): Promise<any>;
    batchGetByDataFilter(): Promise<any>;
    /**
     * Sets values in one or more ranges of a spreadsheet.
     * @param spreadsheetId {string} The ID of the spreadsheet to update.
     * @param data {Array<ValueRange>} The new values to apply to the spreadsheet.
     */
    batchUpdate(spreadsheetId: string, data: Array<ValueRange>): Promise<any>;
    batchUpdateByDataFilter(): Promise<any>;
    /**
     * Clears values from a spreadsheet. Only values are cleared -- all other
     * properties of the cell (such as formatting, data validation, etc..) are
     * kept.
     * @param spreadsheetId {string} The ID of the spreadsheet to update.
     * @param range {string} The A1 notation of the values to clear.
     */
    clear(spreadsheetId: string, range: string): Promise<any>;
    /**
     * Returns a range of values from a spreadsheet.
     * @param spreadsheetId {string} The ID of the spreadsheet to retrieve data
     * from.
     * @param range {string} The A1 notation of the values to retrieve.
     */
    get(spreadsheetId: string, range: string): Promise<any>;
    /**
     * Sets values in a range of a spreadsheet.
     * @param spreadsheetId {string} The ID of the spreadsheet to update.
     * @param range {string} The A1 notation of the values to update.
     * @param valueInputOption {string} How the input data should be interpreted.
     */
    update(spreadsheetId: string, range: string, values: Array<Array<string>>, valueInputOption?: string): Promise<any>;
}
export declare class ValueRange {
    range: string;
    majorDimension: string;
    values: Array<Array<string>>;
}
export declare class SpreadsheetBuilder {
    _title: string;
    _locale: string;
    _autoRecalc: string;
    _timeZone: string;
    _defaultFormat: any;
    _iterativeCalculationSettings: any;
    constructor(title: string, locale: string);
    readonly title: string;
    readonly locale: string;
    readonly autoRecalc: string;
    setAutoRecalc(value: string): SpreadsheetBuilder;
    readonly timeZone: string;
    setTimezone(value: string): SpreadsheetBuilder;
    build(): Spreadsheet;
}
export declare class Spreadsheet {
    readonly title: string;
    readonly locale: string;
    readonly autoRecalc: string;
    readonly timeZone: string;
    readonly defaultFormat: any;
    readonly iterativeCalculationSettings: any;
    static Builder(title: string, locale: string): SpreadsheetBuilder;
    protected constructor(params: SpreadsheetBuilder);
}
export declare class SpreadsheetsOperations extends IonicNativePlugin {
    sheets: SheetsOperations;
    values: ValuesOperations;
    get(spreadsheetId: string, ranges: Array<string>, includeGridData: boolean): Promise<any>;
    /**
     * Creates a spreadsheet, returning the newly created spreadsheet.
     * @param spreadsheet {Spreadsheet} Contains the definition of the spreadsheet to be created. This object needs it's title and locale fields to be defined.
     */
    create(spreadsheet: Spreadsheet): Promise<any>;
}
