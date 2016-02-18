<?php

require_once '../SettingPDO.php';

if(isset($_POST['delete_id'])) {

   $tmp = $pdo->prepare("DELETE FROM TODO WHERE id= :id_delete_task;");

    $tmp->execute(array('id_delete_task' => $_POST['delete_id']));

}
