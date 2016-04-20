$(document).ready(function(){
	addButt = $('#okClass')
	firstName = $('#firstName')
	lastName = $('#lastName')
	gamertag = $('#playerGamertag')
	teamName = $('#teamName')
	age = $('#age')
	country = $('#country')
	kdr = $('#kdr')
	hsPercent = $('#headshotPercentage')
	favWeapon = $('#favoriteWeapon')
	bestMap = $('#playerBestMap')
	worstMap = $('#playerWorstMap')
	addButt.click(function() {
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
			success: function(data) {
				success = data['success']
				if(success) {
					location.reload();
				} else {
					console.log("there was an error");
				}
			}
		});
	});

	$('.delete').on('click', function() {
		$('#confirm').modal("show");
		toDelete = $(this).closest('tr').children('td:eq(2)').text();
	});

	remove = $('#confirmRemove')
	remove.click(function() {
		console.log(toDelete);
		$.ajax({
			url: "delete_player",
			type: "get",
			"data": {"gamertag": toDelete},
			success: function(data) {
				location.reload();
			}
		})
	});
});