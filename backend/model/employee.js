const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required']
    },
    designation:{
        type:String,
        required:[true, 'designation is required']
    },
    salary:{
        type:String,
        required:[true, 'salary is required']
    },
    email:{
        type:String,
        required:[true, 'email is required']
    },
    phone:{
        type:String,
        required:[true, 'phone is required']
    },
})

const employeeModel = mongoose.model('EmployeeList',employeeSchema);

module.exports = employeeModel;