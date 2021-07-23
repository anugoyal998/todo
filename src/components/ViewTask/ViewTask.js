import React from 'react'
import TaskItem from './TaskItem'
import img from './ho.jpg'
import { toast } from 'react-toastify'
export default function ViewTask (props) {
    const finish = () =>{
        toast.success("Task Finished")
    }
    if(props.arr.length){
        return(
            <div className="flex justify-between row container-fluid py-0">
                <div className="row col-md-7 animate__animated animate__backInLeft">
                {
                    props.arr.length==0?<h1>Nothing to Show...</h1>:
                    props.arr.map((e)=>
                    <div className="col-md-6 min-w-max"><TaskItem item={e} deleteTask={props.deleteTask} finish={finish}/></div>
                    )
                }
                </div>
                <div className="col-md-5 animate__animated animate__backInRight">
                    <img  src={img} />
                </div>
            </div>
        )
    }
}
