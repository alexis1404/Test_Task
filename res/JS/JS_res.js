$(document).ready(function(){

    //start create form for new tasks
    $('#create_task').click(function(){
        var new_task = $('#input_task').val();
        if(new_task != ''){
            $('#message').text('');
            $('#task_list').append(
                '<div class="add">' +
                '<li class="task_line">' + new_task + '</li>' + '<button class="add_b">Delete task</button>' +
                '<button class="edit_t">Edit task</button>' +
                '<textarea id="edit_inp_task" rows="5" cols="50"></textarea>' +
                    '<button class="saver_task">Save</button>'
                + '</div>' +
                    '<p></p>'
            );
            $('#message').text('');
            $('#input_task').val('');
            $('.add textarea').hide();
            $('.add button.saver_task').hide();
        }else{
            $('#message').text('Поле для задач пусто! Введите текст новой задачи!');
        }
    });

    $('.add_b').live('click', function(){
        $(this).parent().remove();
    });

    $('.edit_t').live('click', function(){
        $('.add button.saver_task').hide();
        $('.add textarea').hide();
        $(this).next().show();
        $(this).next().next().show();
        $(this).next().html($(this).prev().prev().html());
    });

    $('.saver_task').live('click', function(){
        var edit_data = $(this).prev().val();
        $(this).prev().prev().prev().prev().html(edit_data);
        $(this).prev().hide();
        $(this).hide();
    });
    //end form for new tasks
    //***

    //transform data of task list in array and translate in controller
    $('#save_button').click(function() {
        var liArray = $('.task_line');
        var liContainArr = [];
        for(var i=0; i<liArray.length; i++){
            liContainArr[i] = liArray[i].innerHTML;
        }

        $.ajax({
            url: 'res/Controllers/SaveTasks.php',
            type: 'POST',
            dataType: 'json',
            data:{
                'checks': liContainArr
            },
            success: function(data) {

            }
        });

        $('.add').remove();

    });


    //dynamic generate task list of database data
        $('.out_block').remove();
    $.ajax({
        url: 'res/Controllers/ActualTasks.php',
        type: 'POST',
        dataType: 'json',
        success: function(data){
            for (var i in data) {
                $('#output_task').append(
                    '<div class="out_block">' +
                    '<p class="outs">' + data[i].task + '</p>' +
                        '<input type="checkbox" class="complit" id=' + data[i].id + '>' + 'Task completed!'  + '   ' +
                        '<button class="edit_task">Edit task</button>' +
                    '<textarea class="editor" rows="5" cols="50"></textarea>' + '<button class="editor_saver">Save</button>' + '  ' +
                        '<button class="delete_task">Delete Task</button>' +
                    '<br>' +
                        '<hr>'
                    + '</div>'
                );
                $('.out_block textarea').hide();
                $('.editor_saver').hide();
            }

        }

    });



    //logics for checkbox completion task
    $('.complit').live('click', function(){
        var question = confirm('Вы действительно хотите отметить эту задачу как завершенную?');
        if(question){
            $('.out_block textarea').hide();
            $(this).prev().wrap("<s></s>");
            var id_task = $(this).attr('id');
            $(this).hide();
            $(this).next().hide();
            $(this).next().next().next().next().hide();
            $.ajax({
                url: 'res/Controllers/TaskCompletion.php',
                type: 'POST',
                dataType: 'json',
                data:{
                    'complete': id_task
                },
                success: function(data){

                }
            });
        }
    });


    //dynamic create list completed tasks
   $('#show_task').click(function(){
       $('#task_comp_list').html('');
       $.ajax({
           url: 'res/Controllers/CompletedTasks.php',
           type: 'POST',
           dataType: 'json',
           success: function(data){
               for (var i in data){
                   $('#task_comp_list').append(
                       '<p>' + data[i].task + '</p>' + '<p><i> Завершено ' + data[i].date_task + '</i></p>'
                       + '<hr>'
                   );
               }
           }
       });
   });


    //behavior tasks edition
    $('.edit_task').live('click', function(){
        $('.out_block textarea').hide();
        $('.editor_saver').hide();
        $(this).next().show();
        $(this).next().next().show();
        $(this).next().text($(this).prev().prev().html());
    });

    //logick for task editor
    $('.editor_saver').live('click', function(){
        var content_edit_task = $(this).prev().val();
        var id_task = $(this).prev().prev().prev().attr('id');
        if(content_edit_task != '') {
            $(this).prev().prev().prev().prev().text(content_edit_task);
            $.ajax({
                url: 'res/Controllers/EditTask.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    'edit_task': content_edit_task,
                    'id_edit': id_task
                },
                success: function (data) {
                    $('.out_block textarea').hide();
                    $('.editor_saver').hide();
                }
            });
        }else{
            alert('Edit form empty!');
        }
    });

    //logick for task deleter
    $('.delete_task').live('click', function(){
        var id_delete_task = $(this).prev().prev().prev().prev().attr('id');
        var question = confirm('Вы действительно хотите удалить эту задачу?');
        if(question){
            $(this).parent().remove();
            $.ajax({
                url: 'res/Controllers/DeleteTask.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    'delete_id': id_delete_task
                },
                success: function (data) {

                }
            });
        }
    });

});


