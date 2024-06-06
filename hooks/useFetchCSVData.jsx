import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCSVData = () => {
  const [csvData, setCsvData] = useState([]);

  const parseCSV = (csvText) => {
    const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
    const headers = rows[0].split(","); // Extract headers (assumes the first row is the header row)
    const data = []; // Initialize an array to store parsed data
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(","); // Split the row, handling '\r' characters
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
    }
    const sortedData = data.sort((a, b) => new Date(a.DATE) - new Date(b.DATE));
    return sortedData;
  };


  useEffect(() => {
    const csvUrl = import.meta.env.VITE_GOOGLE_SHEET; // Replace with your Google Sheets CSV file URL
    axios
      .get(csvUrl)
      .then((response) => {
        const parsedCsvData = parseCSV(response.data);
        setCsvData(parsedCsvData);
        console.log(parsedCsvData);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  }, []);

  return { csvData };
};

export default useFetchCSVData;
