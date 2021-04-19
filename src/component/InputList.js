import React from 'react'

function InputList({ onChange, email, username, onCreate }) {
    return(
        <div>
            <input 
            name='username' 
            onChange={onChange} 
            placeholder='username' 
            value={username}
            />

            <input 
            name='email' 
            onChange={onChange} 
            placeholder='email'
            value={email} 
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default InputList;