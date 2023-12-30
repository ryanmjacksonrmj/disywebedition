
import { Link, useNavigate } from "react-router-dom";
import { useState, } from "react";
import FormContainer from "../components/FormContainer";
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";

function Register() {
	const navigate = useNavigate()
	const [values, setValues] = useState({ username: "", email: "", password: "", confirmPassword: ""});
	
const toastOptions = {
	position: "bottom-right",
	autoClose: 8000,
	pauseOnHover: true,
	draggable: true,
	theme: "dark",
}
// useEffect(() => {
// 	if (localStorage.getItem("disy-app-user")) {
// 		navigate("/");
// 	}
// }, []);

const handleSubmit = async (event) => {
	event.preventDefault();
	if (handleValidation()) {
		const { password, username, email } = values;
		const { data } = await axios.post(registerRoute, {
			username,
			email,
			password,
		});
		if(data.status===false){
				toast.error(data.msg, toastOptions)
		}
		if(data.status===true){
			localStorage.setItem('disy-app-user', JSON.stringify(data.user));
			navigate("/");
		}
	}
}

const handleValidation = () => {
	const { password, confirmPassword, username, email } = values;
	if (password !== confirmPassword) {
		toast.error("Password and Confirm Password Must Match", toastOptions);
		return false;
	} else if (username.length < 6) {
		toast.error("Username must be at least 6 characters", toastOptions);
		return false;
	} else if (password.length < 8) {
		toast.error("Password must be at least 8 characters", toastOptions);
		return false;
	} else if (email === "") {
		toast.error("Email is required", toastOptions);
		return false;
	}
	return true;
};

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};


	
	return (
		<>
			<FormContainer>
				<form onSubmit={(event) => handleSubmit(event)}>
					<div className="brand"> 
						<h1>DISY</h1>
					</div>
					<input type="text" placeholder="Username" name="username" onChange={(e) => handleChange(e)} />				
					<input type="email" placeholder="Email" name="email" onChange={(e) => handleChange(e)} />				
					<input type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />				
					<input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={(e) => handleChange(e)} />
					<button type="submit">Create User</button>
					<span>
						Already have an account? <Link to="/login">Login Here</Link>	
					</span>				
				</form>
			</FormContainer>
			<ToastContainer />			
		</>
	);
}



export default Register;