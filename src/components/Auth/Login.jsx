import { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 outline-none bg-transparent border-emerald-600 py-4 px-3 text-xl rounded-full placeholder: text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 outline-none bg-transparent border-emerald-600 py-4 px-3 text-xl rounded-full  placeholder: text-gray-400 mt-5"
            type="password"
            placeholder="Enter password"
          />
          <button className=" outline-none  bg-emerald-600 py-1 px-6 pb-2 text-xl rounded-full placeholder:text-white mt-5 ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
