function revealSearch()
{
  var x = document.getElementById("query");
  if (x.style.display === "block")
  {
    x.style.display = "none";
  }
  else 
  {
    x.style.display = "block";
  }
}

function search()
{
  var techType = document.getElementById("techType").value;
  var price = document.getElementById("price").value;

  switch(techType)
  {
    case "laptop":
      laptopDesktop(price);
      break;

  }
}
  

function laptopDesktop(price)
{
  var temp = document.getElementById("repairPlan");
  var clon = temp.content.cloneNode(true);
  document.getElementById("app").appendChild(clon);
  fetch('./Database/ecp-laptop,desktop.json').then(response => response.json())
  .then(jsondata => 
      {
        
        // Search for repair plan that fits price
        for (var i = 0; i < Object.keys(jsondata.plans).length; i++)
        { 
          var info = Object.keys(jsondata.plans)[i];
          var data = jsondata.plans[info];
          
          if (price >= data["low"] && price <= data["high"])
          {
            console.log("Repair Plan | ", "1-Year Plan: ", data["1yr"], "2-Year Plan: ", data["2yr"]);
            document.getElementById("Yr1").innerHTML = "1-Year Plan: " + data["1yr"];
            document.getElementById("Yr2").innerHTML = "2-Year Plan: " + data["2yr"];

            break;
          } 
        }
        
        // Search for Accidental Plan that fits price
        for (var i = 0; i < Object.keys(jsondata.accidental).length; i++)
        { 
          var info = Object.keys(jsondata.accidental)[i];
          var data = jsondata.accidental[info];
          
          if (price >= data["low"] && price <= data["high"])
          {
            console.log("Accidental Plan | ", "2-Year Plan: ", data["2yr"], "3-Year Plan: ", data["3yr"]);
            document.getElementById("rYr2").innerHTML = "2-Year Plan: " + data["2yr"];
            document.getElementById("rYr3").innerHTML = "3-Year Plan: " + data["3yr"];
            break;
          } 
        }

        // Data Recovery Plan
        for (var i = 0; i < Object.keys(jsondata.dataRecovery).length; i++)
        { 
          var info = Object.keys(jsondata.dataRecovery)[i];
          var data = jsondata.dataRecovery[info];
          
          if (price >= data["low"] && price <= data["high"])
          {
            console.log("Data Recovery Plan | ", "2-Year Plan: ", data["2yr"], "3-Year Plan: ", data["3yr"]);
            document.getElementById("dYr2").innerHTML = "2-Year Plan: " + data["2yr"];
            document.getElementById("dYr3").innerHTML = "3-Year Plan: " + data["3yr"];
            break;
          } 
        }
      });

     
}
