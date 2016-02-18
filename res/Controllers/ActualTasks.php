<?php

require_once '../SettingPDO.php';

$tmp = $pdo->query("SELECT id, task FROM TODO WHERE task_status != '2';");

echo json_encode($tmp->fetchAll());






