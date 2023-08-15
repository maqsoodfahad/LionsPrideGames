import http from "../../services/http";
const phoneUtil =
  require("google-libphonenumber").PhoneNumberUtil.getInstance();
function validatePhoneNumber(phoneNumber) {
  try {
    const parsedNumber = phoneUtil.parseAndKeepRawInput(phoneNumber);
    return phoneUtil.isValidNumber(parsedNumber);
  } catch (error) {
    return false;
  }
}
async function validation(value, stepCount, stepCountSec) {
  let error = {};

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).*$/;
  const digitPattern = /\d/;
  const letterPattern = /[a-zA-Z]/;
  const specialCharPattern = /[\W_]/;

  const phonePattern = /^\+\d{1,2}\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  switch (stepCount) {
    case 1:
      error = {};
      if (value.email === "") {
        error.email = "Please enter a valid email";
      } else if (!emailPattern.test(value.email)) {
        error.email = "Please enter a valid email";
      } else {
        try {
          await http.post({
            url: "v1/checkemail",
            body: { email: value.email },
          });
        } catch (err) {
          error.email = err?.response?.data?.message;
        }
      }
      break;
    case 2:
      error = {};
      if (value.password === "" || value.password.length < 6) {
        error.password = "Your password must be at least 6 characters long";
      } else if (!letterPattern.test(value.password)) {
        error.password = "Your password must include at least one letter";
      } else if (!digitPattern.test(value.password)) {
        error.password = "Your password must include at least one digit";
      } else if (!specialCharPattern.test(value.password)) {
        error.password =
          "Your password must include at least one special character (!, %, #)";
      } else if (!passwordPattern.test(value.password)) {
        error.password =
          "Your password must be at least 6 characters long, include at least one letter, one digit, and one special character (!, %, #)";
      } else if (value.confirm_password !== value.password) {
        error.password = "The passwords do not match";
      }
      break;
    case 3:
      error = {};
      switch (stepCountSec) {
        case 1:
          if (value.phone === "") {
            error.phone = "Please enter a valid phone number";
          } else if (!validatePhoneNumber(value.phone, value.countryCode)) {
            error.phone = "Please enter a valid phone number";
          } else {
            try {
              await http.post({
                url: "v1/check-phonenumber",
                body: { phone: value.phone },
              });
            } catch (err) {
              error.phone = err?.response?.data?.message;
            }
          }
          break;
        case 2:
          if (value.username === "") {
            error.username = "Please enter a valid username";
          } else if (value.username.length > 30) {
            error.username = "Username cannot exceed more than 30 characters ";
          } else {
            try {
              await http.post({
                url: "v1/check-username",
                body: { username: value.username },
              });
            } catch (err) {
              error.username = err?.response?.data?.message;
            }
          }

          break;
        case 3:
          const today = new Date();
          const birthday = new Date(value.birthday);
          if (value.birthday === "") {
            error.birthday = "Check the date format";
          } else if (birthday > today) {
            error.birthday = "Check the date format";
          }
        default:
          break;
      }
      break;

    default:
      break;
  }
  return error;
}

export default validation;
