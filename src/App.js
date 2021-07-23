import React, { useEffect, useState } from 'react'
import AddTask from './components/AddTask/AddTask';
import Header from './components/Header';
import Home from './components/Home/Home';
import ViewTask from './components/ViewTask/ViewTask';

export default function App() {
  // useEffect(() => {
  // },[])
  const [cnt,setCnt] = useState(1);
  function updateCnt(item){
    setCnt(item)
  }
  const [arr,setArr] = useState([]);
  const addTask = (title,time,date,desc) => {
    let sno;
    if(arr.length)sno = arr.length+1;
    else sno = 1;
    const task = {
      sno: sno,
      title: title,
      time: time,
      date: date,
      desc: desc
    }
    setArr([...arr,task])
    console.log(arr)
  }
  const deleteTask = (sno) => {
    if(sno){
      setArr(
        arr.filter((e)=> {
          return e!=sno
        })
      )
    }
  }
  console.log(cnt)
  console.log(window.innerWidth)
  return (
    <div>
      <Header data={cnt} dataF={updateCnt}/>
      {cnt==1?<Home/>:null}
      {cnt==3?<AddTask addTask={addTask}/>:null}
      {cnt==2?<ViewTask arr={arr} deleteTask={deleteTask}/>:null}
    </div>
  )
}
