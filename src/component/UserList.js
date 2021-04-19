import React from 'react'


function User({ userList, onToggle,onRemove }) {
    return(
        <div>
            <b
            style={{cursor:'pointer', color: userList.active ? 'green': 'black' }} onClick={()=>onToggle(userList.id)}
            >{userList.username}</b> <span>{userList.email}</span>
            <button onClick={()=>onRemove(userList.id)}>삭제</button>
        </div>
    )
}


function UserList({ user, onToggle, onRemove }) {
    return(
        <div>
    {user.map(users1 =>(
     <User userList={users1} key={users1.id} onToggle={onToggle} onRemove={onRemove} />
    ))}
        </div>
    )
}

export default UserList;