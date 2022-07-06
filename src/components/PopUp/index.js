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
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
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

  const handleClickOpen = () => {
    // setOpen(true);
      if(isValidAnswer(customStyle)) {
        setOpen(true);
      } else {
          alert("Oops, wrong answer. Try again!");
      }
  };

  const handleClose = () => {
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
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={{width: "100%", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"}}>
          Level {level} completed
        </BootstrapDialogTitle>
        <DialogContent className="dialog-content" style={{padding: "22px"}}>
        <img 
        style={{width:"70px",height:"64px",position:"initial"}}
      src="https://miro.medium.com/max/1400/1*ePoF2imvQpvI6dvDG_OnAw.png"
      alt="SwiftUI Logo"
      /> 
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
