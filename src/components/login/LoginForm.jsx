/*import React from 'react';
class LoginForm extends React.components{
    render() {
        return (

	 <div class="hero">

		<div class="form-box">

			<div class="button-box">
				<i class="fas fa-user-circle"></i>
			</div>
		    <form id="login" class="input-group">
		    	
				<input type="text" class="input-field" placeholder="  User Id"required>
				<input type="text" class="input-field" placeholder="  Enter Password"required>
				
				<button type="submit" class="submit-btn">LOGIN</button>
		    </form>
		</div>
	</div>

        );
    }
}
export default LoginForm; */

import { useState } from 'react';
import axios from 'axios';

const projectID = '1708ba0c-b67d-46dc-8405-012e87888ba6';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;