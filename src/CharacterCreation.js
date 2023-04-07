import React, { useState } from 'react';
import { auth, firestore } from './firebaseConfig';
import {
    CharacterCreationBackground,
    ScrollButton,
    ScrollForm, ScrollFormContainer,
    ScrollFormIndividualContainer, ScrollInput,
    ScrollLabel, ScrollReturnButtonContainer, ScrollTitle,
    ScrollValidationButtonContainer
} from "./globalStyle";
import {useNavigate} from "react-router-dom";

function ScrollFillUp({label, type, name, value, onChange, required = false}) {
    if (required) {
        return (
            <ScrollFormIndividualContainer>
                <ScrollLabel htmlFor={name}>{label + '*'}:</ScrollLabel>
                <ScrollInput type={type} id={name} name={name} value={value} onChange={onChange} required/>
            </ScrollFormIndividualContainer>
        );
    } else {
        return (
            <ScrollFormIndividualContainer>
                <ScrollLabel htmlFor={name}>{label}:</ScrollLabel>
                <ScrollInput type={type} id={name} name={name} value={value} onChange={onChange}/>
            </ScrollFormIndividualContainer>
        )
    }
}

function ScrollValidation({label}) {
    return (
        <ScrollValidationButtonContainer>
            <ScrollButton type='submit'>{label}</ScrollButton>
        </ScrollValidationButtonContainer>
    );
}

function ScrollReturn({label}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/characterSelection');
    }

    return (
        <ScrollReturnButtonContainer>
            <ScrollButton onClick={handleClick}>{label}</ScrollButton>
        </ScrollReturnButtonContainer>
    );
}

function CharacterCreation() {
    const user = auth.currentUser;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        class: '',
        race: '',
        hp: 0,
        strength: 0,
        intelligence: 0,
        observation: 0,
        agility: 0,
        skills: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        firestore.collection(`/characters`).add({
            user: user.uid,
            name: formData.name,
            class: formData.class,
            race: formData.race,
            hp: formData.hp,
            strength: formData.strength,
            intelligence: formData.intelligence,
            observation: formData.observation,
            agility: formData.agility,
            skills: formData.skills,
        })
            .then(() => {
                console.log("Personnage créé avec succès !");
                navigate('/characterSelection');
            })
            .catch((error) => {
                console.error("Erreur lors de la création du personnage : ", error);
            })
    };

    return (
        <CharacterCreationBackground>
            <ScrollFormContainer>
                <ScrollForm onSubmit={handleSubmit}>
                    <ScrollTitle>Creation du personnage</ScrollTitle>
                    <ScrollFillUp label="Nom" type="text" name="name" value={formData.name} onChange={handleChange} required={true}/>
                    <ScrollFillUp label="Classe" type="text" name="class" value={formData.class} onChange={handleChange} required={true}/>
                    <ScrollFillUp label="Race" type="text" name="race" value={formData.race} onChange={handleChange} required={true}/>
                    <ScrollFillUp label="Points de vie" type="number" name="hp" value={formData.hp} onChange={handleChange}/>
                    <ScrollFillUp label="Force" type="number" name="strength" value={formData.strength} onChange={handleChange}/>
                    <ScrollFillUp label="Intelligence" type="number" name="intelligence" value={formData.intelligence} onChange={handleChange}/>
                    <ScrollFillUp label="Observation" type="number" name="observation" value={formData.observation} onChange={handleChange}/>
                    <ScrollFillUp label="Agilité" type="number" name="agility" value={formData.agility} onChange={handleChange}/>
                    <ScrollFillUp htmlFor="skills" label="Compétences" type="text" name="skills" value={formData.skills} onChange={handleChange}/>
                    <ScrollValidation label="Creer"/>
                </ScrollForm>
            </ScrollFormContainer>
            <ScrollReturn label="Retour"/>
        </CharacterCreationBackground>
    );
}

export default CharacterCreation;
