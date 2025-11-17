

public class Rectangulo {
    private double ancho;
    private double alto;

   
    public Rectangulo() {
        this.ancho = 1.0;
        this.alto = 1.0;
    }


    public Rectangulo(double ancho, double alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    // Getters y setters
    public double getAncho() {
        return ancho;
    }

    public void setAncho(double ancho) {
        this.ancho = ancho;
    }

    public double getAlto() {
        return alto;
    }

    public void setAlto(double alto) {
        this.alto = alto;
    }

    public double getArea() {
        return ancho * alto;
    }

   
    public double getPerimetro() {
        return 2 * (ancho + alto);
    }

    @Override
    public String toString() {
        return "Rectangulo [ancho=" + ancho +
               ", alto=" + alto +
               ", área=" + getArea() +
               ", perímetro=" + getPerimetro() + "]";
    }
}
