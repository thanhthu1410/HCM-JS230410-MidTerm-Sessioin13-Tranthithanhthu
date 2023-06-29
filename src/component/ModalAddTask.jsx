import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../redux/TaskSlice';
import { randomId } from '@mieuteacher/meomeojs';
import toast, { Toaster } from 'react-hot-toast';


function AddTask(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [task, setTask] = useState("")
  const [status, setStatus] = useState("Incomplete")

  const listTask = useSelector(state => state.todoList)
  
  const dispatch = useDispatch();

  const notify = (text) => {
    toast.success(text, {
      position: 'top-right',
    });
  };

  function getCurrentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var currentTime = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + ampm + " " + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    return currentTime;
  }
  var currentTime = getCurrentTime();
  return (
    <div>
      <h1 >TODO LIST</h1>
      <div className='headerBottom'>
        <Button style={{background:"#646ff0",color:"#fff"}} variant="primary" onClick={handleShow}>
          ADD TODO
        </Button >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter task ... "
                  autoFocus
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Status</Form.Label> <br />
                <select name="" id="" style={{ width: "100%", padding: "10px" }} onChange={(e) => setStatus(e.target.value)} >
                  <option value="Incomplete">Incomplete</option>
                  <option value="Complete">Complete</option>
                </select>

              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" style={{background:"#646ff0"}} onClick={() => {
              handleClose()
              if (task !== ""){
                if (status === "Complete") {
                  {
                    dispatch(addToDo({
                      id: randomId(),
                      task,
                      status: true,
                      time: currentTime
                    }))
                    
                  }

                 setStatus("Incomplete")
                 notify("successly")
                } else if (status === "Incomplete") {
                  dispatch(addToDo({
                    id: randomId(),
                    task,
                    status: false,
                    time: currentTime
                  }))
                  setStatus("Incomplete")
                  notify("successfully")
                }
              } else {
                notify("failed")
              }
              setTask("")
              
            }}>
              Add Task
            </Button>
          </Modal.Footer>
        </Modal>
        <select onChange={(e) => {
          props.setFilterStatus(e.target.value)
        }} name="" id="" style={{width:"150px", border:"none"}}>
          <option value={null} >All</option>
          <option value={true} >Complete</option>
          <option value={false}>Incomplete</option>
        </select>
      </div>
      <Toaster />
    </div>
  );
}

export default AddTask;