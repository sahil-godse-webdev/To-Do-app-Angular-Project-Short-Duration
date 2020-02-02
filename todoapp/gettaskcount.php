<?php

    header('Access-Control-Allow-Origin:*');

    /*$arr['message']= 'Hello Angular Ajax';
    echo json_encode($arr);*/

    $con= mysqli_connect('localhost','root','','todoapp');

    $q= "select addtomyday from tasks where addtomyday='true'";

    $result= mysqli_query($con,$q);

    $taskcount=0;
    while ($res= mysqli_fetch_array($result)) {
      $taskcount++;
    }

    $arr['taskcount']= $taskcount;
    echo json_encode($arr);


 ?>
