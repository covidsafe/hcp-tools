function work(e) {
  coords={
    "Atlantic":[0,0,0],
    "Ballard":[0,0,0],
    "Beacon Hill":[0,0,0],
    "Broadway":[0,0,0],
    "Capitol Hill":[0,0,0],
    "Central Area":[0,0,0],
    "Central Seattle":[0,0,0],
    "Columbia City":[0,0,0],
    "Delridge":[0,0,0],
    "Denny-Blaine":[0,0,0],
    "Downtown":[0,0,0],
    "Fremont":[0,0,0],
    "Harrison":[0,0,0],
    "Industrial District":[0,0,0],
    "Lake City":[0,0,0],
    "Lake Union":[0,0,0],
    "Madison Park":[0,0,0],
    "Magnolia":[0,0,0],
    "Minor":[0,0,0],
    "North Seattle":[0,0,0],
    "Northgate":[0,0,0],
    "Queen Anne":[0,0,0],
    "Rainier Valley":[0,0,0],
    "Ravenna":[0,0,0],
    "Seattle":[0,0,0],
    "Seward Park":[0,0,0],
    "South End":[0,0,0],
    "South Lake Union":[0,0,0],
    "Stevens":[0,0,0],
    "University District":[5,5,5000],
    "Wallingford":[0,0,0],
    "West Seattle":[0,0,0],
    "Windermere":[0,0,0],
  };
  var msg = e.values[1];
  var districts = e.values[2].split(",");
  
  Logger.log(e.values[2]);
  Logger.log(districts);
  
  var i;
  for (i = 0; i < districts.length; i++) {
    mail(msg, coords[districts[i].trim()]);
    put(msg, coords[districts[i].trim()]);
  }
}

function mail(msg, coord) {
  MailApp.sendEmail("covidsafe.uw@gmail.com",
                    "Public service announcement submitted",
                    msg+","+coord,
                    {name:"CovidSafe"});
}

function put(msg, coord) {
  var data = {
    "userMessage": msg,
    "areas": [{
        "location": {
            "latitude": coord[0],
            "longitude": coord[1]
        },
        "radiusMeters": coord[2]
    }]
  };
  
  var options = {
  'method' : 'put',
    'contentType': 'application/json',
    'headers':{'accept':'application/json'},
    'payload':JSON.stringify(data)
  };
  var url = 'https://csapi.azurefd.net/api/Messages/AreaReport';
  
  var response = UrlFetchApp.fetch(url, options);
  
  Logger.log(response.getResponseCode());
  Logger.log(response.getContentText());
}