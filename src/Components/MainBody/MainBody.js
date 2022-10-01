import React, { useEffect, useState } from 'react';
import InputContact from '../inputContact/InputContact';
import StoredContact from '../StoredContact/StoredContact';

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainBody = () => {
        const [info, setInfo] = useState([]);
        // const [allInfo , setAllInfo] = useState([]);
    const handalSubmit =(props)=>{
       const exist = info.find(cont => cont.phone === props.phone);
       if(!exist){
        const newinfo = [...info, props];
        setInfo(newinfo);
        toast('contact add succesful')
       }
       else{
        toast('This Contact already added')
       }
        const getContact = localStorage.getItem('contact');
        if(!getContact){
            localStorage.setItem('contact', JSON.stringify([props])); 
        }
        else{
            const contactObj = JSON.parse(getContact);
           let arrayContact = [...contactObj, props]
            localStorage.setItem('contact', JSON.stringify(arrayContact)); 
            
        }
        
    }

    const deleteContact =(props)=>{
        const rest = info.filter(cont=> cont.phone !== props.phone);
        setInfo([...rest]);
        const getLocal = localStorage.getItem('contact');
        const getLocalObj = JSON.parse(getLocal);
        if(getLocalObj){
            console.log(getLocalObj);
           const newLocal = getLocalObj.filter(cont => cont.phone !== props.phone);
            localStorage.setItem('contact', JSON.stringify(newLocal));

        }
        toast('Contact removed');
    }






    //  local to ui 
    useEffect(()=>{
            const get = localStorage.getItem('contact');
            const contact = JSON.parse(get);
            if(contact){
                setInfo(contact);
            }
            
        
    },[]);

    return (
        <div>
            <h1 className='text-4xl text-center mt-5'>Contacts</h1>
            <InputContact handle ={handalSubmit}></InputContact>
            {
                info.map(conct => <StoredContact deletefun={deleteContact} contact ={conct}></StoredContact>)
            }
        </div>
    );
};

export default MainBody;