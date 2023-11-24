import React, { useRef } from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList=(prop)=>{
    console.log(prop);
    const inputEl = useRef("");

    const deleteContactHandler=(id)=>{
        prop.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact)=>{
        return( 
        <ContactCard 
        contact={contact} 
        clickHandler={deleteContactHandler} 
        key={contact.id}
        />
        );
    });

    const getSearchItem = () => {
        prop.searchKeyword(inputEl.current.value);
    };
    return(
        <div class="main">
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
                
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                    ref={inputEl}
                    type="text" 
                    placeholder="Search Contacts" 
                    className="prompt" 
                    value={props.term} 
                    onChange={getSearchItem}
                    />
                    <i className="search icon"></i>
                </div>

            </div>
        <div className="ui called list">
            {renderContactList.length >0 ? renderContactList: "No contacts available"}</div>
        </div>
    );
}

export default ContactList;