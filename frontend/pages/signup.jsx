import Link from "next/link";
import axios from "axios";
import { useState, useRef } from "react";

const API_Endpoint = "http://localhost:5000/api/v1/users/signup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState({ message: "" });

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const isInvalid =
    name === "" || email === "" || password === "" || passwordConfirm === "";

  const handleRoleChange = (e) => {
    e.target.checked ? setRole("expert") : setRole("user");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_Endpoint, {
        name,
        email,
        password,
        passwordConfirm,
        role,
      });
    } catch (err) {
      setError({ message: err.response.data.message });
    }
  };

  return (
    <div className="container mt-20 mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full ">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-50 border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-center my-6">
                <h6 className="text-indigo-600 text-xl font-bold">
                  Sign up with credentials
                </h6>
              </div>
              <form>
                <div className="relative w-full mb-3 ">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Max"
                    ref={nameRef}
                    onChange={() => setName(nameRef.current.value)}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="madmax@example.com"
                    ref={emailRef}
                    onChange={() => setEmail(emailRef.current.value)}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="*******"
                    ref={passwordRef}
                    onChange={() => setPassword(passwordRef.current.value)}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                    Password Confirm
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="*******"
                    ref={passwordConfirmRef}
                    onChange={() =>
                      setPasswordConfirm(passwordConfirmRef.current.value)
                    }
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="instructorCheck"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                      onChange={handleRoleChange}
                    />
                    <span className="ml-2 text-sm font-semibold text-gray-700">
                      Become an instructor
                    </span>
                  </label>
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-indigo-600 text-white active:bg-indigo-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full disabled:bg-indigo-200 disabled:cursor-not-allowed"
                    type="button"
                    disabled={isInvalid}
                    onClick={handleRegister}
                  >
                    Sign up
                  </button>
                </div>
                {error && (
                  <div className="text-red-500 text-sm mt-2">
                    {error.message}
                  </div>
                )}
              </form>
            </div>
            <div className="rounded-t mb-0 px-6 pb-6">
              <hr className="mb-6 border-b-1 border-gray-400 w-4/5 mx-auto" />
              <div className="text-gray-500 text-center mb-3 font-bold">
                <small>Or sign up with</small>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src="/linkedin-icon.svg"
                  />
                  LinkedIn
                </button>
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                >
                  <img alt="..." className="w-5 mr-1" src="/google-icon.svg" />
                  Google
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-6">
            <div className="w-full text-center">
              <small>
                <Link href="/login">
                  <a className="text-gray-300 hover:text-indigo-400">
                    Already have an account? Log in instead
                  </a>
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
