import React , {useState}from 'react';
import {Link} from 'react-router-dom'






function Form () {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);



    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };


    const handleLastNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            lastName: event.target.value,
        }));
    };
    
    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();                                           //annuler le refresh
        if(values.firstName && values.lastName && values.email) {
            setValid(true);
        }
        setSubmitted(true);
        }

   

    return (
        <div className='form-container'>
            <form className='register-form'onSubmit={handleSubmit}>
                {submitted && valid ?<div className="success-message">Vous avez été enregistré avec succés</div> : null}
           
                <input 
                className='form-field'
                placeholder='prenom'
                name='prenom' 
                value={values.firstName}
                onChange={handleFirstNameInputChange}
                />
                {submitted && !values.firstName ?<span id="first-name-error">Veuillez entrer votre prenom</span> : null}
                <input
                className='form-field'
                placeholder='nom'
                name='nom'
                value={values.lastName}
                onChange={handleLastNameInputChange}
                />
                {submitted && !values.lastName ?<span id="last-name-error">Veuillez entrer votre nom</span> : null}
                <input
                className='form-field'
                placeholder='email'
                name='email' 
                value={values.email}
                onChange={handleEmailInputChange}
                />
                {submitted && !values.email ?<span id="email-error">veuillez entrer votre Email</span> : null}
            <button
                className='form-field'
                type="submit">Register</button>    
            </form>
        {/*     <li>
        <Link to={`/Form`}>Formulaire</Link>
            </li> */}
            
        </div>
    );
}

export default Form
