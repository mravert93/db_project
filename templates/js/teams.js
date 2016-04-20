$(document).ready(function () {
    addButt = $('#okClass')
    teamName = $('#teamName')
    country = $('#countryOfOrigin')
    rank = $('#rank')
    region = $('#teamName')
    wins = $('#age')
    losses = $('#countryOfOrigin')
    draws = $('#kdr')
    coachName = $('#coachName')
    coachGamertag = $('#coachGamertag')
    bestMap = $('#teamBestMap')
    worstMap = $('#teamWorstMap')
    addButt.click(function () {
        newTeam = {
            "team": teamName.val(),
            "country": country.val(),
            "rank": rank.val(),
            "region": region.val(),
            "wins": wins.val(),
            "losses": losses.val(),
            "draws": draws.val(),
            "coach_name": coachName.val(),
            "coach_gamertag": coachGamertag.val(),
            "bestMap": bestMap.val(),
            "worstMap": worstMap.val()
        };
        console.log(newTeam);
        $.ajax({
            url: "/add_team",
            type: "get",
            data: newTeam,
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
            url: "delete_team",
            type: "get",
            "data": { "team_name": toDelete },
            success: function (data) {
                location.reload();
            }
        })
    });
});