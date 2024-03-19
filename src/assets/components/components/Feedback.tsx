import React, { FC, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoicon from "./images/logo/logo-icon.png";
import logofeed from "./images/logo/feedback.png";
import { User } from '../usersdata';

interface HomeProps {
    currentUser?: User; 
}

const FeedbackModal: FC<HomeProps> = ({ currentUser }) => {
    const [showModal, setShowModal] = useState(false);
    const [feedback, setFeedback] = useState('');

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://nodejs-mysql-dbcollege-api-oriyami.onrender.com/api/v1/posts1/postfeedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: currentUser?.user_id,
                    feedback_des: feedback
                })
            });

            if (response.ok) {
                toast.success('Feedback submitted successfully'); // Display success notification
                // Reset feedback state
                setFeedback('');
                // Close modal
                handleModalClose();
            } else {
                console.error('Failed to submit feedback');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    const imgStyle: React.CSSProperties = {
        position: 'fixed',
        bottom: '0',
        right: '0',
        margin: '50px',
        zIndex: 9999,
        cursor: 'pointer',
    };

    const modalStyle: React.CSSProperties = {
        zIndex: 99999, // Ensure the modal is displayed above other elements
    };

    return (
        <>
            <img src={logofeed} alt="Feedback Logo" style={imgStyle} onClick={handleModalOpen} />

            <Modal show={showModal} onHide={handleModalClose} centered style={modalStyle}>
                <Modal.Header closeButton>
                    <img src={logoicon} alt="Logo Icon" style={{ width: '50px', marginRight: '10px' }} />
                    <Modal.Title>Give Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* {currentUser && (
                        <div>
                          user:  {currentUser.user_id}
                        </div>
                    )} */}
                    <div className="mb-3">
                        <label htmlFor="feedback">How's your experience?</label>
                        <textarea className="form-control" id="feedback" rows={3} value={feedback} onChange={handleFeedbackChange}></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer /> {/* This component is needed for react-toastify to work */}
        </>
    );
};

export default FeedbackModal;
