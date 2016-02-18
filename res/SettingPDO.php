<?php

$dsn = "mysql:host=localhost;dbname=test_todo;charset=utf8";

$opt = array(
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
);

$user = 'root';
$pass = '1404000066';

$pdo = new PDO($dsn, $user, $pass, $opt);