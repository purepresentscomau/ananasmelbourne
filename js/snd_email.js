$(function() {
  $("#submit_btn").on("click", function(){
    var myInputs = ["form_name","form_lastname","form_email", "form_phone", "form_date"];
    var myFormData = [];   //declare an array
    myInputs.forEach(function(element) {
      myFormData.push(document.getElementById(element).value);
    })
    if($("#form_bday_yes").is(':checked')) {
      myFormData.push("bday_yes");
    } else {
      myFormData.push("bday_no");
    }
    if($("#form_booth_yes").is(':checked')) {
      myFormData.push("booth_yes");
    } else {
      myFormData.push("booth_no");
    }
    console.log(myFormData);
    alert("Form Submitted. Thank You.");
  })
})
