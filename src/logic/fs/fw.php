<?php



echo $_POST['id'];

// if ($_SERVER['REQUEST_METHOD'] === 'GET') {

	// $greeting = $_POST['greeting'];
	$data = $_POST['body'];

	$data = json_decode(file_get_contents('php://input'), true);
	echo $data["greeting"];
	echo $data["body"];

	echo $greeting;
	echo $data;

	print_r($greeting);

// }





?>