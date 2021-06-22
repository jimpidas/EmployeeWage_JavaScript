//UC13 
class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;
    
        constructor(...params)
        {
            this.id=params[0];
            this.name=params[1];
            this.salary=params[2];
            this.gender=params[3];
            this.startDate=params[4];
        }
    
        get name(){return this._name; }
        set name(name){
            let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
            if(nameRegex.test(name))
            this._name=name; 
            else throw 'Name is Incorrect!';
        }
            get id() {return this._id;}
            set id(id) {
                let idRegex = RegExp('^[1-9][0-9]*$');
                if(idRegex.test(id))
                this._id = id;
                else throw 'Invalid id!';
            }
            get salary() {return this._salary;}
            set salary(salary) {
                let salaryRegex = RegExp('^[0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*$');
                if(salaryRegex.test(salary))
                this._salary = salary;
                else throw 'Invalid salary!';
            }
            get gender() {return this._gender;}
            set gender(gender) {
                let genderRegex = RegExp('^[M F]{1}$');
                if(genderRegex.test(gender))
                this._gender = gender;
                else throw 'Invalid gender!';
            }
                
        toString(){
            //const options={year:'numeric',month:'long',day:'numeric'};
           // const empDate=!this.startDate === undefined ? "undefined" : this.startDate.toLocalDateString("en-US",options);
            return "id="+this.id +",name="+this.name+",salary="+this.salary+",gender="+this.gender+",start date="+ this.startDate;
        }
    }

    let employeePayrolldata = new EmployeePayrollData(1, "Mark", 60000,"M","2021-05-22");
    console.log("Payroll Data: "+employeePayrolldata.toString());
    
            try{
                employeePayrolldata.name = "james";
                console.log(employeePayrolldata.toString())
                }catch(e){
                console.error(e);
                }

            try{
            employeePayrolldata.id = 2;
                console.log(employeePayrolldata.toString())
            }catch(e){
                console.error(e);
            }
             
            try{
                employeePayrolldata.salary = 40000;
                console.log(employeePayrolldata.toString())
            }catch(e){
                console.error(e);
            }
            try{
                employeePayrolldata.gender = "M";
                console.log(employeePayrolldata.toString())
            }catch(e){
                console.error(e);
            }
                let newemployeePayrollData=new EmployeePayrollData(1,"Terissa",30000,"F","2021-05-22");
                console.log(newemployeePayrollData.toString());
                

