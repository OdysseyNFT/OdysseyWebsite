import {AppBar, Container, Hidden, makeStyles, Stack, Toolbar, Typography} from "@mui/material";
import MenuDesktop from "./MenuDesktop";
import {Box, color, styled} from "@mui/system";
import MenuMobile from "./MenuMobile";
import {useRouter} from "next/router";
import Image from "next/image";


export const DRAWER_WIDTH = 280;
export const TRANSITION_DURATION = 969;

interface IHeader {
    handleDrawerToggle: () => void;
    drawe: boolean;
}

const APP_BAR_MOBILE = 40;
const APP_BAR_DESKTOP = 70;

const ToolbarStyle = styled(Toolbar)(({theme}) => ({
    height: APP_BAR_MOBILE,
    [theme.breakpoints.up("md")]: {
        height: APP_BAR_DESKTOP,
    },
}));


function MenuBar(): JSX.Element {

    return (
        <AppBar position="sticky" elevation={0} sx={{
            justifyContent: "space-between", background: 'transparent'
        }}>
            <ToolbarStyle>
                <Hidden mdDown>
                    <Stack width={600} paddingLeft={6}>
                        <Stack height={30} width={140}>
                            <Typography>Test</Typography>
                        </Stack>
                    </Stack>
                </Hidden>
                <Container
                    maxWidth="xl"
                >
                    <Hidden mdDown>
                        {/*<MenuDesktop/>*/}
                    </Hidden>
                    <Hidden mdUp>
                        {/*<MenuMobile/>*/}
                    </Hidden>


                </Container>
                <Hidden mdDown>
                    <Stack width={600} paddingRight={6} direction={"row"} spacing={2}>
                       {/*<ConnectButton/>*/} 
                    </Stack>
                </Hidden>

                
            </ToolbarStyle>
        </AppBar>
    )

}

export default MenuBar