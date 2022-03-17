import {Avatar, Button, Dialog, DialogContent, Stack, Typography} from "@mui/material";
import {useAppSelector} from "../../hooks/hooks";
import {useState} from "react";

export default function VaderButton() {

    const app = useAppSelector((state) => state.app)
    const [open, setOpen] = useState(false);

    return (
        <Stack>
            <Button
                variant="contained"
                sx={{
                    borderRadius: 12,
                    borderWidth: 2,
                    height: 40,
                    background: 'linear-gradient(to right, #26a4fe 40%, #3de7fc 95%)'
                }}
                startIcon={<Avatar src='xvader.png' sx={{width: 32, height: 32}}/>}
                onClick={() => setOpen(true)}
            >
                {app.xvaderProjectBalance} xvader
            </Button>

            {/* Claim rewards dialog */}
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: {
                        bgcolor: "white",
                        backdropFilter: "blur(10px)",
                    },
                }}
            >
                <DialogContent sx={{background: 'linear-gradient(12deg, #26a4fe 20%, #ff9ddb 70%)'}}>
                    <Stack justifyContent="center" spacing={1} alignItems="center">
                        <Typography align={"center"} color="black" variant="h2" fontWeight={"bold"} fontSize={20}
                                    mb={2}>
                            Claim your $xVader royalties
                        </Typography>

                        <img src={"xvader.png"} height={72} width={72}/>

                        <Typography align={"center"} color="black" variant={"h5"}>
                            Total project royalties<br/> <b>{app.xvaderProjectBalance} $xVader</b>
                            <br/> ~{app.xvaderUsdTotal} $USD
                        </Typography>
                        <br/>
                        <Typography align={"center"} color="black">
                            You are entitled to<br/> <b>{app.xvderUserShare} $xVader</b>
                            <br/> ~{app.xvaderUSerTotal} $USD
                        </Typography>
                        <br/>
                        <Button
                            variant="contained"
                            disabled={true}
                            sx={{
                                borderRadius: 12,
                                borderWidth: 2,
                                height: 40,
                            }}
                        >
                            Claim royalties
                        </Button>
                        <Typography align={"center"} color="black" fontStyle={"italic"} fontSize={14}>
                            you can claim on december 20, 2022
                        </Typography>
                    </Stack>
                </DialogContent>
            </Dialog>
        </Stack>
    )
}
