

public class Employee {

    private int employeeId;
    private String givenName;
    private String familyName;
    private int monthlySalary;

    public Employee(int employeeId, String givenName, String familyName, int monthlySalary) {
        this.employeeId = employeeId;
        this.givenName = givenName;
        this.familyName = familyName;
        this.monthlySalary = monthlySalary;
    }

    // Getters y Setters
    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public String getGivenName() {
        return givenName;
    }

    public void setGivenName(String givenName) {
        this.givenName = givenName;
    }

    public String getFamilyName() {
        return familyName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }

    public int getMonthlySalary() {
        return monthlySalary;
    }

    public void setMonthlySalary(int monthlySalary) {
        this.monthlySalary = monthlySalary;
    }

 
    public String getFullName() {
        return givenName + " " + familyName;
    }

    public int computeYearlySalary() {
        return monthlySalary * 12;
    }

    public int increaseSalary(int percent) {
        int bonus = (monthlySalary * percent) / 100;
        monthlySalary = monthlySalary + bonus;
        return monthlySalary;
    }

    @Override
    public String toString() {
        return "Employee{id=" + employeeId + 
               ", name='" + getFullName() + '\'' +
               ", salary=" + monthlySalary + "}";
    }
}
