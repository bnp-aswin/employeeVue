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
});