

import React  from "react";




class Bookdata extends React.Component {




    state = {
        title: "",
        author: "",
        year: "",
        genre: "",
        isbn: "",
        url: ""

    };

    add = (e) => {
        e.preventDefault()
        if (this.state.title === "" && this.state.isbn === "") {
            alert("please enter the values");
            return;


        }

        this.props.addBookHandler(this.state);

        this.setState({
            title: "",
            author: "",
            year: "",
            genre: "",
            isbn: "",
            url: ""

        });



    };



    render() {
        return (

            

            <>
               {this.props.condition ? (<div className=' form1'>

                
                    <form className="mb-3" id='bookform' onSubmit={this.add}>
                        <div className="mb-3">
                            <label className="form-label">Book title</label>
                            <input type="text" className="form-control" id="title" placeholder="Book title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Book Athor</label>
                            <input type="text" className="form-control" id="author" placeholder="Book Athor" value={this.state.author} onChange={(e) => this.setState({ author: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Book year</label>
                            <input type="number" className="form-control" id="year" placeholder="Book year" value={this.state.year} onChange={(e) => this.setState({ year: e.target.value })} />
                        </div>
                        <select className="form-select" aria-label="Default select example" id='genre' value={this.state.genre} onChange={(e) => this.setState({ genre: e.target.value })}>
                            <option value="" >Select the genere of the book</option>
                            <option >Comedy</option>
                            <option>Horror</option>
                            <option >Romantic</option>
                            <option >Drama</option>
                        </select>
                        <div className="mb-3">
                            <label className="form-label">ISBN</label>
                            <input type="number" className="form-control" id="isbn" placeholder="Book year" value={this.state.isbn} onChange={(e) => this.setState({ isbn: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter the url of the book cover</label>
                            <input type="text" className="form-control" id="url" placeholder="Enter the url of the book cover" value={this.state.url} onChange={(e) => this.setState({ url: e.target.value })} />
                        </div>

                        <div className="butcont">
                        <button type="submit" className="btn btn-success" id='submitbutton'>Submit</button><br/>
                         </div>
                        

                    </form>

                    

                    

                </div>):<></>}
            </>

// onClick={this.props.navigate("/allBookhome")


        )
    }

}

export default Bookdata;
