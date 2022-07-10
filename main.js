function search()
{
  document.getElementById("data").innerHTML = "";
  var techType = document.getElementById("techType").value;
  var price = document.getElementById("price").value;

  if (price != 0)
  {
    switch(techType)
  {
    case "laptop":
      laptop(price);
      break;
    
    case "desktop":
      desktop(price);
      break;
    
    case "printers":
      printerShredderServer(price)
      break;
    
    case "shredders":
      printerShredderServer(price)
      break;
    
    case "servers":
      printerShredderServer(price)
      break;
    
    case "tablets":
      tablet(price);
      break;
    
    case "mobilePhones":
      mobilePhones(price);
      break;
    
    case "other":
      other(price);
      break;
  
  }
  }

}
  

function laptop(price)
{
  
  // Processing for ECP+ First
 
  fetch('./Database/ecpPlus-laptop.json').then(response => response.json())
  .then(jsondata => 
    {
       // Search for plan that fits price 
       for (var i = 0; i < Object.keys(jsondata.plans).length; i++)
       {
        var info = Object.keys(jsondata.plans)[i];
        var data = jsondata.plans[info];

        if (price >= data["low"] && price <= data["high"])
        {
          var temp = document.getElementById("repairPlanECP+");
          var clon = temp.content.cloneNode(true);
          document.getElementById("data").appendChild(clon);

          document.getElementById("plus").innerHTML = "$" + data["plus"] + " per month";
          document.getElementById("plus_accidental").innerHTML = "$" + data["plus_accidental"] + " per month with Accidental";
        }
       }
    });
  

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
            var temp = document.getElementById("repairPlan");
            var clon = temp.content.cloneNode(true);
            document.getElementById("data").appendChild(clon);

            document.getElementById("Yr1").innerHTML = "1-Year Plan: " + "$" + data["1yr"];
            document.getElementById("Yr2").innerHTML = "2-Year Plan: " + "$" + data["2yr"];

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
            document.getElementById("rYr2").innerHTML = "2-Year Plan: " + "$" + data["2yr"];
            document.getElementById("rYr3").innerHTML = "3-Year Plan: " + "$" + data["3yr"];
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
            document.getElementById("dYr2").innerHTML = "2-Year Plan: " + "$" + data["2yr"];
            document.getElementById("dYr3").innerHTML = "3-Year Plan: " + "$" + data["3yr"];
            break;
          } 
        }
      });

     
}

function desktop(price)
{
  
  // Processing for ECP+ First

  fetch('./Database/ecpPlus-desktop.json').then(response => response.json())
  .then(jsondata => 
    {
       // Search for plan that fits price 
       for (var i = 0; i < Object.keys(jsondata.plans).length; i++)
       {
        var info = Object.keys(jsondata.plans)[i];
        var data = jsondata.plans[info];

        if (price >= data["low"] && price <= data["high"])
        {
          var temp = document.getElementById("repairPlanECP+");
          var clon = temp.content.cloneNode(true);
          document.getElementById("data").appendChild(clon);

          document.getElementById("plus").innerHTML = "$" + data["plus"] + " per month";
          document.getElementById("plus_accidental").innerHTML = "$" + data["plus_accidental"] + " per month with Accidental";
        }
       }
    });
  
    
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
            var temp = document.getElementById("repairPlan");
            var clon = temp.content.cloneNode(true);
            document.getElementById("data").appendChild(clon);

            document.getElementById("Yr1").innerHTML = "1-Year Plan: " + "$" + data["1yr"];
            document.getElementById("Yr2").innerHTML = "2-Year Plan: " + "$" + data["2yr"];

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
            document.getElementById("rYr2").innerHTML = "2-Year Plan: " + "$" + data["2yr"];
            document.getElementById("rYr3").innerHTML = "3-Year Plan: " + "$" + data["3yr"];
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
            document.getElementById("dYr2").innerHTML = "2-Year Plan: " + "$" + data["2yr"];
            document.getElementById("dYr3").innerHTML = "3-Year Plan: " + "$" + data["3yr"];
            break;
          } 
        }
      });

     
}

