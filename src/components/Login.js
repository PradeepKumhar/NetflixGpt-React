import React, { useRef, useState } from "react";
import { CheckValidate } from "../utils/validate";
import { auth } from "../utils/fireBase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMsg, seterrorMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    CheckValidate(email, password);
    const errorMsg = CheckValidate(email.current.value, password.current.value);
    seterrorMsg(errorMsg);

    if (errorMsg) return;

    if (isSignIn) {
      //  sign in form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMsg("Email and Password are not matching");


  });


    } else {
      // sign up form

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg(errorCode + " -" +  errorMessage);
          
        });
    }
  };
  const toggleSignInForm = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <div className="relative h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Bg-img"
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black absolute rounded-lg w-4/12 z-10 p-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-85 "
      >
        <h1 className="text-white text-4xl mb-4 py-4 font-bold">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            className="w-full h-14 mb-4 px-4 py-2 rounded border  text-white border-gray-700 bg-gray-800 hover:border-white"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          className="w-full h-14 mb-4 px-4 py-2 rounded border  text-white border-gray-700 bg-gray-800 hover:border-white"
          type="text"
          ref={email}
          placeholder="Email Address"
        />
        <input
          className="w-full h-14 mb-4 px-4 py-2 rounded border text-white border-gray-700  bg-gray-800 hover:border-white"
          type="Password"
          ref={password}
          placeholder="Password"
        />

        <p className="text-red-600 font-bold pb-3">{errorMsg}</p>
        <button
          className="w-full h-12 px-4 rounded-lg py-2 bg-red-600 text-white hover:bg-red-800"
          type="submit"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-gray-50 px-2 text-xl  py-6 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {" "}
          {isSignIn
            ? "New to Netflix? Sign up now. "
            : "Already User? Sign In now. "}
        </p>
      </form>
    </div>
  );
}

export default Login;
