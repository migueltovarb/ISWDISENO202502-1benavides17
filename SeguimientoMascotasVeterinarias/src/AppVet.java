import java.time.LocalDate;
import java.util.*;



enum TipoControl { VACUNA, CHEQUEO, DESPARASITACION, OTRO }

final class Dueno {
    private int id;
    private String nombre;
    private String telefono;

    public Dueno(int id, String nombre, String telefono) {
        setId(id);
        setNombre(nombre);
        setTelefono(telefono);
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) {
        String v = Objects.requireNonNull(nombre, "nombre no puede ser nulo").trim();
        if (v.isEmpty()) throw new IllegalArgumentException("nombre no puede estar vacío");
        this.nombre = v;
    }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) {
        String v = Objects.requireNonNull(telefono, "teléfono no puede ser nulo").trim();
        if (v.isEmpty()) throw new IllegalArgumentException("teléfono no puede estar vacío");
        this.telefono = v;
    }

     public String toString() {
        return "Dueno{id=%d, nombre='%s', tel='%s'}".formatted(id, nombre, telefono);
    }
}

final class ControlVeterinario {
    private LocalDate fecha;
    private TipoControl tipoControl;
    private String observaciones;

    public ControlVeterinario(LocalDate fecha, TipoControl tipoControl, String observaciones) {
        setFecha(fecha);
        setTipoControl(tipoControl);
        setObservaciones(observaciones);
    }

    public LocalDate getFecha() { return fecha; }
    public void setFecha(LocalDate fecha) {
        this.fecha = Objects.requireNonNull(fecha, "fecha no puede ser nula");
    }

    public TipoControl getTipoControl() { return tipoControl; }
    public void setTipoControl(TipoControl tipoControl) {
        this.tipoControl = Objects.requireNonNull(tipoControl, "tipo de control no puede ser nulo");
    }

    public String getObservaciones() { return observaciones; }
    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones == null ? "" : observaciones.trim();
    }

    public String toString() {
        return "Control{fecha=%s, tipo=%s, obs='%s'}"
                .formatted(fecha, tipoControl, observaciones);
    }
}

final class Mascota {
    private String nombre;
    private String especie;
    private int edad;
    private Dueno dueno;
    private final List<ControlVeterinario> controles = new ArrayList<>();

    public Mascota(String nombre, String especie, int edad, Dueno dueno) {
        setNombre(nombre);
        setEspecie(especie);
        setEdad(edad);
        setDueno(dueno);
    }

    public String getNombre() { return nombre; }
   
    public void setNombre(String nNombre) {
        String v = Objects.requireNonNull(nNombre, "nombre no puede ser nulo").trim();
        if (v.isEmpty()) throw new IllegalArgumentException("nombre no puede estar vacío");
        this.nombre = v;
    }

    public String getEspecie() { return especie; }
    public void setEspecie(String especie) {
        String v = Objects.requireNonNull(especie, "especie no puede ser nula").trim();
        if (v.isEmpty()) throw new IllegalArgumentException("especie no puede estar vacía");
        this.especie = v;
    }

    public int getEdad() { return edad; }
    public void setEdad(int edad) {
        if (edad < 0) throw new IllegalArgumentException("edad no puede ser negativa");
        this.edad = edad;
    }

    public Dueno getDueno() { return dueno; }
    public void setDueno(Dueno dueno) {
        this.dueno = Objects.requireNonNull(dueno, "dueño no puede ser nulo");
    }

    public List<ControlVeterinario> getControles() {
        return Collections.unmodifiableList(controles);
    }
    public void agregarControl(ControlVeterinario c) {
        controles.add(Objects.requireNonNull(c));
    }

     public String toString() {
        return "Mascota{nombre='%s', especie='%s', edad=%d, dueno=%s}"
                .formatted(nombre, especie, edad, dueno.getNombre());
    }
}


final class ClinicaVeterinaria {
    private final List<Mascota> pacientes = new ArrayList<>();
    private final List<Dueno> duenos = new ArrayList<>();
    private int seqDueno = 1;

    public Dueno registrarDueno(String nombre, String telefono) {
        Dueno d = new Dueno(seqDueno++, nombre, telefono);
        duenos.add(d);
        return d;
    }

    public Mascota registrarMascota(Dueno dueno, String nombre, String especie, int edad) {
        
        boolean existe = pacientes.stream().anyMatch(m ->
                m.getDueno().getId() == dueno.getId() &&
                m.getNombre().equalsIgnoreCase(nombre));
        if (existe) throw new IllegalArgumentException("Mascota duplicada para ese dueño");
        Mascota m = new Mascota(nombre, especie, edad, dueno);
        pacientes.add(m);
        return m;
    }

    public ControlVeterinario registrarControl(Mascota mascota, LocalDate fecha, TipoControl tipo, String obs) {
        if (!pacientes.contains(mascota))
            throw new NoSuchElementException("La mascota no está registrada");
        ControlVeterinario c = new ControlVeterinario(fecha, tipo, obs);
        mascota.agregarControl(c);
        return c;
    }

    public List<Mascota> getPacientes() { return Collections.unmodifiableList(pacientes); }
    public List<Dueno> getDuenos()     { return Collections.unmodifiableList(duenos); }

    public List<ControlVeterinario> historial(Mascota mascota) {
        if (!pacientes.contains(mascota)) throw new NoSuchElementException("Mascota no existe");
        List<ControlVeterinario> r = new ArrayList<>(mascota.getControles());
        r.sort(Comparator.comparing(ControlVeterinario::getFecha));
        return r;
    }

    public String generarResumen(Mascota m) {
        return "Resumen -> nombre='%s', especie='%s', controles=%d"
                .formatted(m.getNombre(), m.getEspecie(), m.getControles().size());
    }
}

public class AppVet {
    public static void main(String[] args) {
        ClinicaVeterinaria cl = new ClinicaVeterinaria();

        Dueno ana  = cl.registrarDueno("Ana",  "555-1000");
        Dueno luis = cl.registrarDueno("Luis", "555-2000");

        Mascota luna  = cl.registrarMascota(ana,  "Luna",  "Perro", 4);
        Mascota michi = cl.registrarMascota(luis, "Michi", "Gato",  2);

        cl.registrarControl(luna,  LocalDate.of(2025, 3, 10), TipoControl.VACUNA, "Rabia");
        cl.registrarControl(luna,  LocalDate.of(2025, 6,  1), TipoControl.CHEQUEO, "Control general");
        cl.registrarControl(michi, LocalDate.of(2025, 5,  5), TipoControl.DESPARASITACION, "Interna");

        System.out.println("Pacientes: " + cl.getPacientes());
        System.out.println("Historial Luna: " + cl.historial(luna));
        System.out.println(cl.generarResumen(luna));
    }
}
