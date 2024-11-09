import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/F__4_-removebg-preview.png';

function Login({ onLogin }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('investor'); // Investor by default
    const [companyName, setCompanyName] = useState('');
    const [sector, setSector] = useState('');
    const [location, setLocation] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccessMessage(null);

        if (isRegistering && password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const endpoint = isRegistering
                ? 'http://localhost:5000/api/register'
                : 'http://localhost:5000/api/login';

            // For login, name and role are not required, so only send email and password

            const response = await axios.post(endpoint, { name, email, password, role });
            const { token, userId } = response.data;

            if (token) {
                if (rememberMe) {
                    localStorage.setItem('token', token);
                } else {
                    sessionStorage.setItem('token', token);
                }

                // Optionally save the userId in storage
                if (userId) {
                    localStorage.setItem('userId', userId); // If you need to use the userId
                }

                // Pass token to parent component (onLogin function)
                onLogin(token);
                resetForm();
            }

            if (isRegistering) {
                setSuccessMessage('Registration successful! You can now log in.');
                setIsRegistering(false); // Switch to login after successful registration
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Authentication failed. Please try again.');
        }
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setRole('investor');
        setCompanyName('');
        setSector('');
        setLocation('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w bg-black rounded-lg border-2 border-black/35 shadow-lg transition-shadow duration-300 flex">
                <div className="w-full p-6">
                    <div className="flex items-center justify-center mb-4">
                        <img src={logo} alt="FundFlow Logo" className="w-[90px] h-[90px]" />
                    </div>
                    <h2 className="text-2xl font-Levnam font-semibold text-[#d9d6ba] mb-2">
                        {isRegistering ? 'Create an Account' : 'Welcome Back'}
                    </h2>
                    <p className="font-Levnam font-medium text-[#11a14a] opacity-75 mb-6">
                        {isRegistering ? 'Please register your account' : 'Please sign in to your account'}
                    </p>

                    {error && <div className="mb-4 text-red-600">{error}</div>}
                    {successMessage && <div className="mb-4 text-green-600">{successMessage}</div>}

                    <form onSubmit={handleSubmit}>
                        {isRegistering && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="role" className="block text-[#11a14a] text-sm font-bold mb-2">
                                        Account Type
                                    </label>
                                    <select
                                        id="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full px-3 py-2 bg-[#d9d6ba] rounded-md focus:outline-none"
                                    >
                                        <option value="investor">Investor</option>
                                        <option value="company">Company</option>
                                    </select>
                                </div>

                                {role === 'company' && (
                                    <div className="flex space-x-4 mb-4">
                                        <div className="w-1/3">
                                            <label htmlFor="companyName" className="block text-[#11a14a] text-sm font-bold mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="companyName"
                                                value={companyName}
                                                onChange={(e) => setCompanyName(e.target.value)}
                                                className="w-full px-3 py-2 bg-[#d9d6ba] rounded-md focus:outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="w-1/3">
                                            <label htmlFor="sector" className="block text-[#11a14a] text-sm font-bold mb-2">
                                                Sector
                                            </label>
                                            <input
                                                type="text"
                                                id="sector"
                                                value={sector}
                                                onChange={(e) => setSector(e.target.value)}
                                                className="w-full px-3 py-2 bg-[#d9d6ba] rounded-md focus:outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="w-1/3">
                                            <label htmlFor="location" className="block text-[#11a14a] text-sm font-bold mb-2">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                id="location"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                className="w-full px-3 py-2 bg-[#d9d6ba] rounded-md focus:outline-none"
                                                required
                                            />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#11a14a] text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 bg-[#d9d6ba] rounded-md focus:outline-none"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-[#11a14a] text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 bg-[#d9d6ba] rounded-md focus:outline-none"
                                required
                            />
                        </div>

                        {isRegistering && (
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block text-[#11a14a] text-sm font-bold mb-2">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-3 py-2 bg-[#d9d6ba] rounded-md focus:outline-none"
                                    required
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-[#11a14a] font-Levnam font-medium text-black py-2 rounded-md"
                        >
                            {isRegistering ? 'Register' : 'Login'}
                        </button>
                    </form>
                    <button
                        onClick={() => setIsRegistering(!isRegistering)}
                        className="mt-4 text-[#11a14a] font-Levnam font-medium"
                    >
                        {isRegistering ? 'Already have an account? Login' : 'Don’t have an account? Register'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
