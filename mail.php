<?php
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		if(empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["phone"]) || empty($_POST["msg"])){
			echo "Не все данные переданы!";
			exit;
		}
		
		$name = $_POST["name"];
		$email = $_POST["email"];
		$phone = $_POST["phone"];
		$msg = $_POST["msg"];
		
		$to = "web@web-lab.com.ua";
		$subject = "site";
		$message = "<strong>Имя:</strong> $name<br><br><strong>E-mail:</strong> $email<br><br><strong>Телефон: </strong>$phone<br><br><strong>Сообщение: </strong>$msg";
		// Для отправки HTML-письма должен быть установлен заголовок Content-type
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

		// Дополнительные заголовки
		$headers .= "From: <$email>" . "\r\n";
		
		if(mail ( $to, $subject, $message, $headers)){
			echo "Сообщение успешно отправлено!";
		}else{
			echo "Сообщение не отправлено!";
		}
	}
