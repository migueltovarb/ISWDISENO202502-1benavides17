package PackageAutor;

public class Book {
    private String titulo;
    private Autor escritor;
    private double valor;
    private int stock = 0;

   
    public Book(String titulo, Autor escritor, double valor) {
        this.titulo = titulo;
        this.escritor = escritor;
        this.valor = valor;
    }

 
    public Book(String titulo, Autor escritor, double valor, int stock) {
        this.titulo = titulo;
        this.escritor = escritor;
        this.valor = valor;
        this.stock = stock;
    }

 
    public String getTitulo() {
        return titulo;
    }

    public Autor getEscritor() {
        return escritor;
    }

    public double getValor() {
        return valor;
    }

   
    public void setValor(double nuevoValor) {
        if (nuevoValor > 0) {
            this.valor = nuevoValor;
        } else {
            System.out.println("El precio no puede ser negativo.");
        }
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int cantidad) {
        if (cantidad >= 0) {
            this.stock = cantidad;
        } else {
            System.out.println("La cantidad no puede ser negativa.");
        }
    }

  
    public String toString() {
        return "Libro{" +
                "titulo='" + titulo + '\'' +
                ", escritor=" + escritor +
                ", valor=" + valor +
                ", stock=" + stock +
                '}';
    }
}
