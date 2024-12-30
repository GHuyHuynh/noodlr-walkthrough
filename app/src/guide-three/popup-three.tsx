import React from 'react';
import { Box, Modal, Typography } from '@mui/material';

type PopupThreeProps = {
  position: {
    top: number;
    left: number;
    right: number;
    width: number;
    height: number;
  }
}

export function PopupThree({ position }: PopupThreeProps) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'fixed',
    top: position.top,
    left: position.left + (position.width || 0),
    transform: 'translate(20px, -50%)',
    width: 200,
    height: 70,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,

    // arrow styles
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '60%',
      left: '-9px',
      transform: 'translateY(-50%)',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '10px 10px 10px 0',
      borderColor: 'transparent #fff transparent transparent'
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" component="p" fontSize="medium">
          Click the play button and train your first AI model all locally on your browser!
        </Typography>
      </Box>
    </Modal>
  )
}
