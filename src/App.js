import React, { useRef, useState } from 'react'
import InputList from './component/InputList';
import UserList from './component/UserList';



function App() {
// useState HOOK로 input 상태관리
const [inputs, setInputs] = useState({
    username: '',
    email: '',
})
const { username, email } = inputs

// ON_CHANGE
const onChange = (e) => {
  const { value, name } = e.target;
  setInputs({
    ...inputs,
      [name]:value
  })
}


// useState Hook로 user 상태관리
const [user, setUser] = useState([{
      id: 1 ,
      username:'',
      email:'',
      active: true,
}])

// useRef로 id값 만들기
const nextId = useRef(2)


// ON_CREATE 
const onCreate = () => {
  const users = {
    id: nextId.current,
    username,
    email,
  };
    setUser(
      user.concat(users)  //  이해가 안갔던 부분 users에 active 값을 따로 안줘도 되는이유는 concat으로 합쳐지면서 생겨나기 때문이다.
    )

    setInputs({
      username:'',
      email:'',
    })
    nextId.current +=1
  }

// ON_TOGGLE 
const onToggle = (id) => {
    setUser(
      user.map(users => 
          users.id === id ? {...users, active: !users.active } : users
        )
    )
}

// ON_REMOVE
const onRemove = id => {
  setUser(
    user.filter(users =>  
      users.id !== id
      )
  )
}


  return (
    <>
      <InputList 
      onCreate={onCreate}
      onChange={onChange} 
      username={username} 
      email={email} 
      />
      <UserList
      onToggle={onToggle}
      onRemove={onRemove}
      user={user} 
      />
    </>
  )
}


export default App;