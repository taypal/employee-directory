import React from "react";

function Search(props) {
    return (
        <div>
            <form>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    placeholder="Search Team Member"
                    id="search"
                />
                <button onClick={props.handleFormSubmit}>
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search;