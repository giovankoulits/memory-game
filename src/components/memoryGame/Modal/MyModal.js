import Modal from 'react-modal';
import Button from '../Button/Button';
import './Modal.css';

const MyModal = ({ open, close, tries }) => {
  //Modal Styles
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      animation: 'fadeIn 2s ease-in',
      background: '#ff7473',
      border: '8px solid #34314c',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      animation: 'fade-in 1s ease',
    },
  };
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <div className='modal-container '>
        <h1 className='modal-h1'>Congrats!</h1>
        <h2 className='modal-h2'>
          It took you <span>{tries}</span> tries to win the game
        </h2>

        <Button closeModal={close} />
      </div>
    </Modal>
  );
};

export default MyModal;
