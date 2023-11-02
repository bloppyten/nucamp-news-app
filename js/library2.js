class Book {
	constructor(title, author, available = true) {
		this.title = title;
		this.author = author;
		this.available = available;
	}
}

const library = {
	// Empty array to store books in
	books: [],

	// Method to add new book to library when patron donates a book
	addBook(title, author) {
		// create child class of Book
		const book = new Book(title, author);
		// push donated book into library array
		this.books.push(book);
		// log title and author of book that has been donated
		console.log(`A new book titled ${book.title} by ${book.author} has been added to the library.`);
	},

	// Method to check out a book requested by title, check availabilty. Once checked out mark unavailable
	checkOutBook(title) {
		// If statement checking if title matches existing books and is available
		if (book.title === title && available) {
            //Change availability of book
            found = true;
			book.available = false;
            //Log that book has been checked out
			console.log(`${book.title} is currently avaiable.`);
            // Stop loop
            break;
		}
	},

    // Method to get a list of all currently available books
    getAvailableBooks() {
        // Create empty array to store all currently available books
        let bookList = [];
        // For of loop for all books currently in library
        for (let book of this.books) {
        // If book is currently available push book title to to book list array
            if (book.available) {
                bookList.push(book.title);
            }
        }
        //Log book list to console
        console.log(`Here is the currently availabe books in our library ${bookList.join(", ")}`);
    }
};


// Create JSON string to store data about a set of books that the library recently ordered and will be receiving 
const newBooks = `[
    "title": "null",
    "author": "null"
]`

// Create function to receive books that parses JSON data and then uses library.addBook()
function receiveBooks(bookData) {
    // create new variable to store JSON data
    const booksToAdd = JSON.parse(bookData);
    // create for of loop for all new books
    for (let book of booksToAdd) {
        // add each new title and author to the addBook function
        library.addBook(book.title, book.author);
    }

}

// Try/Catch in check out method
checkOutBook: function(title) {
    try {
        let found = false;
        for (let book of this.books) {
            if (book.title === title && book.available) {
                found = true;
                book.available = false;
                console.log(`checked out: ${book.title}`)
                break;
            }
        }
        if(!found) throw new Error (`The book: "${title}" was not found or already checked out.`);
    } catch(error) {
        console.error(error.message);
    }
}