package PackageInvoiceItem;

public class ProgramBillItem {
    public static void main(String[] args) {
        
      
        BillItem product1 = new BillItem("A101", "Mouse Inalámbrico", 4, 89.99);
        
      
        System.out.println(product1);
        System.out.println("Código: " + product1.getCode());
        System.out.println("Detalle: " + product1.getDescription());
        System.out.println("Unidades: " + product1.getQuantity());
        System.out.println("Costo por unidad: " + product1.getPricePerUnit());
        System.out.println("Valor total: " + product1.calculateTotal());
        
    
        product1.setQuantity(5);
        product1.setPricePerUnit(85.50);
        
        System.out.println("\nDespués de los cambios:");
        System.out.println(product1);
        System.out.println("Nuevo total: " + product1.calculateTotal());
    }
}
