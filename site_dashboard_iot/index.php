<?php
// Habilita a visualização dos erros para serem tratados
ini_set('display_errors', true);
error_reporting(E_ALL);

// Tratamento da URL utilizando .htaccess
$url = explode("/", @filter_input(INPUT_GET, 'url', FILTER_SANITIZE_STRING));
$loginok = "off";

// inclui a extenção php nos parametro recebido
define('PATH', $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].substr($_SERVER['PHP_SELF'],0, -10));
//echo PATH.'<br>';
//var_dump($_SERVER);

  include('pages/home.php');
/*
  if ($loginok == "off") {
	include('pages/admin/login.php');
  }
  else{
	include('pages/home.php');
  }//*/
?>