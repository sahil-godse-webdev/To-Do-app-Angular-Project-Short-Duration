<?php

    header('Access-Control-Allow-Origin:*');

    /*$arr['message']= 'Hello Angular Ajax';
    echo json_encode($arr);*/

    $con= mysqli_connect('localhost','root','','todoapp');

    $q= "select important from tasks where important='true'";

    $result= mysqli_query($con,$q);

    $impcount=0;
    while ($res= mysqli_fetch_array($result)) {
      $impcount++;
    }

    $arr['impcount']= $impcount;
    echo json_encode($arr);


 ?>
