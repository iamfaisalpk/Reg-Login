import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();
const [formData, setFormData] = useState({ username: "", password: "" });

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleLogin = async (e) => {
    e.preventDefault();
    
    // Fetch users from JSON Server
    const res = await fetch(`http://localhost:3000/user?username=${formData.username}&password=${formData.password}`);
    const users = await res.json();

    if (users.length > 0) {
      navigate("/home"); // Redirect to Home page
    } else {
    alert("Invalid Credentials");
    }
};

return (
    <div>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
        <input name="username" type="text" placeholder="Username" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
    </form>
    </div>
);
}

export default Login;
