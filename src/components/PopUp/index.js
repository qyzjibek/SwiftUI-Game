import "./index.css"
import { useContext } from "react";
import { EditorContext, StyleContext } from "../../Context";

import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {ReactComponent as BirdLogoSVG} from '../../assets/bird-logo.svg' 
import Confetti from 'react-confetti';
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, width: "100px" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({isValidAnswer, level}) {
  const { handleLevelIncr } = useContext(EditorContext);
  const { customStyle } = useContext(StyleContext);

  const [open, setOpen] = React.useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  // const { innerWidth: widthWindow, innerHeight: heightWindow } = window;

  const handleClickOpen = () => {
    // setOpen(true);
      if(isValidAnswer(customStyle)) {
        setShowConfetti(true);
        setOpen(true);
      } else {
          alert("Oops, wrong answer. Try again!");
      }
  };

  const handleClose = () => {
    setShowConfetti(false);
    setOpen(false);
    handleLevelIncr();
  };

  return (
    <div>
      <button onClick={handleClickOpen} className='check-btn'>
        Check answer
      </button>
      {showConfetti ? <Confetti width={966} height={562} colors={["#b0b", "#8c28c2", "#e30000", "#38a39c", "#4ca9ff"]} numberOfPieces={100}/> : <></>}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{borderRadius: '27px'}}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={{width: "100%", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"}}>

        </BootstrapDialogTitle>
        <DialogContent className="dialog-content" style={{padding: "22px"}}>
          <BirdLogoSVG style={{position: "initial", height: "4rem"}} />
          <h3 className="score" style={{lineHeight: "1.75rem", fontSize: "inherit", margin: "10px 0", color: "black"}}>
            Level {level} completed!
          </h3>
          <div className="score">
          + 10
          </div>
        </DialogContent>
        <DialogActions>
        <button onClick={handleClose} className='check-btn' style={{marginLeft: '160px'}}>
            Next Level
        </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
