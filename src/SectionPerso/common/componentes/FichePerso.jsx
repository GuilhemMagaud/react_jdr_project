import {Box, styled} from '@mui/material';
import Parchemin from '../../../parchemin.png';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Addperso from './Addperso';
import { Link } from 'react-router-dom';

const ParchinStyle = styled("div")({
    backgroundImage: `url(${Parchemin})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '260px',
    height: '340px'
})

function FichePerso({input}) {
    const [personnages, setPersonnages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/personnages')
            .then(response => {
                setPersonnages(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const filtrePerso = personnages.filter((j) => {
        if (input === '') {
            return j;
        } else {
            return j.name.toLowerCase().includes(input)
        }
    })

    return (
        <div>
            <Box sx={{display: 'inline-block'}}>
                {filtrePerso.map(personnage => (
                    <Box sx={{display: 'inline-block'}}>
                        <ParchinStyle key={personnage.id} sx={{
                            paddingLeft: '55px',
                            paddingTop: '35px',
                            paddingRight: '20px',
                            marginTop: '120px',
                            marginLeft: '25px'
                        }}>
                            <p>classe : {personnage.class}<br/>race : {personnage.race}</p>
                            <p>state: <br/>
                                point de vie : {personnage.hp}<br/>
                                force : {personnage.strength}<br/>
                                observation : {personnage.observation} <br/>
                                agilité : {personnage.agility} <br/>
                                intelligence : {personnage.intelligence}</p>
                            <p>compétence/ sort : {personnage.skills}</p>
                            <Box sx={{marginLeft: "35px", marginTop: "2rem"}}>{personnage.name}</Box>
                        </ParchinStyle>
                    </Box>
                ))}
                <Link to={"/characterCreation"}>
                    <Addperso/>
                </Link>
            </Box>
        </div>
    )
}

export default FichePerso;
