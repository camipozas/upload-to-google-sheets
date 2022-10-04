require("dotenv").config();

const path = require("path");
const process = require("process");
const { google } = require("googleapis");
const sheets = google.sheets("v4");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const parseJsonSecret = (stringJson, secretName) => {
    try {
        const json = JSON.parse(stringJson);
        return json;
    } catch (error) {
        console.log(secretName, error);
    }
};
/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
    const auth = new google.auth.GoogleAuth({
        credentials: parseJsonSecret(
            process.env.GOOGLE_SERVICE_ACCOUNT,
            "GOOGLE_CREDENTIALS"
        ),
        //url to spreadsheets API
        scopes: SCOPES,
    });
    const authClientObject = await auth.getClient();
    return authClientObject;
}

/**
 * It clears the data in the specified range of the specified sheet
 * @param sheet - The ID of the spreadsheet to update.
 * @param sheetRange - The range of cells to clear.
 */
async function clearData(sheet, sheetRange) {
    const authClient = await authorize();
    const request = {
        // The ID of the spreadsheet to update.
        spreadsheetId: sheet,
        // The A1 notation of the values to clear.
        range: sheetRange,
        resource: {},

        auth: authClient,
    };

    try {
        const response = (await sheets.spreadsheets.values.clear(request)).data;
        // TODO: Change code below to process the `response` object:
        console.log(JSON.stringify(response, null, 2));
    } catch (err) {
        console.error(err);
    }
}

/**
 * This function takes in a sheet, a sheet range, and data values, and updates the sheet with the data
 * values
 * @param sheet - The ID of the spreadsheet to update.
 * @param sheetRange - The range of cells to update.
 * @param dataValues - This is the data that you want to update in the sheet. It's an array of arrays.
 */
async function updateValues(sheet, sheetRange, dataValues) {
    await clearData(sheet, sheetRange);
    console.log(dataValues);
    const authClient = await authorize();
    const request = {
        // The ID of the spreadsheet to update.
        spreadsheetId: sheet,
        // The A1 notation of the values to update.
        range: sheetRange,
        // How the input data should be interpreted.
        valueInputOption: "RAW",

        resource: dataValues,

        auth: authClient,
    };

    try {
        const response = (await sheets.spreadsheets.values.update(request))
            .data;
        console.log(JSON.stringify(response, null, 2));
    } catch (err) {
        console.error(err);
    }
}

module.exports = updateValues;
