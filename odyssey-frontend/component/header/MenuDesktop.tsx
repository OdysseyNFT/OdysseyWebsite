import {Container, Icon, Stack, SvgIcon, Typography} from "@mui/material";
import {NextRouter, useRouter} from "next/router";
import {Link as ScrollLink} from "react-scroll";

export const frgMenuData = [
    {
        href: "/",
        tabContent: "Mint"
    },
    {
        href: "/about",
        tabContent: "About"
    },
    {
        href: "/roadmap",
        tabContent: "Roadmap"
    },
    {
        href: "/faq",
        tabContent: "FAQ"
    },
    {
        href: "/team",
        tabContent: "Team"
    }
]

function MenuDesktop() {

    return (
        <Container>

            <Stack alignItems="center" justifyItems="center">
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={4}
                    justifyItems="center"
                >
                    {
                        frgMenuData.map((menu, index) => (
                            <Typography variant="h4" color={'white'} component={ScrollLink} to={menu.tabContent} spy
                                        smooth offset={-100} sx={{
                                cursor: "pointer",
                                textTransform: "uppercase",
                            }} key={index}>
                                {menu.tabContent}
                            </Typography>
                        ))
                    }
                </Stack>
            </Stack>


        </Container>
    )

}

export default MenuDesktop