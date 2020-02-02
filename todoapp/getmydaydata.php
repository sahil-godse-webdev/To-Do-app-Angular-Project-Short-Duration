<?php

    header('Access-Control-Allow-Origin:*');

    /*$arr['message']= 'Hello Angular Ajax';
    echo json_encode($arr);*/

    $con= mysqli_connect('localhost','root','','todoapp');

    $q= "select * from tasks where addtomyday='true'";

    $arr=[];
    $result= mysqli_query($con,$q);

    while ($res= mysqli_fetch_array($result)) {
      array_push($arr,$res);
    }

    echo json_encode($arr);


 ?>
