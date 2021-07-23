import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Alert } from 'reactstrap';
export default function TaskItem(props) {
    const finish = () => {
        props.deleteTask(props.item)
        alert('Task Finished')
    }
    const del = () => {
        props.deleteTask(props.item)
        alert('Task Will be Deleted')
    }
    return (
        <>
        <ToastContainer/>
            <div class="card ml-24 mt-4">
      <div class="card-body">
        <h5 class="card-title">{props.item.title}</h5>
        <div className="flex">
            <h6 className="mr-4">{props.item.date}</h6>
            <h6>{props.item.time}</h6>
        </div>
        <p class="card-text">{props.item.desc}</p>
        <button type="submit" className="btn btn-primary mr-4" onClick={finish}>Finished</button>
        <button type="submit" className="btn btn-danger" onClick={del}>Delete</button>
      </div>
        </div>
        </>
    )
}
