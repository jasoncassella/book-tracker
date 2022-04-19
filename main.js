//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);
const title = document.querySelector('h2');
const author = document.querySelector('h3');
const cover = document.querySelector('img');
title.textContent = localStorage.getItem('books');

function getFetch() {
	const isbn = document.querySelector('input').value;
	if (!isbn) return;
	const url = `https://openlibrary.org/isbn/${isbn}.json`;

	fetch(url)
		.then(res => res.json()) // parse response as JSON
		.then(data => {
			console.log(data.title);
			if (!localStorage.getItem('books')) {
				localStorage.setItem('books', data.title);
			} else {
				let books = localStorage.getItem('books') + ' ; ' + data.title;
				localStorage.setItem('books', books);
			}
			// // put title into local storage
			title.textContent = localStorage.getItem('books');

			// author.textContent = formatted.authors[0].name;
			// cover.src = formatted.cover.large;
		})
		.catch(err => {
			console.log(`error ${err}`);
		});
}
