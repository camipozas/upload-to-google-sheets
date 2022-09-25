const axios = require("axios");

/**
 * It makes a request to the API, and returns the data in a matrix format
 * matrix format is an array of arrays and is the format that the Google Sheets API expects
 * @returns An array of arrays.
 */
const getData = async () => {
    try {
        const response = await axios.get(
            "https://economic-api.cam1pozas.xyz/api"
        );
        const data = response.data;
        const dataMatrix = [];
        for (const key in data) {
            dataMatrix.push([key, data[key]]);
        }
        return dataMatrix;
    } catch (error) {
        console.error(error);
    }
};

module.exports = getData;
