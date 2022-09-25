import React from 'react'


const Navbar = ({filterbook, Books}) => {

    // onClick={()=> setBooks(Books)}
  return (
   <>
   
   <div className='nav'>
                <nav className='navbar'>
                    <div className='btn-group btn-group-lg mr-1 '>
                        <button type="button" className="btn btn-success mr-1" onClick={()=>{filterbook("Horror")}}>Horror</button>
                        <button type="button" className="btn btn-success" onClick={()=>{filterbook("Comedy")}}>Comedy</button>
                        <button type="button" className="btn btn-success" onClick={()=>{filterbook("Romantic")}}>Romantic</button>
                        <button type="button" className="btn btn-success" onClick={()=>{filterbook("Drama")}}>Drama</button>
                        <button type="button" className="btn btn-success"  >All Books</button>
                    </div>

                </nav>
            </div>
            
            </>
  )
}

export default Navbar
