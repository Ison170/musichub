import Axios  from 'axios'
import { useState } from 'react';

function App() {
    const [usernameReg,setUsernameReg]=useState(" ")
    const [PasswordReg,setPasswordReg]=useState(" ")

    const [username,setUsername]=useState(" ")
    const [Password,setPassword]=useState(" ")

    
    const register  = () => {
            Axios.post('http://localhost:3001/register' ,{
            username:usernameReg ,
            passw :PasswordReg,
    }).then((respose)=> {
        console.log(respose);  //send mesage
    }); 
    };


    const login  = () => {
     
      Axios.post('http://localhost:3001/login' ,{
      username:username ,
      passw :Password,
}).then((respose)=> {
 if(respose.data.message) {
  console.log(respose);
  alert(respose.data.message);

 }
 else{
 alert(respose.data[0].username)
 }
  
});
};


  return (
    <div className="App">
      <div className="REIGSTER">
        <h1> REIGSnnTER</h1>
        <label>username</label>
        <input type="text"
         onChange={(e) =>
         {setUsernameReg(e.target.value);
         }}/>

        <input type="password" placeholder="passs..."
          onChange={(e) =>
            {setPasswordReg(e.target.value);
            }}
            />
        <button  onClick={register}>register</button></div>

        <div className="login">
            <h1>login</h1>
            <input type="text" placeholder="username.." 
            onChange={(e) =>
              {setUsername(e.target.value);
              }}/>
            <input type="password" placeholder="passs..."
             onChange={(e) =>
              {setPassword(e.target.value);
              }}
              />
            <button onClick={login}>submit</button>
        
      </div>

      
      <div className="Adminbossssss">
            <h1>Welcome boss</h1>
            <input type="text" placeholder="username.."/>
            <input type="password" placeholder="passs..."/>
            <button>submit</button>
        
      </div>
    </div>
  );
}

export default App;

