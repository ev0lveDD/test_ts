import Image from "next/image";

export default function Home() {

  class Department {
   // private id: string;
   // private name: string;
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
      
    }

    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }

  const accounting = new Department('d1', 'Accounting');
 
  function showData() {
    accounting.describe();
    accounting.addEmployee('Max');
    accounting.addEmployee('Manu');
    accounting.addEmployee('Anna');

    accounting.printEmployeeInformation();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
         {showData()}
      </main>
      ,

    </div>
  );
}
