import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { Hightlight } from '../components/hightlight';

// Position of the titanic selector element
type Position = {
  top: number;
  left: number;
}

type PopupOneProps = {
  position: Position;
}

export function PopupOne({ position }: PopupOneProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    // Make the model appear on top of the selector element
    position: 'absolute',
    top: position.top,
    left: position.left,
    transform: 'translateY(-100%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,

    // Add a triangle pointing to the selector element
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-9px',
      left: '10%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderTop: '10px solid #fff'
    }
  };

  return (
    <div>
      <Button 
        onClick={handleOpen}
        variant='outlined'
      >
        <PlayArrowIcon 
          sx={{ 
            transform: 'rotate(180deg)' 
          }} 
        />
        Let's create your first model!
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Hightlight 
            position={position}
            width={150}
            height={40}
            type='rectangle'
          />

          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h6" fontSize="medium">
              Titanic Survival Predictor
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} component="p" fontSize="small">
              Titanic Survival Predictor predicts the likelihood of survival based on various factors. Double click on the elements to see the details.
            </Typography>
          </Box>
        </>
      </Modal>
    </div>
  );
}