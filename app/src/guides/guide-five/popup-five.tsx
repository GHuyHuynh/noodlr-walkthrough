import React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { Highlight } from '../../components/highlight';

type PopupFiveProps = {
  position: {
    top: number;
    left: number;
  }
}

export function PopupFive({ position }: PopupFiveProps) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'fixed',
    top: position.top - 150,
    left: position.left - 230,
    width: 200,
    height: 80,
    bgcolor: 'background.paper',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    boxShadow: 24,
    p: 3,

    // arrow styles
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-9px',
      left: 'calc(100% - 9px)',
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
      <>
        <Highlight
          position={position}
          width={30}
          height={30}
          type="circle"
          translateTop={-5}
          translateLeft={-5}
        />
        <Box sx={style}>
          <Typography id="modal-modal-description" component="p" fontSize="medium">
            Manage your local AI models in the console below
          </Typography>
        </Box>
      </>
    </Modal>
  )
}
