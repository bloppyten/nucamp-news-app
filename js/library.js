class Book {
	constructor(title, author, available = true) {
		this.title = title;
		this.author = author;
		this.available = available;
	}
}

const library = {
	books: [],

	addBook: function (title, author) {
		const book = new Book(title, author);
		this.books.push(book);
		console.log(
			`Added ${book.title} by ${book.author} to the Library. There are now ${this.books.length} in the library database.`
		);
	},

	checkOutBook: function (title) {
		for (let book of this.books) {
			if (book.title === title && book.available) {
				found = true;
				book.available = false;
				console.log(`Checked out ${book.title}`);
				break;
			}
		}
	},

	getAvailableBooks: function () {
		let booklist = [];
		for (let book of this.books) {
			if (book.available) {
				booklist.push(book.title);
			}
		}
		console.log(
			`There are ${booklist.length} titles currently on the shelf: ${booklist.join(", ")}`
		);
	},
};

const newBooks = `[
        {"title": "ABC", "author": "barney"},
    ]`;

function receiveBooks(bookData) {
	console.log(`Adding new books to our shelves!`);
	const booksToAdd = JSON.parse(bookData);
	for (let book of booksToAdd) {
		library.addBook(book.title, book.author);
	}
}

console.log(`There are currently ${library.books.length} books in the library's database.`);
library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
receiveBooks(newBooks);
library.checkOutBook("Eloquent JavaScript");
library.checkOutBook("Grokking the Coding Interview");
library.getAvailableBooks();
