<?php

require_once '../SettingPDO.php';

if(isset($_POST['complete'])) {

    $tmp = $pdo->prepare("UPDATE TODO SET task_status= :num, date_task=now() WHERE id = :id_task_complete;");
    $tmp->execute(array('num' => '2', 'id_task_complete' => $_POST['complete']));

}
