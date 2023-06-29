import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { updateToDo } from '../redux/TaskSlice';
import { useDispatch } from 'react-redux';

function ModalUpdateTask({ task }) {
    const [show, setShow] = useState(false);
    const [editTask, setEditTask] = useState(task.task)
    const [editStatus, setEditStatus] = useState(task.status ? "Complete" : "Incomplete")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{
                backgroundColor: "#fff",
                color: "black",
                border:"none"
            }}>
                <i className="fa-solid fa-pen"></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={editTask}
                                onChange={(e) => setEditTask(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <select name="" id="" style={{ width: "100%" }} value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
                                <option value="Incomplete">Incomplete</option>
                                <option value="Complete">Complete</option>
                            </select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" style={{background:"#646ff0"}} onClick={() => {
                        handleClose()
                        if (editStatus === "Complete") {
                            console.log(editStatus);
                            dispatch(updateToDo({
                                id: task.id,
                                task: editTask,
                                status: true
                            }))
                            setEditStatus(editStatus ? "Complete" : "Incomplete")
                        } else if (editStatus === "Incomplete") {
                            console.log(editStatus);
                            dispatch(updateToDo({
                                id: task.id,
                                task: editTask,
                                status: false
                            }))
                            setEditStatus(editStatus ? "Complete" : "Incomplete")
                        }
                        console.log("update");

                    }}>
                        Update Task
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateTask;