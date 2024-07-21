import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/usesignup'; // Adjust the path as needed
import Gender from './gender'; // Adjust the path as needed
import toast from 'react-hot-toast'; // Import toast for notifications

export default function SignUp() {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirm: '',
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call signup function from hook
        try {
            await signup(inputs);
            // Optionally, clear form inputs after successful signup
            setInputs({
                fullName: '',
                username: '',
                password: '',
                confirm: '',
                gender: ''
            });
        } catch (error) {
            console.error('Signup Error:', error);
            toast.error('Failed to signup. Please try again later.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-slate-900 rounded">
            <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center">
                    SignUp{' '}
                    <span className="text-yellow-500 bg-grey-300">ClOSer</span>
                </h1>
                <hr />
                <br />

                <form onSubmit={handleSubmit} className="text-black">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="label p-2">
                            <span className="text-base label-text text-white">Full Name</span>
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                            placeholder="Enter Full Name"
                            className="w-full input input-bordered h-10"
                            required
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                            placeholder="Enter Username"
                            className="w-full input input-bordered h-10"
                            required
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
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-10"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirm" className="label p-2">
                            <span className="text-base label-text text-white">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            id="confirm"
                            value={inputs.confirm}
                            onChange={(e) => setInputs({ ...inputs, confirm: e.target.value })}
                            placeholder="Confirm Password"
                            className="w-full input input-bordered h-10"
                            required
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Gender</span>
                        </label>
                        <Gender
                            onCheckboxChange={handleCheckboxChange}
                            selectedGender={inputs.gender}
                        />
                    </div>

                    {/* Already have an account */}
                    <div className="mt-5">
                        <Link to="/login" className="text-white hover:text-yellow-500">
                            Already have an account?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="btn w-full h-10 btn-warning btn-sm mt-2"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
