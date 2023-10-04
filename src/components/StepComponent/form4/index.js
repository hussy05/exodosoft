import Modal from '@/components/modal';
import React, { useState } from 'react';

const data = [
    {
        text: 'General Liability:',
        options: ["Select Coverage", "others"]
    },
    {
        text: 'Commercial Property:',
        options: ["Select Coverage", "$600,000", "$700,000", "$800,000"]
    },
    {
        text: 'Product Liability:',
        options: ["Select Coverage", "$600,000", "$700,000", "$800,000"]
    },
    {
        text: 'Cyber Liability:',
        options: ['Less than 1', 'others']
    },
];
const Form4 = () => {

    const [selectedOptions, setSelectedOptions] = useState({});
    const [selectedValue, setSelectedValue] = useState({});

    const [openGeneralLiabilityModal, setOpenGenenralLiabilityModal] = useState(false);
    const [openCommercialLiabilityModal, setOpenCommercialLiabilityModal] = useState(false);
    const [openProductLiabilityModal, setOpenProductLiabilityModal] = useState(false);
    const [openCyberLiabilityModal, setOpenCyberLiabilityModal] = useState(false);

    const [formData, setFormData] = useState({
        generalLiability: "Select Coverage",
        commercialLiability: "Select Coverage",
        productLiability: "Select Coverage",
        cyberLiability: "Select Coverage",
    })

    const handleValueChange = (rowIndex, option) => {
        setSelectedValue((prevOptions) => ({
            ...prevOptions,
            [rowIndex]: option,
        }));
    };
    const handleOptionChange = (rowIndex, option) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [rowIndex]: option,
        }));
    };

    return (
        <div
            className="h-full w-full bg-white p-10"
        >
                <p className='text-[35px] font-bold text-center'>{"Policy Details"}</p>
                <div className="grid grid-cols-2 gap-10 mt-2">
                    <div className="flex-grow text-[22px] font-bold">{"How is the business registered?"}</div>
                    <div className='flex gap-10 flex items-center justify-start'>
                        <input
                            type="date"
                            className="form-input-gray border-gray-300 border p-3 w-[240px] h-[50px] text-center text-accents-500 accent-[#683039] text-[18px] font-normal"
                            value="2023-09-30"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 flex gap-10 mt-2">
                    <div className="flex-grow text-[22px] font-bold">{"What type of Insurance Coverage do you want?"}</div>
                </div>
            <div>
            {/* <p className='text-[35px] font-bold text-center'>{"Policy Details"}</p>

                <div className="grid grid-cols-2 gap-10 mt-2">
                <div className="flex-grow text-[22px] font-bold">{"How is the business registered?"}</div>
                    <div className="flex-grow text-[22px] font-bold">{"How is the business registered?"}</div>
                    <div className='flex gap-10 flex items-center justify-start'>
                        <input
                            type="date"
                            className="form-input-gray border-gray-300 border p-3 w-[240px] h-[50px] text-center text-accents-500 accent-[#683039] text-[18px] font-normal"
                            value="2023-09-30"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 flex gap-10 mt-2">
                    <div className="flex-grow text-[22px] font-bold">{"What type of Insurance Coverage do you want?"}</div>
                </div>
                <div className='mt-5 flex gap-2 flex-col'>
                    {data.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-2 gap-10">
                            <div className="flex-grow text-[22px] font-bold">{row.text}</div>
                            <div className='flex gap-10 flex items-center justify-start'>
                                <select
                                    className={`${rowIndex !== 0 && 'appearance-none'} form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                    value={selectedValue[rowIndex] || row?.options[0]}
                                    onChange={(e) => handleValueChange(rowIndex, e.target.value)}
                                >
                                    {
                                        row?.options?.map((value, i) => {
                                            return (
                                                <option key={i} value={value}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                        </div>
                    ))}
                </div> */}
                {/* New fields to open modal selection */}
                {/* General Liability Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">General Liability:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.generalLiability}</p>
                                <div className='w-[20px] h-[20px] bg-red-950 cursor-pointer' onClick={() => setOpenGenenralLiabilityModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Commercial Property Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">Commercial Property:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.commercialLiability}</p>
                                <div className='w-[20px] h-[20px] bg-red-950 cursor-pointer' onClick={() => setOpenCommercialLiabilityModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Liability Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">Product Liability:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.productLiability}</p>
                                <div className='w-[20px] h-[20px] bg-red-950 cursor-pointer' onClick={() => setOpenProductLiabilityModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Cyber Liability Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">Cyber Liability:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.cyberLiability}</p>
                                <div className='w-[20px] h-[20px] bg-red-950 cursor-pointer' onClick={() => setOpenCyberLiabilityModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of new fields */}
                <div className="grid grid-cols-2 flex gap-10 mt-2">
                    <div className="flex-grow text-[22px] font-bold">{"TRIA Coverage:"}</div>
                    <div className='flex gap-10 flex items-center justify-start ml-8'>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio w-5 h-5 text-accents-500 accent-[#683039]"
                                name="losses"
                                value="yes"
                            />
                            <span className="ml-2 text-black font-mulish font-semibold text-[18px]">
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
                            <span className="ml-2 text-black font-mulish font-semibold text-[18px]">
                                No
                            </span>
                        </label>
                    </div>
                </div>

            </div>
            {/* Modals */}
            {/* General Liability Modal */}
            {openGeneralLiabilityModal ? <Modal
                handleClose={() => setOpenGenenralLiabilityModal(false)}
                title='General Liability'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">General Liability</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.generalLiability}
                                onChange={(e) => setFormData({ ...formData, generalLiability: e.target.value })}
                                placeholder='$1,000,000/$2,000,000'
                            >
                                {
                                    ['$1,000,000', '$2,000,000']?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                    </div>
                </>}
            /> : null}

            {/* Commercial Property Liability Modal */}
            {openCommercialLiabilityModal ? <Modal
                handleClose={() => setOpenCommercialLiabilityModal(false)}
                title='Commercial Property'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex items-center justify-between gap-20">
                        <div className='col-1 grid grid-cols-2 gap-5 m-[auto 250px]'>
                            <div className="flex-grow text-[22px]">Cause of Loss:</div>
                            <div className='flex gap-10 flex items-center justify-start'>
                                <select
                                    className={`form-select-gray border-gray-300 border p-3 w-[170px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                    value={formData.commercialLiability}
                                    onChange={(e) => setFormData({ ...formData, commercialLiability: e.target.value })}
                                    placeholder='Basic'
                                >
                                    {
                                        ['Basic', 'Broad','Special Including Theft','Special Excluding Theft']?.map((value, i) => {
                                            return (
                                                <option key={i} value={value}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div className="flex-grow text-[22px]">Coinsurance:</div>
                            <div className='flex gap-10 flex items-center justify-start'>
                                <select
                                    className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                    value={formData.commercialLiability}
                                    onChange={(e) => setFormData({ ...formData, commercialLiability: e.target.value })}
                                    placeholder='100%'
                                >
                                    {
                                        ['80%', '90%','100%']?.map((value, i) => {
                                            return (
                                                <option key={i} value={value}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div className="flex-grow text-[22px]">Loss Valuation:</div>
                            <div className='flex gap-10 flex items-center justify-start'>
                                <select
                                    className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                    value={formData.commercialLiability}
                                    onChange={(e) => setFormData({ ...formData, commercialLiability: e.target.value })}
                                    placeholder='ACV'
                                >
                                    {
                                        ['ACV', 'RC']?.map((value, i) => {
                                            return (
                                                <option key={i} value={value}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div className="flex-grow text-[22px]">Roof Age:</div>
                            <div className='flex gap-10 flex items-center justify-start'>
                                <select
                                    className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                    value={formData.commercialLiability}
                                    onChange={(e) => setFormData({ ...formData, commercialLiability: e.target.value })}
                                    placeholder='1-10'
                                >
                                    {
                                        ['1-10', '11-20','21-30','31-40','41-50','50+']?.map((value, i) => {
                                            return (
                                                <option key={i} value={value}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                        </div>
                        <div className='col-1 grid grid-cols-2 gap-5 m-[auto 250px]'>
                            <div className="flex-grow text-[22px]">Construction</div>
                            <div className='flex gap-10 flex items-center justify-start'>
                                <select
                                    className={`form-select-gray border-gray-300 border p-3 w-[170px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                    value={formData.commercialLiability}
                                    onChange={(e) => setFormData({ ...formData, commercialLiability: e.target.value })}
                                    placeholder='Frame'
                                >
                                    {
                                        ['Frame', 'Massory','Non-Combustible','Massory Non-Comb','Fire Resistive']?.map((value, i) => {
                                            return (
                                                <option key={i} value={value}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div className="flex-grow text-[22px]">Protection Class</div>
                            <div className='flex gap-10 flex items-center justify-start'>
                                <select
                                    className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                    value={formData.commercialLiability}
                                    onChange={(e) => setFormData({ ...formData, commercialLiability: e.target.value })}
                                    placeholder='1'
                                >
                                    {
                                        ['1', '2','3','4','5']?.map((value, i) => {
                                            return (
                                                <option key={i} value={value}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div className="flex-grow text-[22px]">Detuctible</div>
                            <div className='flex gap-10 flex items-center justify-start'>
                                <select
                                    className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                    value={formData.commercialLiability}
                                    onChange={(e) => setFormData({ ...formData, commercialLiability: e.target.value })}
                                    placeholder='500'
                                >
                                    {
                                        ['500', '1000','2500','5000','10,000']?.map((value, i) => {
                                            return (
                                                <option key={i} value={value}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div className="flex-grow text-[22px]">Building Value</div>
                            <div className='flex gap-10 flex items-center justify-start'>
                                <input
                                type='text'
                                    className={`form-select-gray border-gray-300 border p-3 w-[170px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                    value={formData.commercialLiability}
                                    onChange={(e) => setFormData({ ...formData, commercialLiability: e.target.value })}
                                    placeholder='$1,000,000/$2,000,000'
                                />
                            </div>
                        </div>
                    </div>
                </>}
            /> : null}

            {/* Product Liability Modal */}
            {openProductLiabilityModal ? <Modal
                handleClose={() => setOpenProductLiabilityModal(false)}
                title='Product Liability'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Product Liability</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.productLiability}
                                onChange={(e) => setFormData({ ...formData, productLiability: e.target.value })}
                                placeholder='$1,000,000/$2,000,000'
                            >
                                {
                                    ['$100,000','$1,000,000', '$2,000,000']?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                    </div>
                </>}
            /> : null}

            {/* Cyber Liability Modal */}
            {openCyberLiabilityModal ? <Modal
                handleClose={() => setOpenCyberLiabilityModal(false)}
                title='Cyber Liability'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Cyber Liability</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.cyberLiability}
                                onChange={(e) => setFormData({ ...formData, cyberLiability: e.target.value })}
                                placeholder='$50,000/$100,000'
                            >
                                {
                                    ['$50,000', '$100,000']?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                    </div>
                </>}
            /> : null}
        </div>
    );
};

export default Form4
    ;
