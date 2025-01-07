import React from 'react';
import { Box, Modal, Typography } from '@mui/material';

type PopupSixProps = {
  position: {
    top: number;
    left: number;
  }
}

export function PopupSix({ position }: PopupSixProps) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'fixed',
    top: position.top - 140,
    left: position.left - 120,
    width: 200,
    height: 80,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 3,

    // Arrow styles
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-9px',
      left: '222px',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderTop: '10px solid #fff',
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
          Your AI model is ready! Lets build your model application and try it out! 🚀
        </Typography>
      </Box>
    </Modal>
  );
}
