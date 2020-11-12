import React, { useState } from 'react'

import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({
                html: 'Please enter a the first and last name'
            })
        } else {
            console.log(firstName, lastName)
            setFirstName('')
            setLastName('')
        }
    }

    return (
        <div id='add-tech-modal' className='modal'>
            <div className='modal-content'>
                <h4>New Technician</h4>
                <div className='row'>
                    <input 
                        type='text' 
                        name='firstName' 
                        value={firstName} 
                        onChange={ (e) => setFirstName(e.target.value)} 
                    /> 
                    <label className='active' htmlFor='firstName'>First Name</label>
                </div>
                <div className='row'>
                    <input 
                        type='text' 
                        name='lastName' 
                        value={lastName} 
                        onChange={ (e) => setLastName(e.target.value)} 
                    /> 
                    <label className='active' htmlFor='lastName'>Last Name</label>
                </div>                
            </div>
            <div className='modal-footer'>
                <a href='#!' onClick={onSubmit} className='modal-close waves-effect blue waves-green btn'>Enter</a>
            </div>
        </div>
    )
}

export default AddTechModal