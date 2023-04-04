import React, {useState} from 'react';
import { firestore } from './firebaseConfig';
import {
    CharacterCreationBackground,
    ScrollButton,
    ScrollForm, ScrollFormContainer,
    ScrollFormIndividualContainer, ScrollInput,
    ScrollLabel, ScrollReturnButtonContainer, ScrollTitle,
    ScrollValidationButtonContainer
} from "./globalStyle";

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

function ScrollReturn({label}) {
    return (
        <ScrollReturnButtonContainer>
            <ScrollButton>{label}</ScrollButton>
        </ScrollReturnButtonContainer>
    );
}

function CharacterCreation() {
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
        firestore.addDoc(firestore.collection(firestore.getFirestore(), "/characters"), {
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
                    <ScrollFillUp htmlFor="name" label="Nom" type="text" id="name"
                                  name="name" value={formData.name} onChange={handleChange}/>
                    <ScrollFillUp htmlFor="class" label="Classe" type="text" id="class"
                                  name="class" value={formData.class} onChange={handleChange}/>
                    <ScrollFillUp htmlFor="race" label="Race" type="text" id="race"
                                  name="race" value={formData.race} onChange={handleChange}/>
                    <ScrollFillUp htmlFor="hp" label="Points de vie" type="number" id="hp"
                                  name="hp" value={formData.hp} onChange={handleChange}/>
                    <ScrollFillUp htmlFor="strength" label="Force" type="number" id="strength"
                                  name="strength" value={formData.strength} onChange={handleChange}/>
                    <ScrollFillUp htmlFor="intelligence" label="Intelligence" type="number" id="intelligence"
                                  name="intelligence" value={formData.intelligence} onChange={handleChange}/>
                    <ScrollFillUp htmlFor="observation" label="Observation" type="number" id="observation"
                                  name="observation" value={formData.observation} onChange={handleChange}/>
                    <ScrollFillUp htmlFor="agility" label="Agilité" type="number" id="agility"
                                  name="agility" value={formData.agility} onChange={handleChange}/>
                    <ScrollFillUp htmlFor="skills" label="Compétences" type="" id="skills"
                                  name="skills" value={formData.skills} onChange={handleChange}/>
                    <ScrollValidation label="Creer"/>
                </ScrollForm>
            </ScrollFormContainer>
            <ScrollReturn label="Retour"/>
        </CharacterCreationBackground>
    );
}

export default CharacterCreation;
