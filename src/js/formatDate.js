const formatDate = (name, phone, training, date, email) => {
  //Change date format
  const dateValue = new Date(date.value);
  const formattedDate = `${dateValue.getDate().toString().padStart(2, '0')}-${(
    dateValue.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-${dateValue.getFullYear()}`;

  //Make an object to send email
  const formObj = {
    name: name.value,
    phone: phone.value,
    training: training.value,
    date: formattedDate,
    email: email.value,
  };

  return formObj;
};

export default formatDate;
