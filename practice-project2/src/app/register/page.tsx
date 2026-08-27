import React from "react";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Register</button>
          <p>
            Already Have an Account ? <span>login</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
