let employees = [];

function Employee (name,jobTitle,salary,status = "Full Time"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status 
    this.printEmployeeForm = function(){
        console.log(this.name,this.jobTitle,this.salary,this.status)
    }  
};

let employee1 = new Employee ("Justin","Sales Associate", "$50,000");
let employee2 = new Employee ("Rick","Customs Agent", "$75,000","Part Time");
let employee3 = new Employee ("Max","Data Analyst","$80,000");

let addToArray = employees.push(employee1,employee2,employee3);

employee1.printEmployeeForm()