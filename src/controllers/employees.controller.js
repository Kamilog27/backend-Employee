
const employeesController={}
const Employee=require("../models/Employee")

employeesController.getEmployees=async(req,res)=>{
     const employees=await Employee.find()
     res.json(employees)
}
employeesController.createEmployee=async(req,res)=>{
    const newEmployee=new Employee(req.body)
    await newEmployee.save()
    res.send({message:'Employee Created'})
}
employeesController.getEmployee=async (req,res)=>{
    console.log(req.params)
    const employee=await Employee.findById(req.params.id)
    res.send(employee)
    
}
employeesController.updateEmployee=async(req,res)=>{
    await Employee.findByIdAndUpdate(req.params.id,req.body)
    res.json({status:"Employee Updated"})
    
}
employeesController.deleteEmployee=async (req,res)=>{
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status:"Employee Deleted"})
}



module.exports=employeesController;