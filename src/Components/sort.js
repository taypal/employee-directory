import React from "react";

function Sort(props) {
    return (
        <div className="container">
            <div className="form-group">
                <select
                    className="form-control col-sm-3"
                    onChange={props.handleInputChange}
                    id="role"
                    name="sort"
                    value={props.value}
                >
                    <option value="first_name">Name</option>
                    <option value="role">Role</option>

                </select>

                <button class="btn btn-info col-sm-3" onClick={props.handleSortSubmit}>
                    Sort
            </button>
            </div>
        </div>
    )
}

export default Sort;