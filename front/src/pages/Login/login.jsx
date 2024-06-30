import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import uselogin from '../../hooks/uselogin';

export default function LoginForm() { // Consider renaming to LoginForm
    const { loading, login } = uselogin();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-gray-900 rounded">
            <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center">
                    Login <span className="text-yellow-500 bg-grey-300">ClOSer</span>
                </h1>
                <hr />
                <br />

                <form onSubmit={handleSubmit}>
                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter Username"
                            className="w-full input input-bordered h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Link to Signup */}
                    <div className="inline-flex text-white">
                        <Link to="/signup" className="mt-6 hover:text-yellow-500">
                            Don't have an account?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="hover:bg-black hover:text-white btn w-full border-none text-black h-10 bg-yellow-400 btn-sm mt-2"
                            disabled={loading} // Disable button when loading is true
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                    <br />
                </form>
            </div>
        </div>
    );
}
