function scheduleAppointment() {
    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    const successMessage = document.getElementById('appointment-success');

    if (patientName && appointmentDate && appointmentTime) {
        successMessage.innerHTML = `Appointment scheduled for ${patientName} on ${appointmentDate} at ${appointmentTime} is Successfully Completed.`;
        successMessage.style.display = 'block';
    } else {
        successMessage.innerHTML = 'Please fill in all fields.';
        successMessage.style.color = '#ff0000';
        successMessage.style.display = 'block';
    }
}
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}