
import { useSelector } from 'react-redux'
import Task from './Task';

export default function ListTasks(props) {
    const listTasks = useSelector(state => state.todoList)
    
    function filterData(arrayData) {
        let result = []
        if (props.filterStatus == null || props.filterStatus == 'All') {
            result =  arrayData
        }
        if (props.filterStatus == "true") {
            result = arrayData.filter(item => item.status == true)
        }
        if (props.filterStatus == "false") {
            result = arrayData.filter(item => item.status == false)
        }
        return result
    }

    return (
        <div className='listTasks'>
        
            {listTasks?.length > 0 ? (filterData(listTasks).map((task) =>
                <Task task={task} key={task.id}/>
            )) : (<div className='notodo'>NO TODOS</div>)}
        </div>
    )
}
