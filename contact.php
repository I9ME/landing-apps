<?php

	if(isset($_POST['email'])) {
		 
		$name = $_POST["first_name"];
		$name = str_replace(" ", "%20", $name); 
			
		
		//$xml = file_get_contents("http://dl.deway.com.br/adicionarProspect/?name=" . $name . "&sector=1&email=" . $_POST['email'] . "&phone=" . $_POST['phone'] . "&responsible=3&status=8&type=1&perspective=1&first_contact=Acesso%20ao%20site&contact1=". $_POST['source']);
		
		
		include "funcoes.php";	

		function clean_string($string) {
			$bad = array("content-type","bcc:","to:","cc:","href");
			return str_replace($bad,"",$string);
		}

		$first_name = $_POST['nome']; // required 
		$email_from = $_POST['email']; // required
		$phone = $_POST['fone']; // required
		$titulo = $_POST['titulo'];
		$projeto = $_POST['projeto'];
		$source = $_POST['descricao'];	

		$email_to 	   = "contato@devari.com.br";			 
		$email_subject = "Novo Prospect do Site";
		 
		$email_message = "Mais detalhes abaixo.<br><br>";
		 
			
		
		 
		 
		$email_message .= "<b>Nome: </b>".clean_string($first_name)."<br>";
		$email_message .= "<b>E-Mail: </b>".clean_string($email_from)."<br>";
		$email_message .= "<b>Telefone: </b>".clean_string($phone)."<br><br>";
		$email_message .= "<b>Titulo: </b>".clean_string($titulo)."<br><br>";
		$email_message .= "<b>Projeto: </b>".clean_string($projeto)."<br><br>";
		$email_message .= "<b>Descrição do Projeto: </b><br><br>".clean_string($source)."<br>";	 
			 
		EnviarEmailSistema( 'Site Devari', $email_to, $email_subject, $email_message);
		header("Location: success.html");
		die();	 		
	}	 
?>
