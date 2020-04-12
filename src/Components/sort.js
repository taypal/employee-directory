import React from "react";

function Sort(props) {
    return (
        <div className="form-group">
            <select
                className="form-control"
                onChange={props.handleInputChange}
                id="role"
                name="sort"
                value={props.value}
            >
                <option value="first_name">Name</option>
                <option value="role">Role</option>

            </select>

            <button>
                Sort
            </button>
        </div>
    )
}

export default Sort;