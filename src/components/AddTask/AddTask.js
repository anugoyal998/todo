import React, { useState } from 'react'
import img from './ho.jpg'
import { Form, FormGroup, Label, Input } from 'reactstrap';
export default function AddTask(props) {
  const [title,setTitle] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [desc,setDesc] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    props.addTask(title,time,date,desc)
    setTitle("")
    setDate("")
    setTime("")
    setDesc("")
    alert('Task Added')
  }
  function handleClear(e){
    e.preventDefault()
    alert('All Input Fiels will be Cleared')
    setTitle("")
    setDate("")
    setTime("")
    setDesc("")
  }
  return (
    <div className="flex justify-between">
      <div className="pl-24 mt-20 animate__animated animate__backInLeft">
        <h1>Add Task to your List</h1>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input className="border-black" type="text" name="title" id="title" placeholder="Enter Title" value={title} onChange={(e)=> setTitle(e.target.value)} />
          </FormGroup>
          <div>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="time">Title</Label>
            <Input type="time" name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} ></Input>
          </FormGroup>
          </div>
          <FormGroup>
            <Label for="desc">Description</Label>
            <Input type="textarea" name="desc" id="desc" placeholder="Enter Description" value={desc} onChange={(e) => setDesc(e.target.value)} ></Input>
          </FormGroup>
          <button type="submit" onClick={handleSubmit} className="bg-blue-600 px-2 py-2 text-white rounded hover:bg-blue-800 mt-3">Submit</button>
          <button className="bg-gray-300 px-2 py-2 text-black rounded ml-3 hover:bg-gray-200" onClick={handleClear}>Clear</button>
        </Form>
      </div>
      <div className="animate__animated animate__backInRight">
        <img src={img} />
      </div>
    </div>
  )
}
