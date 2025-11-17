

public class BankAccount {
    private String accountId;
    private String owner;
    private int currentBalance;

  
    public BankAccount(String accountId, String owner, int initialAmount) {
        this.accountId = accountId;
        this.owner = owner;
        this.currentBalance = initialAmount;
    }

   
    public BankAccount(String accountId, String owner) {
        this(accountId, owner, 0);
    }

   
    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public int getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(int balance) {
        this.currentBalance = balance;
    }

    
    public int deposit(int amount) {
        currentBalance += amount;
        return currentBalance;
    }


    public int withdraw(int amount) {
        if (amount > currentBalance) {
            System.out.println("Fondos insuficientes para el retiro.");
        } else {
            currentBalance -= amount;
        }
        return currentBalance;
    }

 
    public void sendTo(BankAccount target, int amount) {
        if (amount > currentBalance) {
            System.out.println("No se pudo realizar la transferencia. Saldo insuficiente.");
        } else {
            this.currentBalance -= amount;
            target.deposit(amount);
            System.out.println("Transferencia realizada exitosamente.");
        }
    }

  
    public String toString() {
        return "BankAccount { " +
                "ID='" + accountId + '\'' +
                ", Propietario='" + owner + '\'' +
                ", Saldo=" + currentBalance +
                " }";
    }
}
