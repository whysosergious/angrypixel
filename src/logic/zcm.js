// const json = require('http://localhost/brokenOt/test/data.json');

export const fetchJSON = async () => {
  // fetching content JSON
  await fetch('http://localhost/brokenOt/test/data.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(function(response){
      // console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      
      ZCM = myJson;
      ZCMbackup = JSON.parse(JSON.stringify(ZCM));
      // ZCMbackup = JZCMbackup);
      console.log(ZCM, ZCMbackup);
    });
  // console.log(json);

}

export const restore = () => {
  ZCM = JSON.parse(JSON.stringify(ZCMbackup));
}
export const save = () => {
  ZCMbackup = JSON.parse(JSON.stringify(ZCM));
}

export var ZCM = {
	
};

export var ZCMbackup = {

}

export var tempController = {

}