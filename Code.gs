function work(e) {
  var msg = e.values[1];
  var lat = e.values[2];
  var lon = e.values[3];
  var rad = e.values[4];
  
  mail(msg,lat,lon,rad);
  put(msg,lat,lon,rad);
}

function mail(msg, lat, lon, radius) {
  MailApp.sendEmail("covidsafe.uw@gmail.com",
                    "Public service announcement submitted",
                    msg+","+lat+","+lon+","+radius,
                    {name:"CovidSafe"});
}

function put(msg, lat, lon, radius) {
  var data = {
    "userMessage": msg,
    "areas": [{
        "location": {
            "latitude": lat,
            "longitude": lon
        },
        "radiusMeters": radius
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