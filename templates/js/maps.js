﻿$(document).ready(function () {
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
        $('#addPlayerModal').modal("show");
        firstName = $(this).closest('tr').children('td:eq(0)').text();
        lastName = $(this).closest('tr').children('td:eq(1)').text();
        gamertag = $(this).closest('tr').children('td:eq(2)').text();
        teamName = $(this).closest('tr').children('td:eq(3)').text();
        age = $(this).closest('tr').children('td:eq(4)').text();
        country = $(this).closest('tr').children('td:eq(5)').text();
        kdr = $(this).closest('tr').children('td:eq(6)').text();
        hsPercent = $(this).closest('tr').children('td:eq(7)').text();
        favWeapon = $(this).closest('tr').children('td:eq(8)').text();
        bestMap = $(this).closest('tr').children('td:eq(9)').text();
        worstMap = $(this).closest('tr').children('td:eq(10)').text();
    });


    //editButt = $('#addPlayer')
    addButt.click(function () {
        updatedPlayer = {
            "first": firstName.val(),
            "last": lastName.val(),
            "gamertag": gamertag.val(),
            "teamName": teamName.val(),
            "age": age.val(),
            "country": country.val(),
            "kdr": kdr.val(),
            "hsPercent": hsPercent.val(),
            "favWeapon": favWeapon.val(),
            "bestMap": bestMap.val(),
            "worstMap": worstMap.val()
        };
        console.log(updatedPlayer);
        $.ajax({
            url: "/edit_player",
            type: "get",
            data: updatedPlayer,
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