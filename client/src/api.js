export function uploadFile(file) {
	const promise = new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = async function (e) {
			resolve(e.target.result);
		};
		reader.onerror = function (e) {
			reject(new Error('Ошибка загрузки файла'));
		};
		reader.readAsArrayBuffer(file);
	});
	return promise;
}

export function formattedPrice(price) {
	if (typeof price === 'number') {
		price = String(price);
	}

	return price
		.split('')
		.reverse()
		.reduce((result, char, index) => {
			if (index % 3 === 0) {
				return (result += '.' + char);
			} else {
				return (result += char);
			}
		})
		.split('')
		.reverse()
		.join('');
}
