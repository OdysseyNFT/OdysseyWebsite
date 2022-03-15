import {Button, Drawer, IconButton, Stack, Typography} from "@mui/material";
import {Fragment, useState} from "react";
import {frgMenuData} from "./MenuDesktop";
import MenuIcon from "@mui/icons-material/Menu";
import ConnectButton from "./ConnectButton";
import {Link as ScrollLink} from "react-scroll/modules";
import Image from "next/image";

function MenuMobile() {
    const [state, setState] = useState(false);

    function toggleDrawer() {
        setState(!state)
    }

    return (
        <Fragment key={'right'}>

            <IconButton
                onClick={toggleDrawer}
                sx={{
                    ml: 1,
                }}
            >
                <MenuIcon sx={{color: "white"}}/>
            </IconButton>

            <Drawer
                anchor={'right'}
                open={state}
                onClose={() => toggleDrawer()}
            >

                <Stack paddingTop={8} width={250} maxHeight={100} alignItems="center"
                       spacing={5}
                       justifyItems="center"
                       flex={1}>
                    <Stack height={30} width={140}>
                        <img src="/public/logo_odyssey_main.png"/>
                    </Stack>

                    {
                        frgMenuData.map((menu, index) => (
                            <Typography variant="h2" color={'black'} component={ScrollLink} to={menu.tabContent} spy
                                        smooth offset={-100} sx={{
                                cursor: "pointer",
                                textTransform: "uppercase",
                            }} key={index}>
                                {menu.tabContent}
                            </Typography>
                        ))
                    }
                    <ConnectButton/>
                </Stack>
            </Drawer>
        </Fragment>
    )

}

export default MenuMobile