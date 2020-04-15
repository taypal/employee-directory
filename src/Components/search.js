import React from "react";

function Search(props) {
    return (
        <div className="container">
            <div className="form-group ">

                <input
                    className="form-control col-sm-3"
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    placeholder="Search by Role"
                    id="search"
                />

                <button class="btn btn-info col-sm-3" onClick={props.handleFormSubmit} >

                    Search
            </button>

            </div>
        </div>
    )
}

export default Search;