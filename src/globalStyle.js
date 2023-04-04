import styled from "styled-components";
import backgroundImage from "./background.png";
import scrollImage from "./scroll.png";
import {Fonts} from "./fonts/CustomFonts";

export const CharacterCreationBackground = styled.div
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

export const ScrollFormContainer = styled.div
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

export const ScrollForm = styled.form
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

export const ScrollTitle = styled.h1
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

export const ScrollFormIndividualContainer = styled.div
    `
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 1%;
    `;

export const ScrollLabel = styled.label
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

export const ScrollInput = styled.input
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
        padding: 0;
      }

      @media (width < 670px) {
        padding: 0;
        min-width: 100px;
      }
    `;

export const ScrollValidationButtonContainer = styled.div
    `
      text-align: center;
    `;

export const ScrollReturnButtonContainer = styled.div
    `
      position: fixed;
      top: 1em;
      left: 1em;
    `;

export const ScrollButton = styled.button
    `
      ${Fonts};
      font-family: 'Breathe Fire', "MS Gothic", serif;
      font-size: large;
      background-color: wheat;
      border-radius: 5px;
      margin-top: 10%;
      padding: 5px;

      @media (height < 670px) {
        padding: 0;
        font-size: small;
      }

      @media (width < 670px) {
        padding: 0;
        font-size: small;
      }
    `;
