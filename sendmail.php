<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail -> CharSet = 'UTF-8';
    $mail -> setLanguage('ru', 'phpmailer/language/');
    $mail -> IsHtml(true);


    //От кого письмо
    $mail -> setFrom('contact.gbo@avtoprofi.in.ua', 'Сайт MudriMandry');
    //Кому письмо
    $mail -> addAddress('01121998kiril@gmail.com');
    //Тема письма
    $mail -> Subject = 'Письмо от сайта "MudriMandry"';

    //Тело письма
    $body = '<h1>Письмо - ответ на ваше заполнение формы. Сайт "MudriMandry"</h1>';
    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong>'.$_POST['email'].'</p>';
    }

    $mail -> Body = $body;

    //Отправка
    if (!$mail->send()) {
      $message = 'Ошибка';
    }else{
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>