import {styled} from "@mui/material/styles";
import {Box, Button, Input, Typography} from "@mui/material";
import backgroundImage from "./background.png";
import scrollImage from "./scroll.png";
import { breatheFire } from "./fonts/CustomFonts";

export const CharacterCreationBackground = styled(Box)({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
});

export const ScrollFormContainer = styled(Box)(
    {
        backgroundImage: `url(${scrollImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        aspectRatio: "4/5",
        height: "100%",

        '@media (orientation: portrait)': {
            width: "100%",
            height: "auto",
        },
    });

export const ScrollForm = styled("form")(
    {
        paddingLeft: "15%",
        paddingRight: "15%",
        paddingTop: "20%",
        paddingBottom: "20%",

        '@media (orientation: portrait)': {
            paddingTop: "25%",
            paddingBottom: "30%",
        },
    });

export const ScrollTitle = styled(Typography)(
    {
        fontFamily: "Breathe Fire, MS Gothic, serif",
        textAlign: "center",
        fontSize: "xx-large",
        marginBottom: "10%",

        '@media (max-height: 670px)': {
            fontSize: "small",
        },

        '@media (max-width: 670px)': {
            fontSize: "small",
        },
    });

export const ScrollFormIndividualContainer = styled(Box)(
    {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "1%",
    })
;

export const ScrollLabel = styled("label")(
    {
        ...breatheFire,
        fontFamily: "Breathe Fire, MS Gothic, serif",
        fontSize: "large",
        marginRight: "10px",
        width: "150px",

        '@media (max-height: 670px)': {
            fontSize: "small",
        },

        '@media (max-width: 670px)': {
            fontSize: "small",
        },
    })
;

export const ScrollInput = styled(Input)({
    flex: 1,
    backgroundColor: "wheat",
    borderRadius: "5px",
    marginRight: "10px",
    width: "100%",
    maxWidth: "400px",
    minWidth: "130px",

    '@media (max-height: 670px)': {
        padding: 0,
    },

    '@media (max-width: 670px)': {
        padding: 0,
        minWidth: "100px",
    },
});

export const ScrollValidationButtonContainer = styled(Box)({
    textAlign: "center",
});

export const ScrollReturnButtonContainer = styled(Box)({
    position: "fixed",
    top: "1em",
    left: "1em",
});

export const ScrollButton = styled(Button)({
    fontFamily: 'Breathe Fire, "MS Gothic", serif',
    fontSize: 'large',
    backgroundColor: 'wheat',
    borderRadius: '5px',
    marginTop: '10%',
    padding: '5px',
    '@media (max-height: 670px)': {
        padding: '0',
        fontSize: 'small',
    },
    '@media (max-width: 670px)': {
        padding: '0',
        fontSize: 'small',
    },
});
