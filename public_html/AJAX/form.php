<?php
$inp= $_POST['ourForm__inp'];
switch($inp){
    case 'ONE':
        echo 'one';
        break;
    case '2':
        echo 'two'
        break;
   
    default: 
    echo 'zero';
}