// Creamos la interfaz libro con los parametros del objeto y el tipo de cada uno
interface Book {
  title: string;
  isRead: boolean;
}

// Lista de los libros
const books: Book[] = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

/**
 * Creamos una funcion al que se le pasan dos parámetros, la lista de libros y el título a buscar
 * por medio de la funcion find del Array prototype comparamos si el título que hemos pasado por parámetro
 * corresponde al títutlo de alguno de los libros de la lista.
 * Si es así y encima ese libro está leido devolvemos un true, si no es así false
 * @param books
 * @param titleToSearch
 * @returns
 */
function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((book) => book.title === titleToSearch && book.isRead);
  return book ? true : false;
}

console.log('The book was read', isBookRead(books, 'Devastación')); // true
console.log('The book was read', isBookRead(books, 'Canción de hielo y fuego')); // false
console.log('The book was read', isBookRead(books, 'Los Pilares de la Tierra')); // false
console.log('The book was read', isBookRead(books, 'Harry Potter y la piedra filosofal')); // true
