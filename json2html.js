// json2html.js
export default function json2html(data) {
    // Initialize the table with the data-user attribute
    let table = '<table data-user="190190sai@gmail.com">';
  
    // Add table header
    table += '<thead><tr>';
    // Get all keys from the first object to use as column names
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
      table += `<th>${header}</th>`;
    });
    table += '</tr></thead>';
  
    // Add table body
    table += '<tbody>';
    data.forEach(item => {
      table += '<tr>';
      headers.forEach(header => {
        // If the header is not present in the current object, add an empty <td>
        table += `<td>${item[header] !== undefined ? item[header] : ''}</td>`;
      });
      table += '</tr>';
    });
    table += '</tbody>';
  
    // Close the table
    table += '</table>';
  
    return table;
  }
  