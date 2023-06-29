import React, {useEffect, useState} from 'react'
import ModalUpdateTask from './ModalUpdateTask'
import { useDispatch } from 'react-redux'
import { removeToDo, updateStatus } from '../redux/TaskSlice'



export default function Task({ task }) {

    const dispatch = useDispatch()
    
    const [checkStatus,setCheckStatus] = useState(task.status)
    useEffect(() => {
        setCheckStatus(task.status)
    },[task.status])
    
   
   
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",backgroundColor:" #d9dbf6",borderRadius:"8px",marginBottom:"10px" }}>
            <div className='taskDetail' style={{display:"flex",justifyContent: "space-between", alignItems: "center",width:"96%",background:"#fff"}}>
            <div className='detailLeft' style={{ display: "flex" }}>
                <input type="checkbox" style={{ width: "20px" }} checked={checkStatus} value={checkStatus} onChange={()=>{setCheckStatus(!checkStatus)
                        dispatch(updateStatus({
                            id:task.id,
                            task:task.task,
                            status: !checkStatus,
                            time : task.time
                        }))
               
                        
                }}/>
                <div style={{ lineHeight: "0.5", textAlign: "left" }}>
                    <p style={checkStatus? {textDecoration:"line-through"} : {}}>{task.task}</p>
                    <p>{task.time}</p>
                </div>
            </div>
            <div className='detailRight'>
                <i onClick={() => dispatch(removeToDo(task.id))} className="fa-solid fa-trash-can"></i>
                <ModalUpdateTask task={task}/>
            </div>
            </div>
          
        </div>
    )
}
