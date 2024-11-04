import React, { useState } from 'react';
import logo from './assets/F__4_-removebg-preview.png';

function Register() {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, confirmPassword }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Registration failed');
            }

            alert(data.message); // Show success message or redirect
            // Optionally redirect or handle successful registration

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen">
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-1/4 bg-black rounded-lg border-2 border-black/35 hover:shadow-black/50 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                        <div className="flex items-center justify-center mb-4">
                            <img 
                                src={logo}
                                alt="FundFlow Logo"
                                className="w-[90px] h-[90px]" 
                            />
                        </div>

                        <h2 className="text-2xl font-Levnam font-semibold text-[#d9d6ba] mb-2">
                            Create an Account
                        </h2>
                        <p className="font-Levnam font-medium text-[#11a14a] opacity-75 mb-6">
                            Please fill in your details to register.
                        </p>

                        {error && <div className="mb-4 text-red-600">{error}</div>}

                        <form onSubmit={handleSubmit}>
                            <div className="font-Levnam font-medium mb-4">
                                <label
                                    htmlFor="email"
                                    className="block font-Levnam font-medium text-[#11a14a] text-sm mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 bg-[#d9d6ba] border-[#d9d6ba] rounded-md focus:outline-none focus:ring-2 focus:ring-[#11a14a]"
                                    required
                                />
                            </div>

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
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11a14a]"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#11a14a] font-Levnam font-medium text-black py-2 rounded-md hover:bg-[#d9d6ba] transition duration-300"
                            >
                                Register
                            </button>
                        </form>

                        <p className="font-Levnam font-medium text-[#11a14a] mt-4 text-center">
                            Already have an account?{' '}
                            <button
                                onClick={() => window.location.href = '/'} // Adjust the routing here
                                className="text-[#11a14a] hover:underline"
                            >
                                Login here
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
