import React, { Component } from "react";
import Employee from "./employee";
import employeeList from "../employee.json";

class Table extends Component {

    state = {
        employeeList
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                    </tr>
                    {this.state.employeeList.map(employeeList => (

                        <Employee
                            id={employeeList.id}
                            first_name={employeeList.first_name}
                            email={employeeList.email}
                            role={employeeList.role}
                        />
                    ))}
                </table>
            </div>
        )
    }
}

export default Table;