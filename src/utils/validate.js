export const CheckValidate = (email, password) => {
    const isEmailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=])[A-Za-z\d!@#$%^&*()\-_+=]{8,}$/.test(password);
  
    if (!isEmailValid) return "Email address is not valid";
    if (!isPasswordValid) return "Password is not valid";
  
    return null; // Both email and password are valid
  };
  