<?php
    // To get the values of the form input using the POST methods

    $FirstName = $_POST['FirstName'];
    $LastName = $_POST['LastName'];
    $UserName = $_POST['UserName'];
    $jobTitle = $_POST['jobTitle'];
    $Password = $_POST['Password'];
    // $confPassword = $_POST['confPassword'];
    $phoneNumber = $_POST['phoneNumber']
    
    // Database connection

    $conn = new mysqli('localhost', '', 'signup data');
    if ($conn->connect_error) {
    
        die('connection Failed :' .$conn->connect_error);
     }
     else{
        $stmt = $conn->prepare("insert into registration(FirstName, LastName, UserName, jobTitle, Password, phoneNumber)
        values(?,?,?,?,?,?)");
        $stmt->blind_param(sssssi, $FirstName, $LastName, $UserName, $jobTitle, $Password, $phoneNumber);
        $stmt->execute();
        echo "Registration Sucessfully";
        $stmt->close();
        $conn->close();
     }
    ?>