import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/')
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the Items!', error); 
        }
    };

    return ( 
        <div>
            <h1>items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}> 
                        {item.first_name} : {item.middle_name} : {item.last_name} : {item.contact_no} : {item.email} : {item.address} : {item.birthday} {item.place_of_birth} : {item.gender} : {item.civil_status} {item.height} : {item.weight} : {item.blood_type} {item.GSIS_ID_no} {item.PAGIBIG_ID_no} : {item.PHILHEALTH_no} : {item.SSS_no} : {item.TIN_no} : {item.agency_employee_no} : {item.citizenship} : {item.permanent_address} : {item.ZIP_code} : {item.telephone_no} : {item.Fathers_name} : {item.Mothers_name}
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </li>   
                ))}
            </ul>
        </div>
    );

};

export default ItemList;
