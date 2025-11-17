import java.util.ArrayList;
import java.util.List;


enum Color {
    AMARILLO,
    AZUL,
    ROJO
}


enum Material {
    ACERO,
    ALUMINIO
}


class Llanta {
    private float tamano;
    private String tipo;

    public Llanta(float tamano, String tipo) {
        this.tamano = tamano;
        this.tipo = tipo;
    }

    public float getTamano() {
        return tamano;
    }

    public void setTamano(float tamano) {
        this.tamano = tamano;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}

// Clase Chasis
class Chasis {
    private float peso;
    private Material material;

    public Chasis(float peso, Material material) {
        this.peso = peso;
        this.material = material;
    }

    public float getPeso() {
        return peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    public Material getMaterial() {
        return material;
    }

    public void setMaterial(Material material) {
        this.material = material;
    }
}

// Clase Carro
class Carro {
    private List<Llanta> llantas;
    private Chasis chasis;
    private Color color;

    public Carro(List<Llanta> llantas, Chasis chasis, Color color) {
        this.llantas = llantas;
        this.chasis = chasis;
        this.color = color;
    }

    public List<Llanta> getLlantas() {
        return llantas;
    }

    public void setLlantas(List<Llanta> llantas) {
        this.llantas = llantas;
    }

    public Chasis getChasis() {
        return chasis;
    }

    public void setChasis(Chasis chasis) {
        this.chasis = chasis;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }
}

// Clase Planta
class Planta {
    private String nombre;
    private Chasis tipoChasis;
    private Llanta tipoLlanta;
    private Color color;

    public Planta(String nombre, Chasis tipoChasis, Llanta tipoLlanta, Color color) {
        this.nombre = nombre;
        this.tipoChasis = tipoChasis;
        this.tipoLlanta = tipoLlanta;
        this.color = color;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Chasis getTipoChasis() {
        return tipoChasis;
    }

    public void setTipoChasis(Chasis tipoChasis) {
        this.tipoChasis = tipoChasis;
    }

    public Llanta getTipoLlanta() {
        return tipoLlanta;
    }

    public void setTipoLlanta(Llanta tipoLlanta) {
        this.tipoLlanta = tipoLlanta;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    // Método para fabricar un carro
    public Carro fabricar() {
        List<Llanta> llantasDelCarro = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            llantasDelCarro.add(tipoLlanta);
        }
        return new Carro(llantasDelCarro, tipoChasis, color);
    }
}

// Clase Fabrica
class Fabrica {
    private String nombre;
    private List<Planta> plantas;

    public Fabrica(String nombre, List<Planta> plantas) {
        this.nombre = nombre;
        this.plantas = plantas;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<Planta> getPlantas() {
        return plantas;
    }

    public void setPlantas(List<Planta> plantas) {
        this.plantas = plantas;
    }
}

// Clase principal
public class Main {
    public static void main(String[] args) {
        // Crear un chasis y una llanta modelo
        Chasis chasisModelo = new Chasis(500f, Material.ACERO);
        Llanta llantaModelo = new Llanta(17f, "Pista");

        // Crear una planta de carros
        Planta miPlanta = new Planta("Planta Pasto", chasisModelo, llantaModelo, Color.AZUL);

        // Crear listado de plantas
        List<Planta> listadoPlantas = new ArrayList<>();
        listadoPlantas.add(miPlanta);

        // Crear fábrica
        Fabrica miFabrica = new Fabrica("Chevrolet", listadoPlantas);

        // Fabricar un carro desde la planta
        Carro miNuevoCarro = miPlanta.fabricar();

        // Mostrar información del carro fabricado
        System.out.println("Carro fabricado en la planta: " + miPlanta.getNombre());
        System.out.println("Color del carro: " + miNuevoCarro.getColor());
        System.out.println("Chasis material: " + miNuevoCarro.getChasis().getMaterial());
        System.out.println("Número de llantas: " + miNuevoCarro.getLlantas().size());
    }
}
