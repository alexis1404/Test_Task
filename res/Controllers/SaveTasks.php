<?php

require_once '../SettingPDO.php';

if(isset($_POST['checks'])) {

    $tasks_array = ($_POST['checks']);
    $index = 0;
    $elements = count($tasks_array);
    $tmp = $pdo->prepare("INSERT INTO TODO (task, task_status, date_task) VALUES (:temp, :num, now());");

    while ($index < $elements) {
        $temp = $tasks_array[$index];
        $tmp->execute(array('temp' => $tasks_array[$index], 'num' => '1'));
        $index++;
    }

}
