import {createTheme} from '@mui/material/styles';

const FONT_PRIMARY = "KeepCalm"; // Google Font

export const theme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                sx: {borderRadius: 0, borderColor: 'white', borderWidth: 2}
            }
        }
    },
    palette: {
        primary: {
            main: "#ff9ddb"
        },
        error: {
            main: "#FF5959"
        }
    },
    typography: {
        h1: {
            fontSize: 42,
            fontWeight: 200,
            fontFamily: FONT_PRIMARY
        },
        h2: {
            fontSize: 28,
            fontWeight: 200,
            fontFamily: FONT_PRIMARY,
        },
        h3: {
            fontSize: 22,
            fontWeight: 200,
            fontFamily: FONT_PRIMARY
        },
        h4: {
            fontSize: 18,
            fontWeight: 200,
            fontFamily: FONT_PRIMARY
        },
        h5: {
            fontSize: 14,
            fontWeight: 200,
            fontFamily: FONT_PRIMARY
        },
        body1: {
            fontSize: 14,
            fontWeight: 200,
            fontFamily: FONT_PRIMARY
        },
        body2: {
            fontSize: 12,
            fontFamily: FONT_PRIMARY
        },
        caption: {
            fontSize: 10,
            fontFamily: FONT_PRIMARY
        },
        button: {
            fontSize: 12,
            fontFamily: FONT_PRIMARY
        }
    }
});


export const Custom = {
    grey: '#828282',
    vaderBlue: "#26a4fe",
    vaderLightBlue: "#3de7fc",
    vaderLightPink: "#fec9fe",
    vaderPink: "#ff9ddb",
    vaderDarkPink: "#ff00ba",
    vaderOtherPink: "#ff65ac",
    vaderYellow: "#ffbf00"
}
