<?php
  if(isset($_POST['submit']))
  {
    // print_r($_POST['email']);
    // print_r('<br>');
    // print_r($_POST['password']);

    include_once('config.php');

    $email = $_POST['email'];
    $password = $_POST['password'];

    $result = mysqli_query($conexao, "INSERT INTO usuarios(email,password) 
    VALUES ('$email','$password')");
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="../CSS/sign.css">
    <title>Criar Conta</title>
</head>
<body>
 
   
    <picture>
      <source media="(max-width: 600px") srcset="../IMG/nezuko-pequena.png">
    <img class="nezuko" src="../IMG/nezuko2.png">
  </picture>
    <p class="crown">crown.</p>
   
       <div class="container"> 
        <h1 class="criar">Criar conta</h1>
        <p class="tem-conta">Já tem conta? <a href="#">Conecta-se</a></p>


        <form action = "../VIEW/sign.php" method="POST">
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Email</b></label>
              
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" name="email">
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-2 col-form-label"><b>Senha</b></label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" name="password">
              </div>
            </div>
            <button type="submit" class="btn1" name="submit" id="submit"><b>Registrar</b></button>
        
            <img class= "ochi" src="../IMG/ochi.png">
        
        </form>
        
    </div>
 
</body>
</html>