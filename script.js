
//Build Tabulator table
var table = new Tabulator("#tabulator-table", {
    layout:"fitColumns",
    pagination:"local",
    paginationSize:3,
    paginationSizeSelector:[3, 6, 8, 10],
    movableColumns:true,
    columns:[
        {title:"Id", field:"id", width:50},
        {title:"Name", field:"name"},
        {title:"Age", field:"age", sorter:"number", width:80},
        {title:"Gender", field:"gender", width:100},
        {title:"Country", field:"country"},
    ],
});



// Build pagination
//Define variables for input elements
var fieldEl = document.getElementById("filter-field");
var typeEl = document.getElementById("filter-type");
var valueEl = document.getElementById("filter-value");

//Custom filter example
// function customFilter(data){
//     return data.car && data.rating < 3;
// }

//Trigger setFilter function with correct parameters
function updateFilter(){
  var filterVal = fieldEl.options[fieldEl.selectedIndex].value;
  var typeVal = typeEl.options[typeEl.selectedIndex].value;

//   var filter = filterVal == "function" ? customFilter : filterVal;
  var filter = filterVal !== "function" ? filterVal : null;

  if(filterVal == "function" ){
    typeEl.disabled = true;
    valueEl.disabled = true;
  }else{
    typeEl.disabled = false;
    valueEl.disabled = false;
  }

  if(filterVal){
    table.setFilter(filter,typeVal, valueEl.value);
  }
}

//Update filters on value change
document.getElementById("filter-field").addEventListener("change", updateFilter);
document.getElementById("filter-type").addEventListener("change", updateFilter);
document.getElementById("filter-value").addEventListener("keyup", updateFilter);

//Clear filters on "Clear Filters" button click
document.getElementById("filter-clear").addEventListener("click", function(){
  fieldEl.value = "";
  typeEl.value = "=";
  valueEl.value = "";

  table.clearFilter();
});



