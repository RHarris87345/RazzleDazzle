const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

const async = require('async');
const {
    Get_Customer,
    Get_All_Customers,
    Get_Mini_Customers,
    Get_Trainer,
    Get_All_Trainers,
    Get_Mini_Trainers
} = require('../src/Users/Get_Users');
const {
    Set_Customer_Difficulty,
    Set_Trainer_Name,
    Set_Trainer_Address,
    Set_Trainer_Phone_Number,
    Set_Trainer_Email_Address,
    Set_Trainer_Emergency_Name,
    Set_Trainer_Emergency_Phone_Number,
    Set_Trainer_Riding_Style,
    Set_Trainer_Administrator
} = require('../src/Users/Set_Users');

const {
    Set_Appointment_Name,
    Set_Appointment_Date,
    Set_Appointment_Start_Time,
    Set_Appointment_End_Time,
    Set_Appointment_Riding_Style,
    Set_Appointment_Difficulty,
    Set_Appointment_Description,
    Set_Appointment_Public_Notes,
    Set_Appointment_Private_Notes,
    Set_Appointment_Group,
    Set_Appointment_Group_Size,
    Set_Appointment_TID_1,
    Set_Appointment_TID_2,
    Delete_Appointment
} = require('../src/Calendar/Appointments/Set_Appointments')
const { Get_Administrator_Calendar } = require('../src/Calendar/Get_Calendar');

/**************************************************************************/
// Admin
/**************************************************************************/

app.post('/Admin', async function(req, res) {
    var user = await Get_Trainer();
    res.send(user);
})

app.put('/Admin/Set_Name', function(req, res) {
    var TID = req.body.user_id;
    var trainer_name = req.body.user_name;
    Set_Trainer_Name(TID, trainer_name);
})

app.put('/Admin/Set_Address', function(req, res) {
    var TID = req.body.user_id;
    var trainer_address = req.body.user_address;
    Set_Trainer_Address(TID, trainer_address);
})

app.put('/Admin/Set_Phone_Number', function(req, res) {
    var TID = req.body.user_id;
    var trainer_phone_number = req.body.user_phone_number;
    Set_Trainer_Phone_Number(TID, trainer_phone_number);
})

app.put('/Admin/Set_Email_Address', function(req, res) {
    var TID = req.body.user_id;
    var trainer_email_address = req.body.user_email_address;
    Set_Trainer_Email_Address(TID, trainer_email_address);
})

app.put('/Admin/Set_Emergency_Name', function(req, res) {
    var TID = req.body.user_id;
    var trainer_emergency_name = req.body.user_emergency_name;
    Set_Trainer_Emergency_Name(TID, trainer_emergency_name);
})

app.put('/Admin/Set_Emergency_Phone_Number', function(req, res) {
    var TID = req.body.user_id;
    var trainer_emergency_phone_number = req.body.user_emergency_phone_number;
    Set_Trainer_Emergency_Phone_Number(TID, trainer_emergency_phone_number);
})

app.put('/Admin/Set_Riding_Style', function(req, res) {
    var TID = req.body.user_id;
    var trainer_riding_style = req.body.user_riding_style;
    Set_Trainer_Riding_Style(TID, trainer_riding_style);
})

/**************************************************************************/
// Calendar management
/**************************************************************************/

app.get('/Admin/Calendar', async function(req, res) {
    var calendar = await Get_Administrator_Calendar();
    res.send(calendar);
})

app.get('/Admin/Calendar/Get_Customers', async function(req, res) {
    var customers = await Get_Mini_Customers;
    res.send(customers);
})

app.get('/Admin/Calendar/Get_Trainers', async function(req, res) {
    var trainers = await Get_Mini_Trainers;
    res.send(trainers);
})

app.put('/Admin/Calendar/Set_Name', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_name = req.body.appointment_name;
    Set_Appointment_Name(AID, appointment_name);
})

app.put('/Admin/Calendar/Set_Date', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_date = req.body.appointment_date;
    Set_Appointment_Date(AID, appointment_date);
})

app.put('/Admin/Calendar/Set_Start_Time', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_start_time = req.body.appointment_start_time;
    Set_Appointment_Start_Time(AID, appointment_start_time);
})

app.put('/Admin/Calendar/Set_End_Time', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_end_time = req.body.appointment_end_time;
    Set_Appointment_End_Time(AID, appointment_end_time);
})

app.put('/Admin/Calendar/Set_Riding_Style', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_riding_style = req.body.appointment_riding_style;
    Set_Appointment_Riding_Style(AID, appointment_riding_style);
})

app.put('/Admin/Calendar/Set_Difficulty', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_difficulty = req.body.appointment_difficulty;
    Set_Appointment_Difficulty(AID, appointment_difficulty);
})

app.put('/Admin/Calendar/Set_Description', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_description = req.body.appointment_description;
    Set_Appointment_Description(AID, appointment_description);
})

app.put('/Admin/Calendar/Set_Public_Notes', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_public_notes = req.body.appointment_public_notes;
    Set_Appointment_Public_Notes(AID, appointment_public_notes);
})

app.put('/Admin/Calendar/Set_Private_Notes', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_private_notes = req.body.appointment_private_notes;
    Set_Appointment_Private_Notes(AID, appointment_private_notes);
})

app.put('/Admin/Calendar/Set_Group', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_group = req.body.appointment_group;
    Set_Appointment_Group(AID, appointment_group);
})

app.put('/Admin/Calendar/Set_Group_Size', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_group_size = req.body.appointment_name;
    Set_Appointment_Group_Size(AID, appointment_group_size);
})

app.put('/Admin/Calendar/Set_TID_1', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_TID_1 = req.body.appointment_name;
    Set_Appointment_TID_1(AID, appointment_TID_1);
})

app.put('/Admin/Calendar/Set_TID_2', function(req, res) {
    var AID = req.body.appointment_id;
    var appointment_TID_2 = req.body.appointment_TID_2;
    Set_Appointment_TID_2(AID, appointment_TID_2);
})

app.put('/Admin/Calendar/Delete_Appointment', function(req, res) {
    var AID = req.body.appointment_id;
    Delete_Appointment(AID);
})

/**************************************************************************/
// Customer management
/**************************************************************************/

app.get('/Admin/Customer', async function(req, res) {
    var customers = await Get_All_Customers();
    res.send(customers);
})

app.put('/Admin/Customer/Set_Difficulty', function(req, res) {
    var CID = req.body.user_id;
    var customer_difficulty = req.body.user_difficulty;
    Set_Customer_Difficulty(CID, customer_difficulty);
})

/**************************************************************************/
// Trainer management
/**************************************************************************/

app.get('/Admin/Trainer', async function(req, res) {
    var trainers = await Get_All_Trainers();
    res.send(trainers);
})

app.put('/Admin/Trainer/Set_Riding_Style', function(req, res) {
    var TID = req.body.user_id;
    var trainer_riding_style = req.body.user_riding_style;
    Set_Trainer_Riding_Style(TID, trainer_riding_style);
})

app.put('/Admin/Trainer/Set_Trainer_Administrator', function(req, res) {
    var TID = req.body.user_id;
    var administrator = req.body.user_administrator;
    Set_Trainer_Administrator(TID, administrator);
})

module.exports = app;