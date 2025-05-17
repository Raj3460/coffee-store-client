import React, { use } from "react";
import { AuthContext } from "../Contex/AuthContext";

const SignIn = () => {
  const { createUserSignIn } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // const fromData = new FormData(form);

    // sign in with firebase
    createUserSignIn(email, password)
      .then((result) => {
        console.log(result.user);

        const userInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // set time to the data base
        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after update patch ", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100  max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In</h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4"> Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
