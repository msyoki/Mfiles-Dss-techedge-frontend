import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../styles/App.css'


const ConfirmVoid=(props) =>{

  const handleClose = () => {
    props.setOpenDialogVoid(false);
  };
  const handleClose2 = (e) => {
    props.setOpenDialogVoid(false);
    props.voidDocument(e)
  };
  
  return (
    <div >
      <Dialog
        open={props.opendialogvoid}

        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        // className='App-header'
      >
        <DialogTitle style={{color:'#174291'}}>{"Void document?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please confirm you would like to void this document.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose2}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default  ConfirmVoid