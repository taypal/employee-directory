import React from "react";

function Filter(props) {
    return (
        <div className="container">
            <div className="form-group">
                <select
                    className="form-control col-sm-3"
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
                <button class="btn btn-info col-sm-3" onClick={props.handleFilterSubmit}>
                    Filter
            </button>

            </div>
        </div>
    )
}

export default Filter;