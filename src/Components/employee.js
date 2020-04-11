import React from "react";

function employee(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.first_name}</td>
            <td>{props.email}</td>
            <td>{props.role}</td>
        </tr>
    )
}

export default employee;