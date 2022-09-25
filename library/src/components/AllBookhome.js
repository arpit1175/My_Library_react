import React, { useState } from 'react'
import { useEffect } from 'react'
import Bookcard from './Bookcard.js'
import { useNavigate } from 'react-router-dom';
import Bookdata from './Bookdata.js';
import "./login.css";
import defaultbooks from './defaultbooks'


const AllBookhome = () => {

    


    
    const [Books, setBooks] = useState(defaultbooks);
    const [isActive, setIsActive] = useState(false);
    const LOCAL_STORAGE_KEY = 'Books';


    let navigate = useNavigate();

    const addBookHandler = (book) => {
        setBooks([...Books, book])
    };

    const handleClick = () => {
        setIsActive(true);
    };
  
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Books))
    }, [Books])

    useEffect(() => {
        const retrievedBooks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrievedBooks) setBooks(retrievedBooks)
    }, [])

    const deleteTask = (index) => {
              const updatedItems = Books.filter((curElem) => {
            return curElem.isbn !== index;
        });
     
        setBooks(updatedItems)
    }
    
    const filterbook = (genre) => {
                   
        const updatedBook1 = defaultbooks.filter((curElem) => {
            
               return curElem.genre === genre
                    
           
        });
        setBooks(updatedBook1);
    };
   


    return (
        <>
<div className='logo-image'>
    My Library
</div>
            <div className='nav'>
                <nav className='navbar'>
                    <div className='btn-group btn-group-lg mr-1 '>
                    <button type="button" className="btn btn-success" onClick={()=>setBooks(defaultbooks)} >All Books</button>
                        <button type="button" className="btn btn-success mr-1" onClick={()=>{filterbook("Horror")}}>Horror</button>
                        <button type="button" className="btn btn-success" onClick={()=>{filterbook("Comedy")}}>Comedy</button>
                        <button type="button" className="btn btn-success" onClick={()=>{filterbook("Romantic")}}>Romantic</button>
                        <button type="button" className="btn btn-success" onClick={()=>{filterbook("Drama")}}>Drama</button>
                        
                    </div>

                </nav>
            </div>

            <Bookcard bookData={Books} deleteTask = {deleteTask} ></Bookcard>
            <div className='add'>
                <div>
                    <button type="button" className="btn btn-large btn-warning " onClick={handleClick} >Add a New Book</button>
                </div>
            </div>
            <Bookdata addBookHandler={addBookHandler} condition={isActive} navigate={navigate}></Bookdata>

        </>
    )

}

export default AllBookhome