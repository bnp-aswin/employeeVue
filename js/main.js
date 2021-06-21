let employeeDetails = new Vue({
    el: "#employees-details",
    data: {
        employee: {},
        employees: [],
        firstName: "",
        lastName: "",
        employeeCode: "",
        dateofBirth: "",
        designation: "",
        btnStatus: true,
        disableInput: false,
        selectedRow: null,
    },
    methods: {
          clearField() {
            this.firstName = "";
            this.lastName = "";
            this.employeeCode = "";
            this.dateofBirth = "";
            this.designation = "";
            this.employee = {};
        },
            addEmployee() {
            this.employee = {
                first_name: this.firstName,
                last_name: this.lastName,
                employee_code: this.employeeCode,
                dateof_birth: this.dateofBirth,
                designation: this.designation,
            };
            this.employees.push(this.employee);
            employeeDetails.clearField();
        },
         checkEmployee() {
            console.log(!this.firstName);
            if (
                !this.firstName ||
                !this.lastName ||
                !this.employeeCode ||
                !this.dateofBirth ||
                !this.designation
            ) {
                alert("Please fill all fields");
                return;
            }
            if (this.employees.length !== 0) {
                let employeesId = [];
                for (let index = 0; index <= this.employees.length - 1;index++) {
                    employeesId.push(this.employees[index].employee_code);
                }
                if (employeesId.includes(this.employeeCode, 0)) {
                    alert("Emplopyee Id already Exist");
                    employeeDetails.clearField();
                } else {
                    employeeDetails.addEmployee();
                    employeeDetails.clearField();
                }
            } else {
                employeeDetails.addEmployee();
                employeeDetails.clearField();
            }
        },
    },
});