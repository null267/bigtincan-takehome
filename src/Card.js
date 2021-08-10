import React, { useState } from 'react';
import Address from 'url:../address.png';
import Phone from 'url:../phone.png';
import Email from 'url:../email.png';
import Url from 'url:../url.png';
import ChangeCard from './ChangeCard';

export default function Card({index, cardData}) {
    const [edit, setEdit] = useState(false);
    return (
        <section >
            {
                edit ?            
                    <ChangeCard index={index} cardData={cardData}/>
            :
                    <div className='Card'>
                        <div className='LeftCard'>
                            <div className="Photo">
                                {cardData['avatar'] ? <img className='Pic' src={cardData['avatar']} /> : <span>{cardData['initials']}</span>}    
                            </div>
            
                        </div>
                        <div className='RightCard'>
                        {/* <div> */}
                            <h2>
                                <span>{cardData['firstName'] + ' '}</span>
                                <span>{cardData['lastName']}</span>
                            </h2>
                            <div className='Data'><img src={Email}/>{cardData['email']}</div>
                            <div className='Data'><img src={Address}/>{cardData['address']}</div>
                            <div className='Data'><img src={Phone}/>{cardData['phone']}</div>
                            <div className='Data'><img src={Url}/>{cardData['url']}</div>
                            <div className='Data'>{cardData['company']}</div>
                            <div className='Data'>{cardData['phrase']}</div>
            {/* </div> */}
            
                        </div>
                    </div>
            }
    <button onClick={() => edit ? setEdit(false) : setEdit(true)}>{edit ? 'Restore Card' : 'Edit Card'}</button>                 
    
    </section>    
    );
}