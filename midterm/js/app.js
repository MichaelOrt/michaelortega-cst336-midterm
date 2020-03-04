let searchBook = function(){
	var url = `https://openlibrary.org/api/books?bibkeys=ISBN:${$('#isbn').val()}&format=json&jscmd=data`;

	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(data){
			var key = 'ISBN:'+$('#isbn').val();
			console.log(data[key]);
			$('.cover').append(`<img src="${data[key].cover.medium}">`);
			$('.info').append(`<p >Title:${data[key].title}</p>`);
			$('.info').append(`<p >Author:${data[key].authors.name}</p>`);
			$('.info').append(`<p >Publish year:${data[key].pubish_date}</p>`);
			$('.info').append(`<p >Publisher:${data[key].publishers[0].name}</p>`);
			$('.info').append(`<p >ISBN:${$('#isbn').val()}</p>`);
			$('.info').append(`<p >Pages:${data[key].title}</p>`);
		},
		error: function(err){
			console.log(err);
		}
	});
}