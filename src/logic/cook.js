


const fswrite = require('../logic/fs/fw.php').default;





//Obj of data to send in future like a dummyDb
const data = { username: 'example' };

//POST request with body equal on data in JSON format
fetch(fswrite, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
//Then with the data from the response in JSON...
.then((data) => {
  console.log('Success:', data);
})
//Then with the error genereted...
.catch((error) => {
  console.error('Error:', error);
});
















//  * JS Async communication with the file system
//  */
// import './fs/fw.php';

// const fswrite = 'http://localhost/brokenOt/fw.php';
// const fswrite = '../fs/fw.php';
// const JSON = { "hello": "server" };

// var myInit = { method: 'GET',
//                headers: {
//                    'Content-Type': 'image/jpeg'
//                },
//                mode: 'cors',
// 					cache: 'default' };


// var myRequest = new Request(fswrite);
// var myMode = Request.mode; // returns "cors" by default

// const postData = async (JSON) => {

	// const response = await fetch(
	// 	fswrite,
	// 	{
	// 		method: "POST",
	// 		body: JSON,
	// 		id: "test"
	// 	}
	// );

	// const data = await response.text();

	// console.log(data);

// }

// postData(JSON);