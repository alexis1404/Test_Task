<?php

require_once '../SettingPDO.php';

$tmp = $pdo->query("SELECT task, date_task FROM TODO WHERE task_status != '1';");

echo json_encode($tmp->fetchAll());