import React from "react";
import Employee from "./employee";
import employeeList from "../employee.json";

function Table() {
    return (
        <table>
            <tr>
                <td>{props.id}</td>
                <td>{props.first_name}</td>
                <td>{props.email}</td>
                <td>{props.role}</td>
            </tr>
            <Employee />
        </table>
    )
}

export default Table;