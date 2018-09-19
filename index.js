var LIST = [ "Тут набор строк, строк 200", "строка1", "...строкаN" ];
$.each(LIST, function(i) {
	$('#list').append('<li></li>');
	$("li").each(function(i) {
  		$(this).html(LIST[i]);
	});
});

$('#update').click(function() {
	var searchInput = $('#field');
	searchInput.on('keyup, click, input, change', function() {
		var value = this.value;
		if (value.length > 0) {
			$('#list').find('li').show().filter(function() {
			return  $(this).text().toLowerCase().indexOf(value.toLowerCase()) == -1;
		}).hide();
		} else{
			$('#list').find('li').show();
		}
	});
});

// Очистка поля
$('#clean').click(function cleanField() {
	$('#field').val('');
	$('#list').find('li').show();
});