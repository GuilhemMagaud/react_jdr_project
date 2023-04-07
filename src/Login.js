import React, { useState } from 'react';
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
    CharacterCreationBackground,
    ScrollButton, ScrollForm, ScrollFormContainer,
    ScrollFormIndividualContainer,
    ScrollInput,
    ScrollLabel, ScrollTitle,
    ScrollValidationButtonContainer
} from './globalStyle'

function ScrollFillUp({htmlFor, label, type, id, name, value, onChange}) {
    return (
        <ScrollFormIndividualContainer>
            <ScrollLabel htmlFor={htmlFor}>{label}:</ScrollLabel>
            <ScrollInput type={type} id={id} name={name} value={value} onChange={onChange}/>
        </ScrollFormIndividualContainer>
    );
}

function ScrollValidation({label}) {
    return (
        <ScrollValidationButtonContainer>
            <ScrollButton type='submit'>{label}</ScrollButton>
        </ScrollValidationButtonContainer>
    );
}

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(auth.getAuth(), formData.email, formData.password);
            console.log('Successfully logged in!');
            navigate('/characterCreation');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CharacterCreationBackground>
            <ScrollFormContainer>
                <ScrollForm onSubmit={handleSubmit}>
                    <ScrollTitle>Connexion</ScrollTitle>
                    <ScrollFillUp htmlFor="email" label="Adresse Email" type="email" id="email"
                                  name="email" value={formData.email} onChange={handleChange}/>
                    <ScrollFillUp htmlFor="password" label="Mot de passe" type="password" id="password"
                                  name="password" value={formData.password} onChange={handleChange}/>
                    <ScrollValidation label="Se connecter"/>
                </ScrollForm>
            </ScrollFormContainer>
        </CharacterCreationBackground>
    );
}

export default Login;