function printerShredderServer(price)
{
  fetch('./Database/ecp-printers,shredders,servers.json').then(response => response.json())
  .then(jsondata => 
      {
        
        // Search for repair plan that fits price
        for (var i = 0; i < Object.keys(jsondata.plans).length; i++)
        { 
          var info = Object.keys(jsondata.plans)[i];
          var data = jsondata.plans[info];
          
          if (price >= data["low"] && price <= data["high"])
          {
            var temp = document.getElementById("repairPlan2");
            var clon = temp.content.cloneNode(true);
            document.getElementById("data").appendChild(clon);

            document.getElementById("Yr1").innerHTML = "1-Year Plan: " + "$" + data["1yr"];
            document.getElementById("Yr2").innerHTML = "2-Year Plan: " + "$" + data["2yr"];

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
            document.getElementById("rYr2").innerHTML = "2-Year Plan: " + "$" + data["2yr"];
            document.getElementById("rYr3").innerHTML = "3-Year Plan: " + "$" + data["3yr"];
            break;
          } 
        }
      });

     
}

function tablet(price)
{
  fetch('./Database/ecp-tablets.json').then(response => response.json())
  .then(jsondata => 
      {
        
        // Search for reaplacement plan that fits price
        for (var i = 0; i < Object.keys(jsondata.plans).length; i++)
        { 
          var info = Object.keys(jsondata.plans)[i];
          var data = jsondata.plans[info];
          
          if (price >= data["low"] && price <= data["high"])
          {
            var temp = document.getElementById("replacement");
            var clon = temp.content.cloneNode(true);
            document.getElementById("data").appendChild(clon);

            document.getElementById("Yr").innerHTML = "1-Year Plan: " + "$" + data["1yr"];
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
            document.getElementById("rYr").innerHTML = "2-Year Plan: " + "$" + data["2yr"];
            break;
          } 
        }
      });

     
}

function mobilePhones(price)
{
  fetch('./Database/ecp-mobile phones.json').then(response => response.json())
  .then(jsondata => 
      {
        
        // Search for reaplacement plan that fits price
        for (var i = 0; i < Object.keys(jsondata.plans).length; i++)
        { 
          var info = Object.keys(jsondata.plans)[i];
          var data = jsondata.plans[info];
          
          if (price >= data["low"] && price <= data["high"])
          {
            var temp = document.getElementById("replacement2");
            var clon = temp.content.cloneNode(true);
            document.getElementById("data").appendChild(clon);

            document.getElementById("Yr").innerHTML = "2-Year Plan: " + "$" + data["2yr"];
            break;
          } 
        }
      });  
}

function other(price)
{
  fetch('./Database/ecp-other,repair.json').then(response => response.json())
  .then(jsondata => 
      {
        
        // Search for repair plan that fits price
        for (var i = 0; i < Object.keys(jsondata.plans).length; i++)
        { 
          var info = Object.keys(jsondata.plans)[i];
          var data = jsondata.plans[info];
          
          if (price >= data["low"] && price <= data["high"])
          {
            var temp = document.getElementById("repairPlan2");
            var clon = temp.content.cloneNode(true);
            document.getElementById("data").appendChild(clon);

            document.getElementById("Yr1").innerHTML = "1-Year Plan: " + "$" + data["1yr"];
            document.getElementById("Yr2").innerHTML = "2-Year Plan: " + "$" + data["2yr"];

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
            document.getElementById("rYr2").innerHTML = "2-Year Plan: " + "$" + data["2yr"];
            document.getElementById("rYr3").innerHTML = "3-Year Plan: " + "$" + data["3yr"];
            break;
          } 
        }
      });


  fetch('./Database/ecp-other,replacement.json').then(response => response.json())
  .then(jsondata => 
      {
        
        // Search for reaplacement plan that fits price
        for (var i = 0; i < Object.keys(jsondata.plans).length; i++)
        { 
          var info = Object.keys(jsondata.plans)[i];
          var data = jsondata.plans[info];
          
          if (price >= data["low"] && price <= data["high"])
          {
            var temp = document.getElementById("replacement");
            var clon = temp.content.cloneNode(true);
            document.getElementById("data").appendChild(clon);

            document.getElementById("Yr").innerHTML = "1-Year Plan: " + "$" + data["yr"];
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
            document.getElementById("rYr").innerHTML = "2-Year Plan: " + "$" + data["2yr"];
            break;
          } 
        }

      });  
}