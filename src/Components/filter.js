import React from "react";

function Filter(props) {
    return (
        <div className="form-group">
            <select
                className="form-control"
                onChange={props.handleInputChange}
                id="role"
                name="filter"
                value={props.value}
            >
                <option value="Dreamer">Dreamer</option>
                <option value="Extractor">Extractor</option>
                <option value="Architect">Architect</option>
                <option value="Point Man">Point Man</option>
                <option value="Chemist">Chemist</option>
                <option value="Forger">Forger</option>
            </select>
            <button>
                Filter by role
            </button>

        </div>
    )
}

export default Filter;