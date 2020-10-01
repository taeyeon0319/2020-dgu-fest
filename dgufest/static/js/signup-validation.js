function verifyValues() {
  if (verifyStudentId() && verifyPhone()) return true;
  else return false;
}

function verifyStudentId() {
  var studentId = document.getElementById('id_student_id').value;
  if (studentId.length != 10) {
    alert("10자리의 학번을 입력해주세요.");
    return false;
  } else return true;
}

function verifyPhone() {
  var phoneNumber = document.getElementById('id_phone_number').value;
  if (phoneNumber.length != 11) {
    alert("핸드폰번호를 확인해주세요.");
    return false;
  } else return true;
}