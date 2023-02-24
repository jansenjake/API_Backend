<template>


  <div class="login">
		<h1>Login</h1>
		<form>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" placeholder="Enter your email">

			<label for="username">Username:</label>
			<input type="text" id="username" name="username" placeholder="Enter your username">

			<label for="password">Password:</label>
			<input type="password" id="password" name="password" placeholder="Enter your password">

			<input type="submit" value="Login">

      <a class="register" href="#">Create Account</a>
		</form>
	</div>
  
  <!-- <router-view/> -->
</template>

<style>
body {
	background-color: #1f1f1f;
	font-family: Arial, sans-serif;
}

.login {
	background-color: #2c2c2c;
	color: #fff;
	padding: 30px;
	border-radius: 5px;
	margin: 10% auto;
	max-width: 400px;
}

form{
  margin-right: 15px;
}

h1 {
	text-align: center;
	margin-bottom: 30px;
}

form label {
	display: block;
	margin-bottom: 10px;
}

form input[type="email"],
form input[type="text"],
form input[type="password"] {
	display: block;
	width: 100%;
	padding: 10px;
	margin-bottom: 20px;
	background-color: #3d3d3d;
	border: none;
	color: #fff;
	border-radius: 5px;
}

form input[type="submit"] {
	background-color: #000000;
	color: #fff;
	padding: 10px 20px;
	border: white 2px solid;
	border-radius: 25px;
	cursor: pointer;
	font-size: 16px;
  font-weight: 500;
}

form input[type="submit"]:hover {
	background-color: #ffffff;
  color: #000000;
  border: solid #000000 ;
  transition: ease 0.6s;
}

.register{
  padding-left: 10rem;
  color: black;
}


</style>
