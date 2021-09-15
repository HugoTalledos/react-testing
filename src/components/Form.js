import React, { useState } from 'react';
import '../App.css';
const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(false);

  const validateData = (event) => {
    event.preventDefault();
    if (!username || username.length === 0
        || !email || email.length === 0
        || !password || password.length === 0
      ) return setStatus(false);
    
    setStatus(true)
  };

  return(<div className="App">
    <header className="App-header">
      <div className={'form-card'}>
        <h1>Register</h1>
        <form onSubmit={(e) => validateData(e)}>
          <label>Username</label>
          <input type={'text'} required
                 name={'username'}
                 id={'username'}
                 onChange={(e)=> setUsername(e.target.value)}/>
          <label>Email</label>
          <input type={'email'} required
                 name={'email-user'}
                 id={'email-user'}
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}/>
          <label>Password</label>
          <input type={'password'} required
                 name={'password-user'}
                 id={'password-user'}
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}/>
          <button>Enviar</button>
        </form>
      </div>
    {status && <h1>¡Bienvenido, {username}! </h1>}
    </header>
  </div>)
};

export default Form;
