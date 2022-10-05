# Upload data to a Google Sheet with Node.js

This is a simple example of how to upload data to a Google Sheet using Node.js.

## Setup

1. Create a Google Sheet
2. You will need to create a Google Cloud Platform project and enable the Google Sheets API. See [this guide](https://developers.google.com/sheets/api/quickstart/nodejs) for more information.
3. Create a service account and download the JSON credentials file. See [this guide](https://cloud.google.com/iam/docs/creating-managing-service-accounts) for more information.
4. Create a `.env` file in the root of the project and add the following:
    > The JSON Credentials file should be saved in env file as `GOOGLE_APPLICATION_CREDENTIALS`. See [this guide](https://cloud.google.com/docs/authentication/getting-started) for more information. Then you have to replace `\\n` with `\n` in the credentials, otherwise you will get an [error](https://stackoverflow.com/questions/45995130/how-to-remove-n-after-json-stringfy).

```
GOOGLE_APPLICATION_CREDENTIALS=YOUR_CREDENTIALS_HERE
SHEET_ID=YOUR_SHEET_ID_HERE
SHEET_RANGE=YOUR_SHEET_RANGE_HERE
```

5. Set the credentials in Secrets repository in GitHub. See [this guide](https://docs.github.com/en/actions/reference/encrypted-secrets) for more information.
6. Google gives to you an google service account email. You have to share your google sheet with this email. See [this guide](https://support.google.com/a/answer/7378726?hl=en) for more information.
7. Finally, you have to set your preferences to run it automatically with GitHub Actions, you must do this in the file `.github/workflows/update.yml`.

## Example

1. I work with this [API](https://economic-api.cam1pozas.xyz/api) to get data from CMF Chilean Indicators. You can use any API you want.
    > [Documentation](https://github.com/camipozas/economic-indicators-cl)
    > I get the data on `example.js` file.
2. Then I want to upload the data to [this](https://docs.google.com/spreadsheets/d/1WamN40ezRwfj6aQ0cGybgbPfg1RqihDDAe5DDEYvsM8/edit?usp=sharing) Google Sheet.
3. In `index.js` you have to change the function `transformData` to match your data with Google Sheets API format (array of arrays).
    > Set values in range of a spreadsheets, [documentation](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update).
4. Run `npm start` to upload the data to your Google Sheet.
    > This clears the data and then loads the new data, in case you want to load data with a different range each time.

## Usage

1. Run `npm install` to install the dependencies.
2. Run `npm start` to start the program.

## Documentation

1. [Google Sheets API](https://developers.google.com/sheets/api/reference/rest)
2. [Google Cloud Platform Node.js Client Library](https://developers.google.com/sheets/api/quickstart/nodejs)
3. [Authenticate to Google Cloud](https://github.com/marketplace/actions/authenticate-to-google-cloud)

## Contributors

<a href = "https://github.com/Tanu-N-Prabhu/Python/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=camipozas/upload-to-google-sheets"/>
</a>
