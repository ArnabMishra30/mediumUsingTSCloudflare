import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "@arnabmishra/medium-common";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setpostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="h-screen flex justify-center flex-col bg-gray-50">
      {/* {JSON.stringify(postInputs)} */}
      <div className="flex justify-center">
        <div>
          <div className="text-center px-10" /* added this class by mine */>
            <div className="text-4xl font-extrabold">Create an account</div>
            <div className="text-slate-400 mt-2">
              {type === "signin" ? "Don't have an account" : "Already have an account?"}
              <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                {type === "signin" ? "Sign Up" : "Sign In"}
              </Link>
            </div>
          </div>
          <div className="pt-7">
            <LabelledInput
              label="Email"
              placeholder="Enter Your Email..."
              onchange={(e) => {
                // setpostInputs(c => ({
                //     ...c,
                //     name: e.target.value
                // }))
                setpostInputs({
                  ...postInputs, //existing name, password and email
                  name: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="Enter Your Password..."
              onchange={(e) => {
                setpostInputs({
                  ...postInputs, //existing name, password and email
                  name: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Name"
              placeholder="Enter Your fullname..."
              onchange={(e) => {
                setpostInputs({
                  ...postInputs, //existing name, password and email
                  name: e.target.value,
                });
              }}
            />
            <button
              type="button"
              className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onchange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onchange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
