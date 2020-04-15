import React from "react";

function Table(props) {

    return (
        <div>
            <table>
                <tr>
                    {/* <td>ID</td> */}
                    <td>Name</td>
                    <td>Email</td>
                    <td>Role</td>
                </tr>

                {props.children}

            </table>
        </div>
    )

}

export default Table;