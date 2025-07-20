import React,{useState} from "react";
import axios from "axios";

function Register()
{
    const[formData,setFormData]=useState({
        username:"",
        email:"",
        password:"",

    });
    const handleChange=(e)=>{
        setFormData({ ...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/api/users/register", formData);
            alert("Registeration Successful");
        }catch(error)
        {
            alert("Registeration Failed!")
            console.log(console.error);
            
        }
    };
    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" onChange={handleChange} required/>
                <input name="email" type="email" placeholder="PLease Enter Email Id" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Please Enter Password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );

}
export default Register;