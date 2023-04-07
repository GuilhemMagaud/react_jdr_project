import {Box, TextField, styled} from "@mui/material";
import FichePerso from "./FichePerso";
import {useState} from "react";
import Background from "../../../background.png";

function SectionPerso() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const MainStyle = styled("div")({
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '100%',
        minHeight: '100vh',
        '@media (max-height: 750px)': {

        },
    })

    return (
        <div>
            <TextField label="Search ..." onChange={inputHandler} sx={{
                backgroundColor: "#C6A552",
                position: 'absolute',
                boxShadow: 2,
                mx: '10rem',
                width: '80%',
                height: '3.5rem',
                fontSize: '1.5rem',
                color: 'white',
                marginTop: '2rem'
            }} variant="filled">
            </TextField>
            <MainStyle>
                <Box sx={{display: 'flex'}}>
                    <FichePerso input={inputText}/>
                </Box>
            </MainStyle>
        </div>
    )
}

export default SectionPerso;
