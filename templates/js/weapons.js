$(document).ready(function () {
    addButt = $('#okClass')
    name = $('#weaponName')
    wClass = $('#weaponClass')
    price = $('#price')
    magSize = $('#magazineSize')
    bullets = $('#totalBullets')
    modes = $('#firingModes')
    usedBy = $('#usedBy')    
    addButt.click(function () {
        newPlayer = {
            "name": name.val(),
            "weaponClass": wClass.val(),
            "price": price.val(),
            "magazineSize": magSize.val(),
            "bullets": bullets.val(),
            "firingModes": modes.val(),
            "usedBy": usedBy.val()            
        };
        console.log(newPlayer);
        $.ajax({
            url: "/add_weapon",
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
        $('#addWeaponModal').modal("show");
        $("input#weaponName").val($(this).closest('tr').children('td:eq(0)').text());
        $("input#weaponClass").val($(this).closest('tr').children('td:eq(1)').text());
        $("input#price").val($(this).closest('tr').children('td:eq(2)').text());
        $("input#magazineSize").val($(this).closest('tr').children('td:eq(3)').text());
        $("input#totalBullets").val($(this).closest('tr').children('td:eq(4)').text());
        $("input#firingModes").val($(this).closest('tr').children('td:eq(5)').text());
        $("input#usedBy").val($(this).closest('tr').children('td:eq(6)').text());        
    });


    //editButt = $('#addPlayer')
    addButt.click(function () {
        updatedWeapon = {
            "weaponName": $("input#weaponName").val(),
            "weaponClass": $("input#weaponClass").val(),
            "price": $("input#price").val(),
            "magazineSize": $("input#magazineSize").val(),
            "totalBullets": $("input#totalBullets").val(),
            "firingModes": $("input#firingModes").val(),
            "usedBy": $("input#usedBy").val()
        };
        console.log(updatedWeapon);
        $.ajax({
            url: "/edit_weapon",
            type: "get",
            data: updatedWeapon,
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
            url: "delete_weapon",
            type: "get",
            "data": { "weapon_name": toDelete },
            success: function (data) {
                location.reload();
            }
        })
    });
});