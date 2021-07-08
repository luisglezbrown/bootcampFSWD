import { Redirect, useHistory } from "react-router";
import { LOGIN_URL } from "../config/config";
import { useForm } from "../hooks/useForm";
import { useAuthContext } from "../context/AuthContext";

export default function Login() {
    const [form, handleChange] = useForm({email: "admin@codespace.com", password: "root"})
    const {signIn, isAuthenticated} = useAuthContext();
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(LOGIN_URL, options);
        const data = await response.json();
        
        if(response.status >= 200 && response.status < 300) {
            signIn(data.token, data.user);
            history.push("/myaccount")
        } else {
            alert("Login incorrecto");
        }
    };
    
    // Antes de procesar el JSX comprueba si está autenticado, si lo está, lo redirige al dashboard
    return isAuthenticated ? <Redirect to="/dashboard" /> : (
        <div className="d-flex justify-content-center pt-5">
            <form onSubmit={handleSubmit} className="w-50 form-group bg-primary p-5 rounded">
                <h3 className="text-light mb-3">Log in! </h3>
                <span></span>
                <input onChange={handleChange} value={form.email} name="email" type="email" className="form-control mb-3" placeholder="Introduce tu email"/>
                <input onChange={handleChange} value={form.password} name="password" type="password" className="form-control mb-3" placeholder="************"/>
                <input type="submit" value="Login" className="btn btn-dark" />
            </form>
        </div>
    )
}
