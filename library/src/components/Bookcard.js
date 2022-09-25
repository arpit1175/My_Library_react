import React, { useState } from 'react'
import Bookdata from './Bookdata';
import "./login.css";

const Bookcard = (props) => {
  // console.log(bookData)

const bookData = props.bookData
// const Items = props.Items

const deleteTask = props.deleteTask

  return (
    <>
    <div className='maincont'>
    
    {bookData.map((curElem) => {
        return (
              <>

<div className='cardd'>
              <div className="card container mt-5 " style={{ width: '18rem' }} >
                <img src={curElem.url} className="card-img-top" alt="image here" />
                <div className="card-body" >
                  <h5 className="book-title"> {curElem.title}</h5>
                  </div>
                <ul className="list-group list-group-flush" >
                  <li className="list-group-item">Year : {curElem.year}</li>
                  <li className="list-group-item">Author : {curElem.author}</li>
                  <li className="list-group-item">Genre : {curElem.genre}</li>
                  <li className="list-group-item">ISBN : {curElem.isbn}</li>
                </ul>

                <button className="btn btn-danger btn btn-primary btn-sm " onClick={()=>{deleteTask(curElem.isbn)}} >Delete</button>

            
            </div>
            </div>


          </>)

      })}
    
    </div>
    </>
  )
}

export default Bookcard