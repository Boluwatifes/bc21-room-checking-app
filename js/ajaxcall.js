$('body').on('click', '#submit', (e) => {
	e.preventDefault();
	const div = $('body').find('#results');
	div.empty();
	const room = $('body').find('#category').val();
	const data = 'data=' + room;

	const callAjax = (url, data) => {
		$.ajax({
		method: 'GET',
		url: url,
		dataType: 'json',
		data: data,
		success: (data) => {
			let i = 1;
			let value = '';
			for(const key in data){
				value = '<div class="row result">';
				value += '<div class="col-md-3"> ' + i +' </div>';
				value += '<div class="col-md-5"> ' + key + ' </div>';
				value += '<div class="col-md-4"><button class="btn btn-sm btn-danger"> Availability: ' + key.available + ' </button></div>';
				value += '</div>';
				i += 1;
				div.html((value) => {
					return div += value;
				})
			}
		},
		error: (error) => {
			console.log(error);
		}
	}) 
	}

	switch(room){
		case 'working': {
			const url = 'http://localhost:3000/rooms/working';
			callAjax(url, room);
			break;
		}
		case 'quiet' : {
			const url = 'http://localhost:3000/rooms/quiet';
			callAjax(url, room);
			break;
		}
		case 'games': {
			const url = 'http://localhost:3000/rooms/games';
			callAjax(url, room);
			break;
		}
		case 'learning': {
			const url = 'http://localhost:3000/rooms/learning';
			callAjax(url, room);
			break;
		}
		case 'meeting': {
			const url = 'http://localhost:3000/rooms/meeting';
			callAjax(url, room);
			break;
		}
		default: {
			return 'Invalid argument passed!';
		}
	}
})