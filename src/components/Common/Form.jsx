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
            newErrors.firstName = " first name is required";
        }
        if (!formData.lastName) {
            newErrors.lastName = " last name is required";
        }
        if (!formData.email) {
            newErrors.email = " required email";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = " email invalid "
        }
        if (!formData.password) {
            newErrors.password = "passoword needed"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "confirm passowrd is required"
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
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-center w-full" >

            <div className="flex gap-4 w-full">

                <div className="flex flex-col flex-1">
                    <Input
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                    />
                </div>


                <div className="flex flex-col flex-1">
                    <Input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full mt-5">
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />
            </div>


            <div className="flex gap-4 w-full mt-5">

                <div className="flex flex-col flex-1">
                    <Input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />
                </div>


                <div className="flex flex-col flex-1">
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={errors.confirmPassword}
                    />
                </div>
            </div>


            <div className="flex flex-col w-full mt-5">
                <textarea
                    name="about"
                    placeholder="About you"
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
                    hover="hover:bg-white hover:scale-105 transition-all duration-500 ease-in-out hover:text-[#2C49FE]"
                />
            </div>

        </form>
    )
}

export default Form
