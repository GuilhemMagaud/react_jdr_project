import { Box, TextField } from "@mui/material";
import FichePerso from "./FichePerso";
import { useState } from "react";

function SectionPerso(){
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    
    return(
        <div>
            <TextField label="Search ..." onChange={inputHandler} sx={{backgroundColor: "#C6A552", boxShadow: 2, mx: '10rem', width: '80%', height: '3.5rem', fontSize: '1.5rem', color: 'white', marginTop: '2rem' }} variant="filled">
            </TextField>
            <Box sx={{display: 'flex'}}>
                <FichePerso input={inputText}/>
            </Box>
        </div>
    )
}

export default SectionPerso;