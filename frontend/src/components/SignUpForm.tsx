import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface SignUpFormInputs {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    address: string,
    countryCode: string,
    phoneNumber: string,
    website?: string,
    zipCode: string
};

const SignUpForm = () => {
    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<SignUpFormInputs>();
    const onSubmit: SubmitHandler<SignUpFormInputs> = data => console.log(data);
    const [passwordToggle, setPasswordToggle] = useState(false);
    const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
    const navigate = useNavigate();
    const password = watch('password');

    const handlePasswordToggle = () => {
        setPasswordToggle(!passwordToggle);
    }

    const handleConfirmPasswordToggle = () => {
        setConfirmPasswordToggle(!confirmPasswordToggle);
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setValue('phoneNumber', value);
    };

    const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setValue('zipCode', value);
    };

    const handleFormSubmit = (data: any) => {
        onSubmit(data);
        reset();
        navigate('/sign-in');
    }

    return (
        <>
            <div className="bg-[#121d2d]">
                <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                    <div className="max-w-[680px] w-full">

                        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                            <h1 className="text-slate-900 text-center text-3xl font-semibold">Sign up</h1>
                            <form className="mt-12 space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div>
                                        <label className="text-slate-900 text-sm font-medium mb-2 block">Full Name</label>
                                        <div className="relative flex items-center">
                                            <input
                                                {...register("name", {
                                                    required: "Full name is required"
                                                })}
                                                name="name" type="text" className={`w-full text-slate-900 text-sm px-4 py-3 pr-8 rounded-md outline-[#2173ea] ${errors.name ? 'border border-red-600' : 'border border-slate-300'}`} placeholder="Enter full name"
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-slate-900 text-sm font-medium mb-2 block">Email</label>
                                        <div className="relative flex items-center">
                                            <input
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                        message: "Invalid email format."
                                                    }
                                                })}
                                                name="email" type="text" className={`w-full text-slate-900 text-sm px-4 py-3 pr-8 rounded-md outline-[#2173ea] ${errors.email ? 'border border-red-600' : 'border border-slate-300'}`} placeholder="ali@example.com"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                                        <div className="relative flex items-center">
                                            <input
                                                {...register('password', {
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Password should have atleast 8 chars."
                                                    },
                                                    pattern: {
                                                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                                                        message: "Password should atleast 1 number, 1 special char, 1 upper-case and 1 lower-case."
                                                    }
                                                })}
                                                name="password" type={passwordToggle ? "text" : "password"} className={`w-full text-slate-900 text-sm px-4 py-3 pr-8 rounded-md outline-[#2173ea] ${errors.password ? 'border border-red-600' : 'border border-slate-300'}`} placeholder="Enter password"
                                            />
                                            <svg onClick={handlePasswordToggle} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                            </svg>
                                        </div>
                                        {errors.password && (
                                            <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
                                        <div className="relative flex items-center">
                                            <input
                                                {...register('confirmPassword', {
                                                    required: "Confirm Password is required",
                                                    validate: value => value === password || "Passwords donot match",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Password should have atleast 8 chars."
                                                    },
                                                    pattern: {
                                                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                                                        message: "Password should atleast 1 number, 1 special char, 1 upper-case and 1 lower-case."
                                                    }
                                                })}
                                                type={confirmPasswordToggle ? "text" : "password"} className={`w-full text-slate-900 text-sm px-4 py-3 pr-8 rounded-md outline-[#2173ea] ${errors.confirmPassword ? 'border border-red-600' : 'border border-slate-300'}`} placeholder="Confirm password"
                                            />
                                            <svg onClick={handleConfirmPasswordToggle} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                            </svg>
                                        </div>
                                        {errors.confirmPassword && (
                                            <p className="text-red-600 text-sm mt-1">{errors.confirmPassword.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-slate-900 text-sm font-medium mb-2 block">Address</label>
                                        <div className="relative flex items-center">
                                            <input
                                                {...register("address", {
                                                    required: "Address is required"
                                                })}
                                                name="address" type="text" className={`w-full text-slate-900 text-sm px-4 py-3 pr-8 rounded-md outline-[#2173ea] ${errors.address ? 'border border-red-600' : 'border border-slate-300'}`} placeholder="123 Street, XYZ City"
                                            />
                                        </div>
                                        {errors.address && (
                                            <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-slate-900 text-sm font-medium mb-2 block">Phone Number</label>
                                        <div className="relative flex items-center gap-2">
                                            <select
                                                {...register('countryCode', { required: "Country code is required" })}
                                                name="country-code"
                                                className="text-slate-900 text-sm border border-slate-300 px-2 py-3 rounded-md bg-white"
                                            >
                                                <option value="+92">🇵🇰 +92</option>
                                            </select>

                                            <input
                                                {...register('phoneNumber', {
                                                    required: "Phone Number is required",
                                                    pattern: {
                                                        value: /^[3-9]\d{9}$/,
                                                        message: "Enter a valid phone number"
                                                    },
                                                    minLength: {
                                                        value: 10,
                                                        message: "Phone number should contain exactly 10 characters."
                                                    },
                                                    maxLength: {
                                                        value: 10,
                                                        message: "Phone number should contain exactly 10 characters."
                                                    }
                                                })}
                                                name="phone-number" type="text" className={`w-full text-slate-900 text-sm px-4 py-3 pr-8 rounded-md outline-[#2173ea] ${errors.phoneNumber ? 'border border-red-600' : 'border border-slate-300'}`} placeholder="300000000"
                                                onChange={handlePhoneChange}
                                            />
                                        </div>
                                        {errors.phoneNumber && (
                                            <p className="text-red-600 text-sm mt-1">{errors.phoneNumber.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-slate-900 text-sm font-medium mb-2 block">Website (Optional)</label>
                                        <div className="relative flex items-center">
                                            <input
                                                {...register("website", {
                                                    pattern: {
                                                        value: /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9]{2,}(\/[^\s]*)?$/,
                                                        message: "Enter a valid website url."
                                                    }

                                                })}
                                                name="website" type="text" className={`w-full text-slate-900 text-sm px-4 py-3 pr-8 rounded-md outline-[#2173ea] ${errors.website ? 'border border-red-600' : 'border border-slate-300'}`} placeholder="https://www.example.com"
                                            />
                                        </div>
                                        {errors.website && (
                                            <p className="text-red-600 text-sm mt-1">{errors.website.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="text-slate-900 text-sm font-medium mb-2 block">Zip Code</label>
                                        <div className="relative flex items-center">
                                            <input
                                                {...register("zipCode", {
                                                    required: {
                                                        value: true,
                                                        message: "Zip Code is required."
                                                    },
                                                    minLength: {
                                                        value: 5,
                                                        message: "Zip Code should contain exactly 5 characters."
                                                    },
                                                    maxLength: {
                                                        value: 5,
                                                        message: "Zip Code should contain exactly 5 characters."
                                                    }
                                                })}
                                                name="zip-code" type="text" className={`w-full text-slate-900 text-sm px-4 py-3 pr-8 rounded-md outline-[#2173ea] ${errors.zipCode ? 'border border-red-600' : 'border border-slate-300'}`} placeholder="12345"
                                                onChange={handleZipCodeChange}
                                            />
                                        </div>
                                        {errors.zipCode && (
                                            <p className="text-red-600 text-sm mt-1">{errors.zipCode.message}</p>
                                        )}
                                    </div>

                                </div>
                                <button type="submit" className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-[#2173ea] hover:bg-blue-700 focus:outline-none cursor-pointer">
                                    Sign up
                                </button>

                                <p className="text-slate-900 text-sm text-center">Already have an account? <Link to="/sign-in" className="text-[#2173ea] hover:underline ml-1 whitespace-nowrap font-semibold">Login here</Link></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpForm