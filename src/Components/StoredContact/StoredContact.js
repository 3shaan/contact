import Modal from '../modal/Modal';
import React from 'react';

const StoredContact = ({contact, deletefun}) => {
    const {name , email, phone }= contact;
    return (
        <div className='mt-5 bg-slate-500 rounded-lg flex justify-between'>
            <div className='flex gap-5 items-center'>
                <div>
                <i className="fa-solid fa-user-tie text-4xl"></i>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>Name : {name}</h1>
                    <h1>Phone : {phone} </h1>
                    <p>Email : {email} </p>
                </div>
            </div>
            <div className='flex gap-5 mx-5 items-center'>
            <div>
            <i className="fa-solid fa-pen-to-square text-2xl"></i>
            </div>
           <div>
           <i onClick={()=>deletefun(contact)} className="fa-solid fa-trash text-2xl"></i>
           </div>
            </div>
            
        </div>
    );
};

export default StoredContact;