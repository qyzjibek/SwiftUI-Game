import "./index.css"

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

export default function CustomizedDialogs({matchedColor}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      if(matchedColor != "") {
        setOpen(true);
      } else {
          alert("Oops, wrong answer. Try again!");
      }
  };

  const handleClose = () => {
    console.log("close");
    setOpen(false);
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
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Level 1 completed
        </BootstrapDialogTitle>
        <DialogContent>
        <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjofEiOVY3vCFVUY_XTfQTp9i8HP_fScdsXfo-8k55ZW8wDxgHPwVE1bTAbgYgPZEH9Gg&usqp=CAU"
      alt="SwiftUI Logo"
      />
        </DialogContent>
        <DialogActions>
        <button onClick={handleClose} className='check-btn' style={{marginLeft: '200px'}}>
            Next Level
        </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
