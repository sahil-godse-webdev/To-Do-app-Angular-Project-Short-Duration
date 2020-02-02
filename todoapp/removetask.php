<?php

  header('Access-Control-Allow-Origin:*');
  $taskname= $_REQUEST['taskname'];
  $con= mysqli_connect('localhost','root','','todoapp');

  $q= "delete from tasks where taskname='$taskname'";

  mysqli_query($con,$q);

  $arr['removemessage']= 'Task removed';
  echo json_encode($arr);


?>
