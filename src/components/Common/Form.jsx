import React, { useState } from 'react'
import Input from './Input'
import Button from '../Button';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        about: "",
    });

    const [errors, setErrors] = useState({});

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.firstName) {
            newErrors.firstName = " First Name can not be empty";
        }
        if (!formData.lastName) {
            newErrors.lastName = " Last Name can not be empty";
        }
        if (!formData.email) {
            newErrors.email = " Email required";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = " Invalid Email  "
        }
        if (!formData.password) newErrors.password = "Password required";
        if (!formData.confirmPassword)
            newErrors.confirmPassword = "Confirm password required";
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "confirm password must be same as password"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    console.log(errors);

    const handleSubmit = (e) => {
        e.preventDefault()
        const isvalid = validateForm();
        if (isvalid) {
            console.log("Form submitted", formData);
        } else {
            console.log("form failed");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center w-full"
>
            <div className='flex flex-row gap-4 w-full'>
                <div className='flex flex-col flex-1'>

                    <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? "border-red-500 focus:border-red-500" : ""}

                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                </div>

                <div className=' flex flex-col flex-1 '>

                    <Input
                        type="text"
                        name="lastName"
                        placeholder=" Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? "border-red-500 focus:border-red-500" : ""}

                    />
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                </div>
            </div>
            <div className='w-full my-5   flex-col'>
                

                <Input
                    type="email"
                    name="email"
                    placeholder=" Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500 focus:border-red-500" : ""}

                />
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            </div >

            <div className='flex w-full gap-4'>
                <div className='flex flex-col flex-1'>

                <Input
                    type="password"
                    name="password"
                    placeholder=" Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? "border-red-500 focus:border-red-500" : ""}

                />
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>

                </div>
                <div className='flex flex-col flex-1'>

                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? "border-red-500 focus:border-red-500" : ""}

                />
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                </div>


            </div>


            <div className="flex flex-col flex-1 w-full mt-5">
                <textarea
                    name="about"
                    placeholder="About me"
                    value={formData.about}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-4 py-2 outline-none w-full h-28 resize-none focus:border-black"
                />
            </div>
            <div className="w-full mt-6">
                <Button
                    text="Sign Up"
                    textColor="text-white"
                    bgColor="bg-[#2C49FE]"
                    padding="py-2"
                    rounded="rounded-[23px]"
                    font="font-semibold"
                    hover="hover:bg-white hover:scale-105 transition-all duration-500 border-2-[#2C49FE] border ease-in-out hover:text-[#2C49FE]"
                />
            </div>

            </form>
    )
}

export default Form
