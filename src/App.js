import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
 
function App() {
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');

    const handleChange =(e)=>{
      setName(e.target.value);
    }
    
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }
    
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }

    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }

    const handleSubmit=(e)=>{
      if(password!==confPassword)
      {
        alert("password Not Match");
      }
      else{
        alert('A form was submitted with Name :"' + name +
        '" ,Age :"'+age +'" and Email :"' + email + '"');
      }
      e.preventDefault();
 
    }
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {

     }
    <h2> 📝 Formulario </h2>
    <h3> Ingrese los datos solicitados </h3>
    <img src="../../Ironman.jpg" alt='ironman' />
    <label>
          Nombre
        </label><br/>
        <input type="text" id='nombre' value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
          { 
          
          }
        <label>
          Edad
        </label><br/>
        <input type="text" id='edad' value={age} required onChange={(e)=> {handleAgeChange(e)}} /><br/>
            { 

            }
        <label>
          Email:
        </label><br/>
        <input type="email" id='email' value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br/>
          {

          }
        <label>
          Contraseña:
        </label><br/>
        <input type="password" id='password' value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
              {
               
              }
        <label>
          Confirma la contraseña:
        </label><br/>
        <input type="password" id='verpassword' value={confPassword} required onChange={(e)=> {handleConfPasswordChange(e)}} /><br/>
                {
                  
                }
        <input className="Button" type="submit" value="Registrate"/>
      </form>
    </header>
    </div>
  );
}
 
export default App;