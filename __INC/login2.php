<!DOCTYPE html>
<html lang="pt">
<head>
	<title>Login to RecEvent</title>
  	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Ernesto Argentina Cumbe">
	<link rel="stylesheet" type="text/css" href="../css/login2.css">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
</head>
<body>
	<?php
	require_once 'Usuario.php';
	?>


	<div class="bg">
		<div class="slide">
			<img src="../images/slide/principal.jpeg" class="principal">
			<img src="../images/slide/slide1.jpg">
			<img src="../images/slide/slide2.jpg">
			<img src="../images/slide/slide3.jpg">
			<img src="../images/slide/slide4.jpg">
			<img src="../images/slide/slide5.jpg">
		</div>
		<div class="vinheta">
			<button class="btn btn-primary" onclick="login()">login</button>
			<button class="btn btn-success" onclick="signup()">signup</button>
		</div>
	</div>


	<div class="form">
	  <form>
	  <h1>LOGIN</h1>
		<div class="inputBox mrg-tp">
		  <input type="text" required="">
		  <label>Username</label>
		</div>
		<div class="inputBox">
		  <input type="password" required="coloque o password ai">
		  <label>Password</label>
		</div>
		<div class="inputBoxCheck">
			<input type="checkbox"><label>lembrar</label>
		</div>
	  	<button class="login">Autenticar</button>
	  	<button class="signup" id="contaNova" onclick="signup()">Criar conta</button>
	  </form>
	  <!-- <div class="butoesBaixo"> -->
	  <!-- </div> -->
	</div>


	<div class="form-signup">
		 <form action="Usuario.php" method="POST">
	  <h1>SIGNUP</h1>
		<div class="inputBox mrg-tp">
		  <input type="text" required="">
		  <label>Nome</label>
		</div>
		<div class="inputBox mrg-tp">
		  <input type="text" required="">
		  <label>Apelido</label>
		</div>
	  <div class="inputBox mrg-tp">
	    <input type="text" required="">
	    <label>Email</label>
	  </div>

		<div class="inputBox">
		  <input type="password" required="">
		  <label>Password</label>
		</div>
		<div class="inputBoxCheck">
			<input type="checkbox"><label>lembrar</label>
		</div>
	  	<button class="login" name="cadastrar">Salvar</button>
	  	<button class="signup" onclick="login()">Fazer login</button>
	  </form>
	</div>


	<script type="text/javascript">
			document.querySelector(".form-signup").style.transition="1s";
			document.querySelector(".form").style.transition="1s";
document.querySelector(".form-signup").style.transform="rotateX(90deg) translate(-50%,-50%)";

		function login(){
			document.querySelector(".form-signup").style.transform="rotateX(90deg) translate(-50%,-50%)";
			document.querySelector(".form").style.transform="rotateX(0deg) translate(-50%,-50%)";
			document.querySelector(".form").style.zIndex="1";
			document.querySelector(".form-signup").style.zIndex="-1";
		}
		function signup(){
			document.querySelector(".form-signup").style.transform="rotateX(0deg) translate(-50%,-50%)";
			document.querySelector(".form").style.transform="rotateX(90deg) translate(-50%,-50%)";
			document.querySelector(".form").style.zIndex="-1";
			document.querySelector(".form-signup").style.zIndex="1";
		}

		document.getElementById("contaNova").addActionListener('click',function(event){
			event.preventDefault();
		})
	</script>


</body>
</html>
