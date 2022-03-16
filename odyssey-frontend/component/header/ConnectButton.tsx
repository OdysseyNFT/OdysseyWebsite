   
import { useEthers } from '@usedapp/core';
import React, { useState } from 'react';
import Modal from './Modal';
import styles from '../../styles/Modal.module.css';
import { Button } from '@mui/material';
import { theme } from '../../styles/Theme'
import { ThemeProvider } from '@emotion/react';

function ConnectWallet(): JSX.Element {
  const { activate, activateBrowserWallet } = useEthers();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <ThemeProvider theme= {theme}>
        <Button
        sx={{ m: 0.5 }}
          variant="outlined"
          
          onClick={() => {
            setOpen(true);
          }}
        >
          Connect wallet
        </Button>
        </ThemeProvider>
       
      </div>

      <Modal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      >
        <div className={styles.dialog}>
        <ThemeProvider theme= {theme}>
          <Button
        sx={{ m: 0.5 }}
          variant="outlined"
            onClick={() => {
              activateBrowserWallet();
            }}
          >
            MetaMask
          </Button>
          <Button
        sx={{ m: 0.5 }}
          variant="outlined"
            onClick={() => {
                activateBrowserWallet();
            }}
          >
            WalletConnect
          </Button>
          </ThemeProvider>
        </div>
      </Modal>
    </>
  );
}

export default ConnectWallet;