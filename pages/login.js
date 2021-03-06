import { LockClosedIcon } from "@heroicons/react/solid";
import React from "react";
import router from "next/router";

export default function Login() {
  return (
    <>
      <div className="container mx-auto max-w-lg py-10 z-0">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Mee Relation
        </h2>
        <div className="px-4 flex-auto">
          <div className="py-10 grid">
            <div className="cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 bg-white">
              <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  SIGN IN
                </h2>
                <form className="w-full max-w-lg">
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Password"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm py-5">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <button className="w-full bg-indigo-600   text-white   p-3 rounded-lg">
                    <span className="text-l text-center"> SIGNIN </span>
                  </button>
                  <div className="text-sm text-center py-5">
                  <bottom
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    type="botton"
                    onClick={() => {
                      router.push({
                        pathname: "/Register",
                      });
                    }}
                  >
                    Register Now
                  </bottom>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
