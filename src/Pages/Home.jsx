import React, { useEffect, useState } from 'react'
import { useSocket } from '../Providers/Socket'
import {useNavigate}  from 'react-router-dom'


 const Homepage =  () =>{
   const {socket}  = useSocket()
   const navigate = useNavigate()
   const [email,setemailId] =  useState()
   const [roomId ,setroomId] =  useState()

  const handleRoomJoined =({roomId}) =>{
   navigate(`/room/${roomId}`)
  }
  useEffect (() =>{
    socket.on('joined-room',handleRoomJoined )
  } ,[socket])

  const  handlejoinRoom = () =>{
    socket.emit('join-room' ,{emailId :email ,roomId})
  }    
  return (
      <div  className='homepage-container'>
        <div className='input-container'>
            <input value={email} onChange={e => setemailId(e.target.value)} type="email" placeholder='Enter your email here' />
            <input value={roomId} onChange={e => setroomId(e.target.value)}  type="text" placeholder='Enter your room code' />
            <button  onClick={handlejoinRoom} >Enter romm</button>
        </div>
      </div>
 

  )
 
}

export default Homepage 