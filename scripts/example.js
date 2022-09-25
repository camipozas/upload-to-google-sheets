const axios = require("axios");

/**
 * It makes a request to the API, and returns a matrix of the data
 * @returns An object with the data from the API.
 */
const getData = async () => {
    try {
        const response = await axios.get(
            "https://economic-api.cam1pozas.xyz/api"
        );
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
};

module.exports = getData;
