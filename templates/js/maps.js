$(document).ready(function () {
    addButt = $('#okClass')
    mapName = $('#mapName')
    advantage = $('#advantage')
    mapPool = $('#mapPool')
    gameMode = $('#gameMode')
    competitive = $('#competitive')    
    addButt.click(function () {
        newMap = {
            "map": mapName.val(),
            "advantage": advantage.val(),
            "pool": mapPool.val(),
            "mode": gameMode.val(),
            "compet": competitive.val()            
        };
        console.log(newMap);
        $.ajax({
            url: "/add_map",
            type: "get",
            data: newMap,
            dataType: "json",
            contentType: "text/plain",
            success: function (data) {
                success = data['success']
                if (success) {
                    location.reload();
                } else {
                    console.log("there was an error");
                }
            }
        });
    });

    $('.edit').on('click', function () {
        $('#addMapModal').modal("show");
        $("input#mapName").val($(this).closest('tr').children('td:eq(0)').text());
        $("input#advantage").val($(this).closest('tr').children('td:eq(1)').text());
        $("input#mapPool").val($(this).closest('tr').children('td:eq(2)').text());
        $("input#gameMode").val($(this).closest('tr').children('td:eq(3)').text());
        $("input#competitive").val($(this).closest('tr').children('td:eq(4)').text());        
    });


    //editButt = $('#addPlayer')
    addButt.click(function () {
        updatedMap = {
            "mapName": $("input#mapName").val(),
            "advantage": $("input#advantage").val(),
            "mapPool": $("input#mapPool").val(),
            "gameMode": $("input#gameMode").val(),
            "competitive": $("input#competitive").val()
        };
        console.log(updatedMap);
        $.ajax({
            url: "/edit_map",
            type: "get",
            data: updatedMap,
            dataType: "json",
            contentType: "text/plain",
            success: function (data) {
                success = data['success']
                if (success) {
                    location.reload();
                } else {
                    console.log("there was an error");
                }
            }
        });
    });

    $('.delete').on('click', function () {
        $('#confirm').modal("show");
        toDelete = $(this).closest('tr').children('td:eq(0)').text();
    });

    remove = $('#confirmRemove')
    remove.click(function () {
        console.log(toDelete);
        $.ajax({
            url: "delete_map",
            type: "get",
            "data": { "map_name": toDelete },
            success: function (data) {
                location.reload();
            }
        })
    });
});