require("dotenv");
const getData = require("./scripts/example");
const updateValues = require("./scripts/upload");

/**
 * It takes the data from the API and transforms it into an array of arrays, where each array is a row
 * of data
 * @param data - The data we want to transform.
 * @returns An array of arrays.
 */
// TODO: Change code below to process your data.
const transformData = (data) => {
  const tableHeader = ["currency", "value", "date"];
  // add table header as first row of range
  const dataValues = [tableHeader];
  for (const key in data) {
    const { Valor, Fecha } = data[key];
    dataValues.push([key, Valor, Fecha]);
  }
  return dataValues;
};

/**
 * It gets data from the API, transforms it into a format that can be used in a spreadsheet, and then
 * updates the spreadsheet with the new data
 */
const main = async () => {
  const data = await getData();
  const dataValues = transformData(data);
  // TODO: Change the sheet ID and range to match your spreadsheet.
  await updateValues(process.env.SHEET_ID, process.env.SHEET_RANGE, {
    values: dataValues,
  });
};

main();
