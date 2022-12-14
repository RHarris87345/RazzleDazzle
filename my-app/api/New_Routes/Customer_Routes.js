const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

const async = require('async');
const Get_Users = require('../src/Users/Get_Users');
const Set_Users = require('../src/Users/Set_Users');
const Get_Calendar = require('../src/Calendar/Get_Calendar');
const Set_Appointments = require('../src/Calendar/Appointments/Set_Appointments');

app.post('/Customer', async function(req, res) {
    var CID = req.body.user_id;
    var user = await Get_Users.Get_Customer(CID);
    res.send(user);
})

app.post('/Customer/Set_Personal_Information', function(req, res) {
    var CID = req.body.user_id;
    var customer_name = req.body.user_name;
    var customer_address = req.body.user_address;
    var customer_phone_number = req.body.user_phone_number;
    var customer_email_address = req.body.user_email_address;
    Set_Customer_Name(CID, customer_name);
    Set_Customer_Address(CID, customer_address);
    Set_Customer_Phone_Number(CID, customer_phone_number);
    Set_Customer_Email_Address(CID, customer_email_address);
    res.send("");
})

app.post('/Customer/Set_Name', function(req, res) {
    var CID = req.body.user_id;
    var customer_name = req.body.user_name;
    Set_Users.Set_Customer_Name(CID, customer_name);
    res.send("");
})

app.post('/Customer/Set_Address', function(req, res) {
    var CID = req.body.user_id;
    var customer_address = req.body.user_address;
    Set_Users.Set_Customer_Address(CID, customer_address);
    res.send("");
})

app.post('/Customer/Set_Phone_Number', function(req, res) {
    var CID = req.body.user_id;
    var customer_phone_number = req.body.user_phone_number;
    Set_Users.Set_Customer_Phone_Number(CID, customer_phone_number);
    res.send("");
})

app.post('/Customer/Set_Email_Address', function(req, res) {
    var CID = req.body.user_id;
    var customer_email_address = req.body.user_email_address;
    Set_Users.Set_Customer_Email_Address(CID, customer_email_address);
    res.send("");
})

app.post('/Customer/Set_Emergency_Name', function(req, res) {
    var CID = req.body.user_id;
    var customer_emergency_name = req.body.user_emergency_name;
    Set_Users.Set_Customer_Emergency_Name(CID, customer_emergency_name);
    res.send("");
})

app.post('/Customer/Set_Emergency_Phone_Number', function(req, res) {
    var CID = req.body.user_id;
    var customer_emergency_phone_number = req.body.user_emergency_phone_number;
    Set_Users.Set_Customer_Emergency_Phone_Number(CID, customer_emergency_phone_number);
    res.send("");
})

app.post('/Customer/Set_Phone_Notifications', function(req, res) {
    var CID = req.body.user_id;
    var customer_phone_notifications = req.body.user_phone_notifications;
    Set_Users.Set_Customer_Phone_Notifications(CID, customer_phone_notifications);
    res.send("");
})

app.post('/Customer/Change_Password', function(req, res) {
    var CID = req.body.user_id;
    var old_password = req.body.old_password;
    var new_password = req.body.new_password;
    Set_Users.Set_Customer_Password(CID, old_password, new_password);
    res.send("");
})

app.post('/Customer/Delete_Customer', function(req, res) {
    var CID = req.body.user_id;
    Set_Users.Delete_Customer(CID);
    res.send("");
})

app.post('/Customer/Calendar', async function(req, res) {
    var CID = req.body.user_id;
    var calendar = await Get_Calendar.Get_Customer_Calendar(CID);
    res.send(calendar);
})

app.post('/Customer/Calendar/Week', async function(req, res) {
    var CID = req.body.user_id;
    var date = req.body.date;
    var calendar = await Get_Calendar.Get_Customer_Week_Calendar(CID, date);
    res.send(calendar);
})

app.post('/Customer/Calendar/Day', async function(req, res) {
    var CID = req.body.user_id;
    var date = req.body.date;
    var calendar = await Get_Calendar.Get_Customer_Day_Calendar(CID, date);
    res.send(calendar);
})

app.post('/Customer/Calendar/Reservation', function(req, res) {
    var AID = req.body.appointment_id;
    var CID = req.body.user_id;
    var reserve = req.body.reserve;
    Set_Appointments.Set_Appointment_Reservation(AID, CID, reserve);
    res.send("");
})

module.exports = app;