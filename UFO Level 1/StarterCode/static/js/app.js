// from data.js
var tableData = data;

// TABLE REFERENCES
var tbody = d3.select("tbody");

function buildTable(data) {
  // CLEAR OUT EXISTING DATA
  tbody.html("");

  // LOOP & APPEND
  data.forEach((dataRow) => {
    
    const row = tbody.append("tr");

    // LOOP & ADD VALUE TO EACH CELL
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // DATETIME VALUE
  const date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // CHECK IF DATE WAS ENTERED & FILTER USING DATE
  if (date) {
    // APPLYING 'FILTER'
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // DO TABLE AGAIN 
  buildTable(filteredData);
}

// LISTENING FOR FORM BUTTON 
d3.selectAll("#filter-btn").on("click", handleClick);

// BUILD TABLE WHEN PAGE LOADS
buildTable(tableData);
