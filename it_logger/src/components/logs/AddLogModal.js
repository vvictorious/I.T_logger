import React, { useState } from 'react'

const AddLogModal = () => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    cont [tech, setTech] = useState('')

    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <input 
                        type='text' 
                        name='message' 
                        value='{messsage}' 
                        onChange={e => setMessage(e.target.value)} 
                    /> 
                    <label className='active' htmlFor='message'>Log Message</label>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <select 
                            name='tech' 
                            value={tech} 
                            className='browser-default' 
                            onChange={e => setTech(e.target.value)}>
                                <option value='' disabled>Select Technician</option>
                                <option value='John Doe'>John Doe</option>
                                <option value='Sam Smith'>Sam Smith</option>
                                <option value='Sarah Wilson'>Sarah Wilson</option>
                            </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default AddLogModal