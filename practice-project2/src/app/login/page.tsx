"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result || result.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <form className="space-y-6" onSubmit={handleSignIn}>
          <div>
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border-b border-white py-2 px-1 bg-gray-900
            text-white outline-none placeholder:-gray-400"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label className="mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full border-b border-white py-2 px-1 bg-gray-900
            text-white outline-none placeholder:-gray-400"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {error && <p className="text-sm text-red-400 text-center">{error}</p>}

          <p
            className="text-sm text-center mt-1"
            onClick={() => router.push("/register")}
          >
            want to create an account ?{" "}
            <span className="text-blue-400">register</span>
          </p>
          <div className="flex justify-start">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center gap-2 justify-center my-3">
          <hr className="grow border-gray-500" />
          <span>OR</span>
          <hr className="grow border-gray-500" />
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-400 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors">
          <FcGoogle />
          <span>sign In With Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
