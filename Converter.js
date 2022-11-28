const { response } = require("./my-app/api/New_Routes/Administrator_Routes");

function Convert_Customer(customer) {
    var name_array = customer.customer_name.split(" ");
    new_customer = [{
        id: customer.CID,
        FirstName: name_array[0],
        LastName: name_array[1],
        Level: customer.customer_difficulty
    }];

    return new_customer;
}

function Convert_Trainer(trainer) {
    var name_array = customer.customer_name.split(" ");

    var new_trainer = {

        id: trainer.TID,
        FirstName: name_array[0],
        LastName: name_array[1],
        Style: trainer.trainer_riding_style,
        Email: trainer.trainer_email_address,
        Address: trainer.trainer_address,
        isAdmin: trainer.trainer_administrator
    };

    return new_trainer;
}

let trainers = [];
let new_trainer;
for (var i = 0; i < response.data.length; i++) {
    trainers.push({
        id: trainer.TID,
        FirstName: name_array[0],
        LastName: name_array[1],
        Style: trainer.trainer_riding_style,
        Email: trainer.trainer_email_address,
        Address: trainer.trainer_address,
        isAdmin: trainer.trainer_administrator
    })
}

function Convert_Appointment(appointment) {
    var date_array = appointment.appointment_date.split(":");
    var new_date = date_array[1] + "/" + date_array[2] + "/" + date_array[0];

    var start_time_array = appointment.appointment_start_time.split(":");
    if (start_time_array[0] > 0 &&
        start_time_array < 12) {
        var start_time = start_time_array[0] + "am";
    } else {
        var start_time = (start_time_array[0] - 12) + "pm";
    }

    var end_time_array = appointment.appointment_end_time.split(":");
    if (end_time_array[0] > 0 &&
        end_time_array < 12) {
        var end_time = end_time_array[0] + "am";
    } else {
        var end_time = (end_time_array[0] - 12) + "pm";
    }

    var group = true;
    var trainee = true;
    if (appointment.appointment_group == 0) group = false;
    if (appointment.appointment_TID_2 == 5) trainee = false;

    var reserved = true;
    if (appointment.appointment_reserved == false ||
        appointment.appointment_reserved == undefined) reserved = false;

    new_appointment = {
        appointmentId: appointment.AID,
        date: new_date,
        startTime: start_time,
        endTIme: end_time,
        ridingStyle: appointment.appointment_riding_style,
        ridingLevel: appointment.appointment_difficulty,
        isGroup: group,
        signedUp: reserved,
        remainingSpots: appointment.appointment_group_size,
        hasTrainee: trainee,
        PubicNotes: appointment.appointment_public_notes,
        PrivateNotes: appointment.appointment_private_notes
    }

    return new_appointment;
}

module.exports = {
    Convert_Trainer,
    Convert_Customer,
    Convert_Appointment
}