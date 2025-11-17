

public class ProgramAcoount {
    private String id;
    private String name;
    private int balance;

 
    public ProgramAcoount() {
        this.id = "SIN-ID";
        this.name = "Usuario Desconocido";
        this.balance = 0;
    }

   
    public ProgramAcoount(String id, String name, int balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

   
    public ProgramAcoount(String id, String name) {
        this(id, name, 0);
    }

    public int credit(int amount) {
        balance += amount;
        return balance;
    }

    public int debit(int amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Fondos insuficientes para retirar " + amount);
        }
        return balance;
    }

    public int transferTo(ProgramAcoount other, int amount) {
        if (amount <= balance) {
            balance -= amount;
            other.credit(amount);
        } else {
            System.out.println("No se pudo transferir: saldo insuficiente.");
        }
        return balance;
    }

    public String toString() {
        return "Cuenta[id=" + id + ", nombre=" + name + ", saldo=" + balance + "]";
    }
}
