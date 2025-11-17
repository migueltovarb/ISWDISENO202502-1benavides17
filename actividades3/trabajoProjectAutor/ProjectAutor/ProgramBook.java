package PackageAutor;

public class ProgramBook {

    public static void main(String[] args) {

        Autor autor1 = new Autor("Mario Vargas Llosa", "mvll.contacto@mail.com", 'M');

        Book book1 = new Book("Conversación en La Catedral", autor1, 72.50);
        Book book2 = new Book("La Fiesta del Chivo", autor1, 48.90, 8);

        System.out.println("Catálogo inicial de libros:");
        System.out.println(book1);
        System.out.println(book2);

        // Actualizar precio y cantidad
        book2.setPrice(52.0);
        book2.setQty(12);

        System.out.println("\nInformación después de la actualización:");
        System.out.println(book2);

        // Acceder al autor del libro 1
        System.out.println("\nAutor del primer libro: " + book1.getAuthor().getName());
    }
}
