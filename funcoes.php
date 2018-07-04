<?php

include "phpmailer/class.phpmailer.php";

function EnviarEmailSistema( $nomeDestinatario, $destinatarioMail, $assunto, $mensagem)
{

/*    $mail = new PHPMailer(); //instancia objeto
    $mail->IsSMTP(); //mandar via SMTP
    $mail->Host = "smtp.ipage.com"; //// Seu servidor smtp
    $mail->IsHTML(true); //enviar em HTML
    $mail->SMTPAuth = true; //// habilita smtp autenticado
    $mail->Port     = 25; // SMTP Port
    $mail->Username = "inexh@dltreinamento.com.br"; // usu�rio deste servidor smtp
    $mail->Password = "Dlceara1234"; // senha
*/
	$mail = new PHPMailer();

	$mail->IsSMTP();  // telling the class to use SMTP
	$mail->SMTPAuth   = true; // SMTP authentication
	$mail->IsHTML(true); // Define que o e-mail ser� enviado como HTML
	$mail->SMTPSecure = 'ssl';	// SSL REQUERIDO pelo GMail    
	$mail->Host       = "smtp.gmail.com"; // SMTP server
	$mail->IsHTML(true); //enviar em HTML
	$mail->Port       = 465; // SMTP Port
	$mail->Username   = "dl@fortalshop.com.br"; // SMTP account username
	//$mail->Username   = "roberio@dlceara.com.br";
	$mail->Password   = "k3k5t9x6";        // SMTP account password
	$mail->CharSet 	  = 'iso-8859-1'; // Charset da mensagem
     
    $mail->From 	= "dl@fortalshop.com.br"; //email utilizado para o envio. mesmo do remetente
    $mail->FromName = "Site Devari"; // nome remetente

    //$mail->AddAddress($para); // destinat�rio
    $mail->AddAddress($destinatarioMail, $nomeDestinatario);

    //$mail->AddReplyTo("roberio@dlceara.com.br", "Rob�rio Cavalcante"); // informando a quem devemos responder

    $mail->Subject = $assunto; // assunto do email
    //adicionando o html no corpo do email
    $mail->Body = $mensagem;

    return $mail->Send();

}



function Enviar_SMTPx($ho, $us, $se, $de, $no, $para, $tipo, $ms51, $ass)
{

    $mail = new PHPMailer(); //instancia objeto
    $mail->IsSMTP(); //mandar via SMTP
    $mail->Host = $ho; //// Seu servidor smtp
    $mail->SMTPAuth = true; //// habilita smtp autenticado
    $mail->Username = $us; // usu�rio deste servidor smtp
    $mail->Password = $se; // senha
    $mail->From = $de; //email utilizado para o envio. mesmo do remetente
    $mail->FromName = $no; // nome remetente

    $mail->AddAddress($para); // destinat�rio

    $mail->AddReplyTo($de, $no); // informando a quem devemos responder

    if ($tipo == "html") {
        $mail->IsHTML(true); //enviar em HTML
        $msg = $ms51; //Mensagem ou codigo html para enviar no email
    } else {
        $msg = $ms51; //Mensagem ou codigo html para enviar no email
    }
    $mail->Subject = $ass; // assunto do email
    //adicionando o html no corpo do email
    $mail->Body = $msg;

    if ($mail->Send() == true) {
        $res = "sucess";
    } else {
        $res = "false";
    }
    return $res;

}

function Enviar_SMTP_old($ho, $us, $se, $de, $no, $para, $tipo, $ms51, $ass)
{

    $mail = new PHPMailer(); //instancia objeto
    $mail->IsSMTP(); //mandar via SMTP
    $mail->Host = $ho; //// Seu servidor smtp
    $mail->SMTPAuth = true; //// habilita smtp autenticado
    $mail->Username = $us; // usu�rio deste servidor smtp
    $mail->Password = $se; // senha
    $mail->From = $de; //email utilizado para o envio. mesmo do remetente
    $mail->FromName = $no; // nome remetente

    $mail->AddAddress($para); // destinat�rio

    $mail->AddReplyTo($de, $no); // informando a quem devemos responder

    if ($tipo == "html") {
        $mail->IsHTML(true); //enviar em HTML
        $msg = $ms51; //Mensagem ou codigo html para enviar no email
    } else {
        $msg = $ms51; //Mensagem ou codigo html para enviar no email
    }
    $mail->Subject = $ass; // assunto do email
    //adicionando o html no corpo do email
    $mail->Body = $msg;

    $mail->Send();

}

function Enviar_SMTP($ho, $us, $se, $de, $no, $para, $tipo, $ms51, $ass)
{

	$mail = new PHPMailer();

	$mail->IsSMTP();  // telling the class to use SMTP
	$mail->SMTPAuth   = true; // SMTP authentication
	$mail->IsHTML(true); // Define que o e-mail ser� enviado como HTML
	$mail->SMTPSecure = 'ssl';	// SSL REQUERIDO pelo GMail    
	$mail->Host       = "smtp.gmail.com"; // SMTP server
	$mail->IsHTML(true); //enviar em HTML
	$mail->Port       = 465; // SMTP Port
	$mail->Username   = "roberio@dlceara.com.br"; // SMTP account username
	//$mail->Username   = "roberio@dlceara.com.br";
	$mail->Password   = "k3k5t9x6";        // SMTP account password
	$mail->CharSet 	  = 'iso-8859-1'; // Charset da mensagem
    
    
    $mail->From = $de; //email utilizado para o envio. mesmo do remetente
    $mail->FromName = $no; // nome remetente

    $mail->AddAddress($para); // destinat�rio

    $mail->AddReplyTo($de, $no); // informando a quem devemos responder

    $msg = $ms51; //Mensagem ou codigo html para enviar no email
    
    $mail->Subject = $ass; // assunto do email
    //adicionando o html no corpo do email
    $mail->Body = $msg;

    $mail->Send();

}


function data_br_ing($datain)
{
    $databra = "" . substr($datain, 6, 4) . "-" . substr($datain, 3, 2) . "-" .
        substr($datain, 0, 2) . "";
    return $databra;
}

?>