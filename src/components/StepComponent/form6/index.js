import Modal from '@/components/modal';
import React, { useState } from 'react';

const Form6 = () => {

    const [openOrdinanceAndLawModal, setOpenOrdinanceAndLawModal] = useState(false);
    const [openTenantGlassModal, setOpenTenantGlassModal] = useState(false);
    const [openBusinessIncemModal, setOpenBusinessIncemModal] = useState(false);
    const [openEmployeeBenifitsLiabilityModal, setOpenEmployeeBenifitsLiabilityModal] = useState(false);
    const [openAdditionalInsuredModal, setOpenAdditionalInsuredModal] = useState(false);
    const [openStopGapModal, setOpenStopGapModal] = useState(false);

    const [formData, setFormData] = useState({
        ordinanceAndLaw: "",
        tenantGlass: "",
        businessIncome: "Select Coverage",
        extraExpense: "",
        monthlyLimit: "",
        employeeBenifitsLiability: "Select Coverage",
        additionalInsured: "",
        stopGap: "Select Coverage",
    })

    return (
        <div
            className="h-full w-full bg-white p-10"
        >
            <div>
                <p className='text-[35px] font-bold text-center'>{"Additional Insurance Coverages Continued"}</p>
                <div className="grid grid-cols-2 flex gap-10 mt-2">
                    <div className="flex-grow text-[22px] font-bold">{"What type of Insurance Coverage do you want?"}</div>
                </div>
                {/* New fields to open modal selection */}
                {/* Ordinance and Law Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">Ordinance & Law:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.ordinanceAndLaw ? formData.ordinanceAndLaw : "Select Coverage"}</p>
                                <div className='w-[20px] h-[20px] bg-red-950 cursor-pointer' onClick={() => setOpenOrdinanceAndLawModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tenant's Glass Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">Tenant's Glass:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.tenantGlass ? formData.tenantGlass : "Select Coverage"}</p>
                                <div className='w-[20px] h-[20px] bg-red-950 cursor-pointer' onClick={() => setOpenTenantGlassModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Business Income Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">Business Income:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.businessIncome}</p>
                                <div className='w-[20px] h-[20px] bg-red-950 cursor-pointer' onClick={() => setOpenBusinessIncemModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Employee Benifits Liability Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">Employee Benifits Liability:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.employeeBenifitsLiability}</p>
                                <div className='w-[20px] h-[20px] bg-red-950 cursor-pointer' onClick={() => setOpenEmployeeBenifitsLiabilityModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Aditional Insured Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">Aditional Insured:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.additionalInsured ? formData.additionalInsured : "Select Coverage"}</p>
                                <div className='w-[20px] h-[20px] bg-red-950 cursor-pointer' onClick={() => setOpenAdditionalInsuredModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stop Gap Field */}
                <div className='mt-5 flex gap-2 flex-col'>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">Stop Gap:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <div className='flex items-center justify-space-between form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal'>
                                <p className='w-[95%] text-accents-500 accent-[#683039] text-[18px] font-normal'>{formData.stopGap}</p>
                                <div className='w-[20px] h-[20px] bg-red-950 cursor-pointer' onClick={() => setOpenStopGapModal(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of new fields */}
            </div>

            {/* Ordinance And Law Modal */}
            {openOrdinanceAndLawModal ? <Modal
                handleClose={() => setOpenOrdinanceAndLawModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Orinance & Law:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.ordinanceAndLaw}
                                onChange={(e) => setFormData({ ...formData, ordinanceAndLaw: e.target.value })}
                                placeholder='Coverage B Adittional Limit 0'
                            >
                                {
                                    ['Coverage B Adittional Limit 0', 'Coverage B Adittional Limit 1']?.map((value, i) => {
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
            {/* Tenant's Glass Modal */}
            {openTenantGlassModal ? <Modal
                handleClose={() => setOpenTenantGlassModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Tenant's Glass:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <input
                                type='text'
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.propertyEnhancement}
                                onChange={(e) => setFormData({ ...formData, propertyEnhancement: e.target.value })}
                                placeholder='$50,000'
                            />
                        </div>
                    </div>
                </>}
            /> : null}
            {/* BUsiness Income Modal */}
            {openBusinessIncemModal ? <Modal
                handleClose={() => setOpenBusinessIncemModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Business Income:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <input
                                type='text'
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.businessIncome}
                                onChange={(e) => setFormData({ ...formData, businessIncome: e.target.value })}
                                placeholder='$500,000'
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Extra Expense:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.extraExpense}
                                onChange={(e) => setFormData({ ...formData, extraExpense: e.target.value })}
                                placeholder='Included'
                            >
                                {
                                    ['Included', 'Excluded']?.map((value, i) => {
                                        return (
                                            <option key={i} value={value}>{value}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Monthly Limit:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.monthlyLimit}
                                onChange={(e) => setFormData({ ...formData, monthlyLimit: e.target.value })}
                                placeholder='1/3'
                            >
                                {
                                    ['1/3', '1/4', '1/6', '1/12']?.map((value, i) => {
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
            {/* Employee Benifits Liability Modal */}
            {openEmployeeBenifitsLiabilityModal ? <Modal
                handleClose={() => setOpenEmployeeBenifitsLiabilityModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Employee Benifits Liability:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.employeeBenifitsLiability}
                                onChange={(e) => setFormData({ ...formData, employeeBenifitsLiability: e.target.value })}
                                placeholder='$500,000'
                            >
                                {
                                    ['$500,000', '$1,000,000']?.map((value, i) => {
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
            {/* Stop Gap Modal */}
            {openStopGapModal ? <Modal
                handleClose={() => setOpenStopGapModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px]">Stop Gap:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[240px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.damageToPremisesReturned}
                                onChange={(e) => setFormData({ ...formData, damageToPremisesReturned: e.target.value })}
                                placeholder='$25,000/$50,000'
                            >
                                {
                                    ['$25,000/$50,000', '$50,000/$100,000','$100,000/$150,000','$150,000/$200,000']?.map((value, i) => {
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
            {/* Additional Insured Modal */}
            {openAdditionalInsuredModal ? <Modal
                handleClose={() => setOpenAdditionalInsuredModal(false)}
                title='Adittional Insurance coverages'
                closeText='Cancel'
                saveText='Continue'
                body={<>
                    <div className="flex-grow text-[22px] font-bold m-[20px auto]">{"What type of insurance coverage do you want?"}</div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex-grow text-[22px] font-bold">Processors/Manufacturer:</div>
                        <div className='flex gap-10 flex items-center justify-start'>
                            <select
                                className={`form-select-gray border-gray-300 border p-3 w-[340px] h-[50px] text-accents-500 accent-[#683039] text-[18px] font-normal`}
                                value={formData.additionalInsured}
                                onChange={(e) => setFormData({ ...formData, additionalInsured: e.target.value })}
                                placeholder='Additional Insured Povision (Scheduled Primary And Non-Contributory)'
                            >
                                {
                                    ['Additional Insured Povision (Scheduled Primary And Non-Contributory)', 
                                    'Primary And Noncontributory- Other Insurance Condition (CG2010 Also Required)', 
                                    'Additional Insured-Concessionaires trading under your name', 
                                    'Additional Insured-Controlling Interest', 
                                    'Additional Insured-Owners, Lessees or Contractors-Scheduled Person or Organization', 
                                    'Additional Insured-Managers or Lessors of Premises',
                                    'Additional Insured-Venndors',
                                    'Additional Insured-Mortgage, Assignee or Receiver',
                                    'Additional Insured-Owners or other interests from whom land has been leased',
                                    'Additional Insured-Designated Persons or Organizations',
                                    'Additional Insured-Co-Owner Of Premises',
                                    'Additional Insured-Lessor of Leased Equipment',
                                    'Additional Insured-Grantor of Franchise',
                                    'Additional Insured-Lessor Of Equipment Automatic Status When Required In Lease Agreement With You',
                                    'Additional Insured-Grantor of Licenses-automatic status when required by contract',
                                    'Additional Insured-Grantor of Licenses',
                                    'Waiver Of Transfer Of Rights Of Recovery Against Others To Us'
                                ]?.map((value, i) => {
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

export default Form6
    ;
