import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, type SubmitHandler } from "react-hook-form";

interface SignInFormInputs {
    email: string,
    password: string,
};

const SignInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormInputs>();
    const onSubmit: SubmitHandler<SignInFormInputs> = data => console.log(data);
    const [passwordToggle, setPasswordToggle] = useState(false);

    const handlePasswordToggle = () => {
        setPasswordToggle(!passwordToggle);
    }

    return (
        <>
            <div className="bg-[#121d2d]">
                <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                    <div className="max-w-[480px] w-full">

                        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                            <h1 className="text-slate-900 text-center text-3xl font-semibold">Sign in</h1>
                            <form className="mt-12 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className="text-slate-900 text-sm font-medium mb-2 block">Email</label>
                                    <div className="relative flex items-center">
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                                            })}
                                            name="email" type="text" className={`w-full text-slate-900 text-sm px-4 py-3 pr-8 rounded-md outline-[#2173ea] ${errors.email ? 'border border-red-600' : 'border border-slate-300'}`} placeholder="Enter email"
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
                                <div className="text-sm text-center">
                                    <Link to="/forget-password" className="text-[#2173ea] hover:underline font-semibold">
                                        Forgot your password?
                                    </Link>
                                </div>

                                <button type="submit" className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-[#2173ea] hover:bg-blue-700 focus:outline-none cursor-pointer">
                                    Sign in
                                </button>
                                <p className="text-slate-900 text-sm text-center">Don't have an account? <Link to="/sign-up" className="text-[#2173ea] hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInForm