import React, { useState } from 'react';
import './CharacterCreation.css';

function CharacterCreation() {
  const [name, setName] = useState('');
  const [classType, setClassType] = useState('');
  const [race, setRace] = useState('');
  const [healthPoints, setHealthPoints] = useState(0);
  const [strength, setStrength] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [observation, setObservation] = useState(0);
  const [agility, setAgility] = useState(0);
  const [skills, setSkills] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div class="global-background">
    <form class="character-creation-form" onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
            Class:
            <input type="text" value={classType} onChange={(event) => setClassType(event.target.value)} />
        </label>
        <label>
            Race:
            <input type="text" value={race} onChange={(event) => setRace(event.target.value)} />
        </label>
        <label>
            Health Points:
            <input type="number" value={healthPoints} onChange={(event) => setHealthPoints(event.target.value)} />
        </label>
        <label>
            Strength:
            <input type="number" value={strength} onChange={(event) => setStrength(event.target.value)} />
        </label>
        <label>
            Intelligence:
            <input type="number" value={intelligence} onChange={(event) => setIntelligence(event.target.value)} />
        </label>
        <label>
            Observation:
            <input type="number" value={observation} onChange={(event) => setObservation(event.target.value)} />
        </label>
        <label>
            Agility:
            <input type="number" value={agility} onChange={(event) => setAgility(event.target.value)} />
        </label>
        <label>
            Skills:
            <input type="text" value={skills} onChange={(event) => setSkills(event.target.value)} />
        </label>
        <button type="submit">Create Character</button>
        </form>
    </div>
  );
}

export default CharacterCreation;
