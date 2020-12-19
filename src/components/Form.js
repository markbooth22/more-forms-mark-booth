import React, {useState} from "react"

const Form = (props) => {
    const [ state, setState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        firstNameTouched: false,
        lastNameTouched: false,
        emailTouched: false,
        passwordTouched: false,
        confirmPasswordTouched: false
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value,
            [`${name}Touched`]: true
        });
    };

    const { firstName, lastName, email, password, confirmPassword, firstNameTouched, lastNameTouched, emailTouched, passwordTouched, confirmPasswordTouched} = state;
    const firstNameError = firstName.length < 2 && firstNameTouched 
    const lastNameError = lastName.length < 2 && lastNameTouched
    const emailError = email.length < 5 && emailTouched
    const confirmPasswordError = password !== confirmPassword && confirmPasswordTouched

    const passwordValidation = () => {
        const { password, passwordTouched } = state;
        if(password.length < 8 && passwordTouched){
            return "Password must be as least 8 characters";
        }
        else if(password.length > 32 && passwordTouched ){
            return "Password must be as less than 32 character"
        }
        else if(password.startsWith(' ') && passwordTouched){
            return "Password must not start with a space"
        }
        else if(password.endsWith(' ') && passwordTouched){
            return "Password must not end with a space"
        }
        else{
            return false;
        }
    }

    const passwordError = passwordValidation();


    return (
        
        <form className="Form">
            <div>
                <label>First Name: </label>
                <input onChange={handleOnChange} type="text" name="firstName"  />
                {firstNameError && <p>First Name must be as least 2 characters</p>}
            </div>
            <div>
                <label>Last Name: </label>
                <input onChange={handleOnChange} type="text" name="lastName" />
                {lastNameError && <p>Last Name must be as least 2 characters</p>}
            </div>
            <div>
                <label>Email: </label>
                <input onChange={handleOnChange} type="text" name="email" />
                {emailError && <p>Email must be as least 5 characters</p>}
            </div>
            <div>
                <label>Password: </label>
                <input onChange={handleOnChange} type="password" name="password" />
                {passwordError && <p>{passwordError}</p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input onChange={handleOnChange} type="password" name="confirmPassword" />
                {confirmPasswordError && <p>Passwords must match</p>}
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
    );
};

export default Form;
