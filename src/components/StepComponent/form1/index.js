import React from 'react';

const Form1 = () => {
    return (
        <div
            className="h-full w-full bg-white"
        >
            <div>
                <p className='text-[35px] font-bold text-center'>{"Insured Details to start a Quote"}</p>
                <div className="flex flex-wrap ml-20 mt-10">
                    <div className="flex flex-col space-y-[35px]">
                        <p className='text-[20px] font-bold'>{"Agent Details"}</p>
                        <div className="relative">
                            <input
                                className="border border-black px-4 py-2 w-[300px]"
                                type="text"
                                placeholder="Agent Name and Agency"
                            />
                        </div>
                        <div className="relative">
                            <input
                                className="border border-black px-4 py-2 w-[300px]"
                                type="text"
                                placeholder="Agent Phone"
                            />
                        </div>
                        <div className="relative">
                            <input
                                className="border border-black px-4 py-2 w-[300px]"
                                type="text"
                                placeholder="Agent E-mail"
                            />
                        </div>
                    </div>
                    <div className="w-1 bg-black mx-10"></div>
                    <div className='flex flex-col gap-10'>
                        <p className='text-[20px] font-bold text-center'>{"Customer Details"}</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col space-y-[35px]">
                                <input
                                    className="border border-black px-4 py-2 w-[300px]"
                                    type="text"
                                    placeholder="Business Name"
                                />
                                <input
                                    className="border border-black px-4 py-2 w-[300px]"
                                    type="text"
                                    placeholder="1223 Tadsworth Terr"
                                />
                                <input
                                    className="border border-black px-4 py-2 w-[300px]"
                                    type="text"
                                    placeholder="Add a Location"
                                />
                            </div>
                            <div className="flex flex-col space-y-[35px]">
                                <input
                                    className="border border-black px-4 py-2 w-[300px]"
                                    type="text"
                                    placeholder="Business  Owner Name"
                                />
                                <input
                                    className="border border-black px-4 py-2 w-[300px]"
                                    type="text"
                                    placeholder="Business Owner Phone Number"
                                />
                                <input
                                    className="border border-black px-4 py-2 w-[300px]"
                                    type="text"
                                    placeholder="Business Owner E-mail"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center ml-20 mt-10">
                    <p className="mr-4 text-black font-mulish text-[22px] font-semibold">
                        {"Has the business you are looking to insure had any prior losses?"}
                    </p>
                    <div className="flex items-center">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio w-5 h-5 text-accents-500 accent-[#683039]"
                                name="losses"
                                value="yes"
                            />
                            <span className="ml-2 text-black font-mulish font-semibold text-2xl">
                                Yes
                            </span>
                        </label>
                        <label className="inline-flex items-center ml-4">
                            <input
                                type="radio"
                                className="form-radio w-5 h-5 text-accents-500 accent-[#683039]"
                                name="losses"
                                value="no"
                            />
                            <span className="ml-2 text-black font-mulish font-semibold text-2xl">
                                No
                            </span>
                        </label>
                    </div>
                </div>
                <label className="flex items-center space-x-5 ml-20 my-6">
                    <input
                        type="checkbox"
                        className="form-checkbox text-accents-500 w-5 h-5  accent-[#683039]"
                        name="acceptTerms"
                        id="acceptTerms"
                    />
                    <span className="text-black font-mulish text-xl font-semibold">
                        {"I accept CannaPak's terms and conditions."}
                    </span>
                </label>
            </div>
        </div>
    );
};

export default Form1;
