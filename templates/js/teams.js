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
            "teamName": teamName.val(),
            "country": country.val(),
            "rank": rank.val() === "" ? 0 : rank.val(),
            "region": region.val(),
            "wins": wins.val() === "" ? 0 : wins.val(),
            "losses": losses.val() === "" ? 0 : losses.val(),
            "draws": draws.val() === "" ? 0 : draws.val(),
            "coachName": coachName.val(),
            "coachGamertag": coachGamertag.val(),
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
        $('#addTeamModal').modal("show");
        $("input#teamName").val($(this).closest('tr').children('td:eq(0)').text());
        $("input#countryOfOrigin").val($(this).closest('tr').children('td:eq(1)').text());
        $("input#rank").val($(this).closest('tr').children('td:eq(2)').text());
        $("input#region").val($(this).closest('tr').children('td:eq(3)').text());
        $("input#wins").val($(this).closest('tr').children('td:eq(4)').text());
        $("input#losses").val($(this).closest('tr').children('td:eq(5)').text());
        $("input#draws").val($(this).closest('tr').children('td:eq(6)').text());
        $("input#coachName").val($(this).closest('tr').children('td:eq(7)').text());
        $("input#coachGamertag").val($(this).closest('tr').children('td:eq(8)').text());
        $("input#teamBestMap").val($(this).closest('tr').children('td:eq(9)').text());
        $("input#teamWorstMap").val($(this).closest('tr').children('td:eq(10)').text());        
    });

    addButt.click(function () {
        updatedTeam = {
            "teamName": $("input#teamName").val(),
            "country": $("input#countryOfOrigin").val(),
            "rank": $("input#rank").val() === "" ? 0 : $("input#rank").val(),
            "region": $("input#region").val(),
            "wins": $("input#wins").val() === "" ? 0 : $("input#wins").val(),
            "losses": $("input#losses").val() === "" ? 0 : $("input#losses").val(),
            "draws": $("input#draws").val() === "" ? 0 : $("input#draws").val(),
            "coachName": $("input#coachName").val(),
            "coachGamertag": $("input#coachGamertag").val(),
            "bestMap": $("input#teamBestMap").val(),
            "worstMap": $("input#teamWorstMap").val()
        };
        console.log(updatedTeam);
        $.ajax({
            url: "/edit_team",
            type: "get",
            data: updatedTeam,
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