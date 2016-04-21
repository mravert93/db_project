$(document).ready(function () {
    addButt = $('#okClass')
    firstName = $('#firstName')
    lastName = $('#lastName')
    gamertag = $('#playerGamertag')
    teamName = $('#teamName')
    age = $('#age')
    country = $('#countryOfOrigin')
    kdr = $('#kdr')
    hsPercent = $('#headshotPercentage')
    favWeapon = $('#favoriteWeapon')
    bestMap = $('#playerBestMap')
    worstMap = $('#playerWorstMap')
    addButt.click(function () {
        newPlayer = {
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
        console.log(newPlayer);
        $.ajax({
            url: "/add_player",
            type: "get",
            data: newPlayer,
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
        $('#addPlayerModal').modal("show")
        $("input#firstName").val($(this).closest('tr').children('td:eq(0)').text());
        $("input#lastName").val($(this).closest('tr').children('td:eq(1)').text());
        $("input#playerGamertag").val($(this).closest('tr').children('td:eq(2)').text());
        $("input#teamName").val(document.getElementById("teamName").innerHTML);
        $("input#age").val($(this).closest('tr').children('td:eq(3)').text());
        $("input#countryOfOrigin").val($(this).closest('tr').children('td:eq(4)').text());
        $("input#kdr").val($(this).closest('tr').children('td:eq(5)').text());
        $("input#headshotPercentage").val($(this).closest('tr').children('td:eq(6)').text());
        $("input#favoriteWeapon").val($(this).closest('tr').children('td:eq(7)').text());
        $("input#playerBestMap").val($(this).closest('tr').children('td:eq(8)').text());
        $("input#playerWorstMap").val($(this).closest('tr').children('td:eq(9)').text());
        //$("input#firstName").val(firstName);
        /*lastName = $(this).closest('tr').children('td:eq(1)').text()
        gamertag = $(this).closest('tr').children('td:eq(2)').text()
        teamName = $(this).closest('tr').children('td:eq(3)').text()
        age = $(this).closest('tr').children('td:eq(4)').text()
        country = $(this).closest('tr').children('td:eq(5)').text()
        kdr = $(this).closest('tr').children('td:eq(6)').text()
        hsPercent = $(this).closest('tr').children('td:eq(7)').text()
        favWeapon = $(this).closest('tr').children('td:eq(8)').text()
        bestMap = $(this).closest('tr').children('td:eq(9)').text()
        worstMap = $(this).closest('tr').children('td:eq(10)').text()*/
    });


    //editButt = $('#addPlayer')
    addButt.click(function () {
        updatedPlayer = {
            "first": $("input#firstName").val(),
            "last": $("input#lastName").val(),
            "gamertag": $("input#playerGamertag").val(),
            "teamName": $("input#teamName").val(),
            "age": $("input#age").val(),
            "country": $("input#countryOfOrigin").val(),
            "kdr": $("input#kdr").val(),
            "hsPercent": $("input#headshotPercentage").val(),
            "favWeapon": $("input#favoriteWeapon").val(),
            "bestMap": $("input#playerBestMap").val(),
            "worstMap": $("input#playerWorstMap").val()
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
        toDelete = $(this).closest('tr').children('td:eq(2)').text();
    });

    remove = $('#confirmRemove')
    remove.click(function () {
        console.log(toDelete);
        $.ajax({
            url: "delete_player",
            type: "get",
            "data": { "gamertag": toDelete },
            success: function (data) {
                location.reload();
            }
        })
    });
});