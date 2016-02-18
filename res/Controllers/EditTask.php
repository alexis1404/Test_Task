<?php

require_once '../SettingPDO.php';

if(isset($_POST['edit_task'],$_POST['id_edit'])) {

  $tmp = $pdo->prepare("UPDATE TODO SET task= :edit_text_task WHERE id= :id_edit_task;");

    $tmp->execute(array('edit_text_task' => $_POST['edit_task'], 'id_edit_task' => $_POST['id_edit']));
}

