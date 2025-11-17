

public class BillItem {

    private String code;
    private String description;
    private int quantity;
    private double pricePerUnit;

    // Constructor principal
    public BillItem(String code, String description, int quantity, double pricePerUnit) {
        this.code = code;
        this.description = description;
        this.quantity = quantity;
        this.pricePerUnit = pricePerUnit;
    }

    // --- Getters y Setters ---
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
     
        if (quantity >= 0) {
            this.quantity = quantity;
        }
    }

    public double getPricePerUnit() {
        return pricePerUnit;
    }

    public void setPricePerUnit(double pricePerUnit) {
    
        if (pricePerUnit >= 0) {
            this.pricePerUnit = pricePerUnit;
        }
    }

  
    public double calculateTotal() {
        return quantity * pricePerUnit;
    }


    public String toString() {
        return "BillItem {" +
                "code='" + code + '\'' +
                ", description='" + description + '\'' +
                ", quantity=" + quantity +
                ", pricePerUnit=" + pricePerUnit +
                '}';
    }
}
