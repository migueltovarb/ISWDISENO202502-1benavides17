package PackageAutor;

public class ProgramAutor {
    
    public static void main(String[] args) {

        Autor autor1 = new Autor("Julio Cortázar", "cortazar.contacto@mail.com", 'M');

        System.out.println("Información inicial del autor:");
        System.out.println(autor1);

  
        autor1.setEmail("julio.cortazar.oficial@mail.com");

        System.out.println("\nEmail actualizado correctamente:");
        System.out.println(autor1);

        
        System.out.println("\nDatos individuales del autor:");
        System.out.println("Nombre: " + autor1.getName());
        System.out.println("Correo: " + autor1.getEmail());
        System.out.println("Género: " + autor1.getGender());
    }
}
