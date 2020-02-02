<?php
  header('Access-Control-Allow-Origin:*');

  $taskname = $_REQUEST['taskname'];
  $addtomyday = $_REQUEST['addtomyday'];
  $important = $_REQUEST['important'];
  $due = $_REQUEST['due'];
  $addnote = $_REQUEST['addnote'];
  $created_on = date("F d, Y h:i:sa");
  $last_modified = date("F d, Y h:i:sa");
  $con= mysqli_connect('localhost','root','','todoapp');

  $q= "select * from tasks where taskname='$taskname'";
  $res= mysqli_query($con,$q);
  $num= mysqli_num_rows($res);
        if($num>=1){
            //echo "Want to mark absent?";
            $q= "UPDATE tasks
                SET addtomyday='$addtomyday', important='$important',
                  due='$due', addnote='$addnote', last_modified='$last_modified'
                WHERE taskname='$taskname'
            ";
            mysqli_query($con,$q);

            $a['message']= 'Updation Successful!!';
            echo json_encode($a);
        }
        else{
          $q="insert into tasks
            (taskname,addtomyday, important, due, addnote, created_on, last_modified, completed)
            values('$taskname','$addtomyday','$important','$due','$addnote','$created_on','$last_modified','')";
          mysqli_query($con,$q);

          $a['message']= 'Task added!!';
          echo json_encode($a);
        }
?>
