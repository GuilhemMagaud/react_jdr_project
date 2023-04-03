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

      @media (orientation: portrait) {
        width: 100%;
        height: auto;
      }
    `;

const ScrollFormContainer2 = styled.div
    `
      padding-left: 15%;
      padding-right: 15%;
      padding-top: 20%;
      padding-bottom: 20%;

      @media (orientation: portrait) {
        padding-left: 15%;
        padding-right: 15%;
        padding-top: 25%;
        padding-bottom: 30%;
      }
    `;

const ScrollTitle = styled.h1
    `
      ${Fonts};
      font-family: 'Breathe Fire', "MS Gothic", serif;
      text-align: center;
      margin-bottom: 10%;

      @media (height < 670px) {
        font-size: small;
      }

      @media (width < 670px) {
        font-size: small;
      }
    `;

const ScrollFormIndividualContainer = styled.div
    `
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 1%;
    `;

const ScrollLabel = styled.label
    `
      ${Fonts};
      font-family: 'Breathe Fire', "MS Gothic", serif;
      font-size: large;
      margin-right: 10px;
      width: 150px;

      @media (height < 670px) {
        font-size: small;
      }

      @media (width < 670px) {
        font-size: small;
      }
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
      min-width: 130px;

      @media (height < 670px) {
        padding: 0px;
      }

      @media (width < 670px) {
        padding: 0px;
        min-width: 100px;
      }
    `;

const ScrollValidationButtonContainer = styled.div
    `
      text-align: center;
    `;

const ScrollReturnButtonContainer = styled.div
    `
      position: fixed;
      top: 1em;
      left: 1em;
    `;

const ScrollButton = styled.button
    `
      ${Fonts};
      font-family: 'Breathe Fire', "MS Gothic", serif;
      font-size: large;
      background-color: wheat;
      border-radius: 5px;
      margin-top: 10%;
      padding: 5px;

      @media (height < 670px) {
        padding: 0px;
        font-size: small;
      }

      @media (width < 670px) {
        padding: 0px;
        font-size: small;
      }
    `;

function ScrollForm({htmlFor, label, type, id, name, value}) {
    return (
        <ScrollFormIndividualContainer>
            <ScrollLabel htmlFor={htmlFor}>{label}:</ScrollLabel>
            <ScrollInput type={type} id={id} name={name} value={value}/>
        </ScrollFormIndividualContainer>
    );
}

function ScrollValidation({label}) {
    return (
        <ScrollValidationButtonContainer>
            <ScrollButton>{label}</ScrollButton>
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
        name: 'nom',
        class: 'classe',
        race: 'race',
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
                    <form>
                        <ScrollTitle>Creation du personnage</ScrollTitle>
                        <ScrollForm htmlFor="name" label="Nom" type="text" id="name"
                                    name="name"/>
                        <ScrollForm htmlFor="class" label="Classe" type="text" id="class"
                                    name="class"/>
                        <ScrollForm htmlFor="race" label="Race" type="text" id="race"
                                    name="race"/>
                        <ScrollForm htmlFor="hp" label="Points de vie" type="number" id="hp"
                                    name="hp"/>
                        <ScrollForm htmlFor="strength" label="Force" type="number" id="strength"
                                    name="strength"/>
                        <ScrollForm htmlFor="intelligence" label="Intelligence" type="number" id="intelligence"
                                    name="intelligence"/>
                        <ScrollForm htmlFor="observation" label="Observation" type="number" id="observation"
                                    name="observation"/>
                        <ScrollForm htmlFor="agility" label="Agilité" type="number" id="agility"
                                    name="agility"/>
                        <ScrollForm htmlFor="skills" label="Compétences" type="" id="skills"
                                    name="skills"/>
                        <ScrollValidation label="Creer"/>
                    </form>
                </ScrollFormContainer2>
            </ScrollFormContainer>
            <ScrollReturn label="Retour"/>
        </CharacterCreationBackground>
    );
}

export default CharacterCreation;
