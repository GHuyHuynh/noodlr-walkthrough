import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

type Position = {
  top: number;
  left: number;
}

type GuideOneProps = {
  position: Position;
}

export function GuideOne({ position }: GuideOneProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: position.top,
    left: position.left,
    transform: 'translateY(-100%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
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
      <Button onClick={handleOpen}>
        <PlayArrowIcon />
        Start Here
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            Select Titanic Survival Predictor
          </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} component="p">
            Titanic Survival Predictor predicts the likelihood of survival based on various factors. Click on the elements to see the details.
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}