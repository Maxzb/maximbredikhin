<?php
$name = $_POST['name'];
$telephone = $_POST['telephone'];
$name = htmlspecialchars($name);
$telephone = htmlspecialchars($telephone);
$name = urldecode($name);
$telephone = urldecode($telephone);
$name = trim($name);
$telephone = trim($telephone);
//echo $name;
//echo "<br>";
//echo $telephone;
if (mail("maxzb86@gmail.com", "Заявка с сайта", "Имя:".$name.". Телефон: ".$telephone ,"From: maxzb86@gmail.com \r\n"))
 {     echo "Сообщение успешно отправлено!"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>