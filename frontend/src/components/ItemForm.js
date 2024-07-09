import React, { useState, useEffect } from "react";
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [contact_no, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [place_of_birth, setPlaceOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [GSIS_ID_no, setGSIS_ID_NO] = useState('');
    const [PAGIBIG_ID_no, setPAGIBIG_ID_NO] = useState('');
    const [PHILHEALTH_no, setPHILHEALTH_NO] = useState('');
    const [SSS_no, setSSS_NO] = useState('');
    const [TIN_no, setTIN_NO] = useState('');
    const [agency_employee_no, setAgencyEmployeeNo] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [permanent_address, setPermanentAddress] = useState('');
    const [ZIP_code, setZIP_Code] = useState('');
    const [telephone_no, setTelephone_No] = useState('');
    const [Fathers_name, setFathersName] = useState('');
    const [Mothers_name, setMothersName] = useState('');

    useEffect (() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setContactNo(item.contact_no);
            setEmail(item.email);
            setAddress(item.address);
            setBirthday(item.birthday)
            setPlaceOfBirth(item.place_of_birth);
            setGender(item.gender);
            setCivilStatus(item.civil_status)
            setHeight(item.height);
            setWeight(item.weight)
            setBloodType(item.blood_type);
            setGSIS_ID_NO(item.GSIS_ID_no);
            setPAGIBIG_ID_NO(item.PAGIBIG_ID_no) 
            setPHILHEALTH_NO(item.PHILHEALTH_no);
            setSSS_NO(item.SSS_no)
            setTIN_NO(item.TIN_no);
            setAgencyEmployeeNo(item.agency_employee_no);
            setCitizenship(item.citizenship) 
            setPermanentAddress(item.permanent_address);
            setZIP_Code(item.ZIP_code)
            setTelephone_No(item.telephone_no);
            setFathersName(item.Fathers_name);
            setMothersName(item.Mothers_name)
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { first_name, middle_name, last_name, contact_no, email, address, birthday, place_of_birth, gender, civil_status, height, weight, blood_type, GSIS_ID_no, PAGIBIG_ID_no, PHILHEALTH_no, SSS_no, TIN_no, agency_employee_no, citizenship, permanent_address, ZIP_code, telephone_no, Fathers_name, Mothers_name };
        try {
            if (item){
                await 
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
               await
               axios.post(`http://localhost:8000/api/items/`, data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the from!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
                <div>
                    <label>first_name</label>
                    <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />     
                </div>
                <div>
                    <label>middle_name</label>
                    <input type="text" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />       
                </div>
                <div>
                    <label>last_name</label>
                    <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />       
                </div>
                <div>
                    <label>contact_no</label>
                    <input type="text" value={contact_no} onChange={(e) => setContactNo(e.target.value)} />     
                </div>
                <div>
                    <label>email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />       
                </div>
                <div>
                    <label>address</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />       
                </div>
                <div>
                    <label>birthday</label>
                    <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)} />     
                </div>
                <div>
                    <label>place_of_birth</label>
                    <input type="text" value={place_of_birth} onChange={(e) => setPlaceOfBirth(e.target.value)} />       
                </div>
                <div>
                    <label>gender</label>
                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />       
                </div>
                <div>
                    <label>civil_status</label>
                    <input type="text" value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} />     
                </div>
                <div>
                    <label>height</label>
                    <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />       
                </div>
                <div>
                    <label>weight</label>
                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />     
                </div>
                <div>
                    <label>blood_type</label>
                    <input type="text" value={blood_type} onChange={(e) => setBloodType(e.target.value)} />       
                </div>
                <div>
                    <label>GSIS_ID_no</label>
                    <input type="text" value={GSIS_ID_no} onChange={(e) => setGSIS_ID_NO(e.target.value)} />     
                </div>
                <div>
                    <label>PAGIBIG_ID_no</label>
                    <input type="text" value={PAGIBIG_ID_no} onChange={(e) => setPAGIBIG_ID_NO(e.target.value)} />       
                </div>
                <div>
                    <label>PHILHEALTH_no</label>
                    <input type="text" value={PHILHEALTH_no} onChange={(e) => setPHILHEALTH_NO(e.target.value)} />       
                </div>
                <div>
                    <label>SSS_no</label>
                    <input type="text" value={SSS_no} onChange={(e) => setSSS_NO(e.target.value)} />     
                </div>
                <div>
                    <label>TIN_no</label>
                    <input type="text" value={TIN_no} onChange={(e) => setTIN_NO(e.target.value)} />       
                </div>
                <div>
                    <label>agency_employee_no</label>
                    <input type="text" value={agency_employee_no} onChange={(e) => setAgencyEmployeeNo(e.target.value)} />     
                </div>
                <div>
                    <label>citizenship</label>
                    <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />       
                </div>
                <div>
                    <label>permanent_address</label>
                    <input type="text" value={permanent_address} onChange={(e) => setPermanentAddress(e.target.value)} />       
                </div>
                <div>
                    <label>ZIP_code</label>
                    <input type="text" value={ZIP_code} onChange={(e) => setZIP_Code(e.target.value)} />     
                </div>
                <div>
                    <label>telephone_no</label>
                    <input type="text" value={telephone_no} onChange={(e) => setTelephone_No(e.target.value)} />       
                </div>
                <div>
                    <label>Fathers_name</label>
                    <input type="text" value={Fathers_name} onChange={(e) => setFathersName(e.target.value)} />     
                </div>
                <div>
                    <label>Mothers_name</label>
                    <input type="text" value={Mothers_name} onChange={(e) => setMothersName(e.target.value)} />     
                </div>
            <button type='submit'>Submit</button>
        </form>
    ); 

};
export default ItemForm;