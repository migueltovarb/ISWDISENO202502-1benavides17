

public class Autor {
    private String nombre;
    private String correo;
    private char sexo;


    public Autor(String nombre, String correo, char sexo) {
        this.nombre = nombre;
        this.correo = correo;
        this.sexo = sexo;
    }

  
    public String getNombre() {
        return nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public char getSexo() {
        return sexo;
    }

  
    public void setCorreo(String nuevoCorreo) {
        if (nuevoCorreo.contains("@")) {
            this.correo = nuevoCorreo;
        } else {
            System.out.println("Correo inválido, no se actualizó.");
        }
    }

  
    public String toString() {
        return "Autor{" +
                "nombre='" + nombre + '\'' +
                ", correo='" + correo + '\'' +
                ", sexo=" + sexo +
                '}';
    }
}
