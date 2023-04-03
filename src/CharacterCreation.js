import React, {useState} from 'react';
import styled from 'styled-components';

import backgroundImage from './background.png';
import scrollImage from './scroll.png';
import {Fonts} from './fonts/CustomFonts';

const CharacterCreationBackground = styled.div
    `
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center;
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    `;

const ScrollFormContainer = styled.div
    `
      background-image: url(${scrollImage});
      background-size: cover;
      background-position: center;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      aspect-ratio: 4/5;
      height: 100%;
      max-width: 100%;
    `;

const ScrollFormContainer2 = styled.div
    `
      padding: 200px;
    `;

const ScrollTitle = styled.h1
    `
      ${Fonts};
      font-family: 'Breathe Fire', "MS Gothic", serif;
      text-align: center;
      margin-bottom: 50px;
    `;

const ScrollFormIndividualContainer = styled.div
    `
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 10px;
    `;

const ScrollLabel = styled.label
    `
      ${Fonts};
      font-family: 'Breathe Fire', "MS Gothic", serif;
      margin-right: 10px;
      width: 150px;
    `;

const ScrollInput = styled.input
    `
      flex: 1;
      background-color: wheat;
      padding: 10px;
      border-radius: 5px;
      margin-right: 10px;
      width: 100%;
      max-width: 400px;
    `;

const ScrollButtonContainer = styled.div
    `
        text-align: center;
    `;

const ScrollButton = styled.button
    `
      ${Fonts};
      font-family: 'Breathe Fire', "MS Gothic", serif;
      font-size: large;
      background-color: wheat;
      border-radius: 5px;
      margin-top: 25px;
      padding: 5px;
    `;

function ScrollForm({htmlFor, label, type, id, name, placeholder, value}) {
    return (
        <ScrollFormIndividualContainer>
            <ScrollLabel htmlFor={htmlFor}>{label}:</ScrollLabel>
            <ScrollInput type={type} id={id} name={name} placeholder={placeholder} value={value}/>
        </ScrollFormIndividualContainer>
    );
}

function ScrollValidation({label}) {
    return (
        <ScrollButtonContainer>
            <ScrollButton>{label}</ScrollButton>
        </ScrollButtonContainer>
    );
}

function CharacterCreation() {
    const [formData, setFormData] = useState({
        name: '',
        class: '',
        race: '',
        hp: null,
        strength: null,
        intelligence: null,
        observation: null,
        agility: null,
        skills: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <CharacterCreationBackground>
            <ScrollFormContainer>
                <ScrollFormContainer2>
                    <ScrollTitle>Creation du personnage</ScrollTitle>
                    <ScrollForm htmlFor="name" label="Nom" type="text" id="name"
                                name="name" value={formData.name}/>
                    <ScrollForm htmlFor="class" label="Classe" type="text" id="class"
                                name="class" value={formData.class}/>
                    <ScrollForm htmlFor="race" label="Race" type="text" id="race"
                                name="race" value={formData.race}/>
                    <ScrollForm htmlFor="hp" label="Points de vie" type="number" id="hp"
                                name="hp" value={formData.hp}/>
                    <ScrollForm htmlFor="strength" label="Force" type="number" id="strength"
                                name="strength" value={formData.strength}/>
                    <ScrollForm htmlFor="intelligence" label="Intelligence" type="number" id="intelligence"
                                name="intelligence" value={formData.intelligence}/>
                    <ScrollForm htmlFor="observation" label="Observation" type="number" id="observation"
                                name="observation" value={formData.observation}/>
                    <ScrollForm htmlFor="agility" label="Agilité" type="number" id="agility"
                                name="agility" value={formData.agility}/>
                    <ScrollForm htmlFor="skills" label="Compétences" type="" id="skills"
                                name="skills" value={formData.skills}/>
                    <ScrollValidation label="Creer"/>
                </ScrollFormContainer2>
            </ScrollFormContainer>
        </CharacterCreationBackground>
    );
}

export default CharacterCreation;
