import React from "react";

function Search(props) {
    return (
        <div className="form-group">
            <input
                className="form-control"
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                placeholder="Search Team Member"
                id="search"
            />

            <button>
                Search Team Member
            </button>
        </div>
    )
}

export default Search;