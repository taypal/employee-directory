import React, { Conponent, Component } from "react";
import Employee from "./employee";
import employeeList from "../employee.json";
import employee from "./employee";

class Table extends Component {

    state = {
        employeeList
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>id</td>
                        <td>first_name</td>
                        <td>email</td>
                        <td>role</td>
                    </tr>
                    {this.state.employeeList.map(employee => (

                        <Employee
                            name={employee.first_name}
                            email={employee.email}
                            position={employee.role}
                        />
                    ))}
                </table>
            </div>
        )
    }
}

export default Table;