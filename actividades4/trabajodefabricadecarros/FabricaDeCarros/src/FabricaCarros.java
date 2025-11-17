 class Llanta {
    String tamaño, tipo;
    Llanta(String t, String tp){ tamaño=t; tipo=tp; }
    public String toString(){ return tamaño+" "+tipo; }
}

class Chasis {
    double peso; String material;
    Chasis(double p, String m){ peso=p; material=m; }
    public String toString(){ return peso+"kg "+material; }
}

class Carro {
    Llanta llanta; Chasis chasis; String color;
    Carro(Llanta l, Chasis c, String col){ llanta=l; chasis=c; color=col; }
    public String toString(){ return "Carro: "+llanta+", "+chasis+", "+color; }
}

class Planta {
    String nombre; String[] colores;
    Planta(String n, String[] col){ nombre=n; colores=col; }
    Carro fabricar(String t, String tp, double p, String m){
        String col=colores[(int)(Math.random()*colores.length)];
        return new Carro(new Llanta(t,tp), new Chasis(p,m), col);
    }
}

public class FabricaCarros {
    public static void main(String[] args) {
        Planta p1=new Planta("Planta Norte", new String[]{"Rojo","Negro","Blanco"});
        Planta p2=new Planta("Planta Sur", new String[]{"Azul","Gris","Verde"});
        for(int i=1;i<=5;i++) System.out.println(p1.fabricar("15\"","Deportivo",1200,"Acero"));
        for(int i=1;i<=5;i++) System.out.println(p2.fabricar("17\"","SUV",1500,"Aluminio"));
    }
}
