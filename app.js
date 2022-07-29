class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(newMascota) {
    this.mascotas.push(newMascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }

  getBookName() {
    return this.libros.map((el) => el.nombre);
  }
}

const usuario1 = new Usuario(
  "Emiliano",
  "Silva",
  [{ nombre: "El Psicoanalista", autor: "John Katzenbach" }],
  ["Gato"]
);

console.log(usuario1.getFullName());
usuario1.addMascota("Perro");
console.log(usuario1.countMascotas());
usuario1.addBook("El Señor De Los Anillos", "John Ronald Reuel Tolkien");
console.log(usuario1.getBookName());
