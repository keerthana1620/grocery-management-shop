<?php
session_start();

$_POSTservername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "LoginSystem"; 

$conn = new mysqli($_POSTservername, $username, $password, $dbname);

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

$username = $_POST['username'];
$password = $_POST['password'];

 
 $sql = "SELECT * FROM users WHERE username = '$username'";
 $result = $conn->query($sql);

if ($result->num_rows > 0) {

 $user = $result->fetch_assoc();



 if ($password == $user['password']) {

 $_SESSION['username'] = $username;
 header("Location: index.html"); 
 exit();
 } else {

 $error_message = "Invalid username or password.";
 }
 } else {

 $error_message = "Invalid username or password.";
}
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login</title>
 <link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="login-container">
     <h2>Login</h2>
<form id="login-form" method="POST" action="">
<div class="form-group">
<label for="username">Username:</label>
 <input type="text" id="username" name="username" required>
</div>
 <div class="form-group">
<label for="password">Password:</label>
<input type="password" id="password" name="password" required>
</div>
 <button type="submit">Login</button>
 </form>

<!-- Display error message if login fails -->
 <?php if (isset($error_message)): ?>
<div class="error-message"><?php echo $error_message; ?></div>
<?php endif; ?>
 </div>
</body>
</html>
