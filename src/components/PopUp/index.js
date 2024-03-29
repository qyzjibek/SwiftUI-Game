import "./index.css"
import { useContext, useState } from "react";
import { EditorContext, StyleContext, LevelContext } from "../../Context";

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
import { Link } from "react-router-dom";

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
  const {maxLevel, setProgress} = useContext(LevelContext);
  const { handleLevelIncr, editorContent } = useContext(EditorContext);
  const { customStyle, setShowConfetti,customView, setCustomView } = useContext(StyleContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    const answer = level < 11 ? isValidAnswer(customStyle) : isValidAnswer(editorContent);
    console.log(customStyle)
    console.log(setShowConfetti)
    console.log(customView, setCustomView);
    //console.log(StyleContext);
    // console.log(customView)


    if(answer) {
      setProgress((prev) => (prev.includes(level) ? prev : [...prev, level]));
      setShowConfetti(true);
      setOpen(true);
    } else {
      console.log("i am here")
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
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{borderRadius: "22px"}}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={{width: "100%", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"}}>
        </BootstrapDialogTitle>
        <DialogContent className="dialog-content" style={{padding: "22px 22px 0 22px"}}>
          <BirdLogoSVG style={{position: "initial", height: "4rem"}} />
          <h3 className="score" style={{lineHeight: "1.75rem", fontSize: "inherit", margin: "10px 0", color: "black"}}>
            Level {level} completed!
          </h3>
        </DialogContent>
        <DialogActions>
        {level === maxLevel ? <Link to="/resources">
                              <button onClick={() => {
                                setOpen(false);
                                setTimeout(() => {
                                  setShowConfetti(false);
                                }, 2000);
                              }} className='check-btn' style={{marginLeft: '160px'}}>
                                  Finish
                              </button></Link> 
                            : <button onClick={handleClose} className='check-btn' style={{marginLeft: '160px'}}>
                                  Next Level
                              </button>
        }
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
