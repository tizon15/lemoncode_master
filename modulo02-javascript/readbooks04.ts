interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((book) => book.title === titleToSearch && book.isRead);
  return book ? true : false;
}

console.log('The book was read', isBookRead(books, 'Devastación')); // true
console.log('The book was read', isBookRead(books, 'Canción de hielo y fuego')); // false
console.log('The book was read', isBookRead(books, 'Los Pilares de la Tierra')); // false
console.log('The book was read', isBookRead(books, 'Harry Potter y la piedra filosofal')); // false
