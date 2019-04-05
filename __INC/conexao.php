<?php 

function conectar(){
	
try{
	$pdo=new PDO("mysql:host=localhost; dbname=berecalled","root","");
}catch(Exception $exp){
	echo $exp->getMessage();
     echo "ERRO do catch";
}
return $pdo;

}
