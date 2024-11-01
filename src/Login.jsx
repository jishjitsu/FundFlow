import React, { useState } from 'react';
import logo from './assets/F__4_-removebg-preview.png'

function Login() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add authentication logic here
    };

    return (
        <div className="min-h-screen">
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-1/4 bg-black bg-black rounded-lg border-2 border-black/35 hover:shadow-black/50 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                        <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center justify-center mb-2">
                            <img 
                                src={logo}// Adjust the path as necessary
                                alt="FundFlow Logo"
                                className="w-[90px] h-[90px]" // Adjust width and height as needed
                            />
                        </div>
                        </div>

                        <h2 className="text-2xl font-Levnam font-semibold text-[#d9d6ba] mb-2">
                            {isRegistering ? 'Create an Account' : 'Welcome Back'}
                        </h2>
                        <p className="font-Levnam font-medium text-[#11a14a] opacity-75 mb-6">
                            {isRegistering
                                ? 'Please fill in your details to register.'
                                : 'Please sign in to your account'}
                        </p>

                        {error && <div className="mb-4 text-red-600">{error}</div>}

                        <form onSubmit={handleSubmit}>
                            <div className="font-Levnam font-medium mb-4">
                                <label
                                    htmlFor="email"
                                    className="block font-Levnam font-medium text-[#11a14a] text-sm font-bold mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full font-Levnam font-medium px-3 py-2 bg-[#d9d6ba] border-[#d9d6ba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#11a14a]"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-[#11a14a] text-sm font-bold mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-3 py-2 bg-[#d9d6ba] border-[#d9d6ba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#11a14a]"
                                    required
                                />
                            </div>

                            {isRegistering && (
                                <div className="mb-4">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11a14a]"
                                        required
                                    />
                                </div>
                            )}

                            <div className="mb-4 font-Levnam font-medium text-[#11a14a]">
                                <label htmlFor="rememberMe" className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        className="mr-2"
                                    />
                                    Remember Me
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#11a14a] font-Levnam font-medium text-black font-bold py-2 rounded-md hover:bg-[#d9d6ba] transition duration-300"
                            >
                                {isRegistering ? 'Register' : 'Login'}
                            </button>
                        </form>

                        <p className="font-Levnam font-medium text-[#11a14a] mt-4 text-center">
                            {isRegistering ? (
                                <span>
                                    Already have an account?{' '}
                                    <button
                                        onClick={() => setIsRegistering(false)}
                                        className="text-[#11a14a] hover:underline"
                                    >
                                        Login here
                                    </button>
                                </span>
                            ) : (
                                <span>
                                    No account?{' '}
                                    <button
                                        onClick={() => setIsRegistering(true)}
                                        className="text-[#11a14a] hover:underline"
                                    >
                                        Register here
                                    </button>
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
