import React, { Component } from 'react';
import Table from "./employeeTable";
import Header from "./header";
import Reset from "./reset";
import Search from "./search";
import employeeList from "../employee.json";
import Filter from './filter';
import Sort from "./sort";

class Compiling extends Component {
    state = {
        employeeList: employeeList,
        search: "",
        filter: "Dreamer",
        sort: "role"
    };

    handleInputChange = event => {
        const value = event.target.value;
        const role = event.target.name;
        this.setState({ [role]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const result = employeeList.filter(Employee => Employee.role === this.state.search);
        this.setState({
            employeeList: result,
            search: ""
        })
    };

    handleFilterSubmit = event => {
        event.preventDefault();

        const filtered = employeeList.filter(Employee => Employee.role === this.state.filter);
        this.setState({
            employeeList: filtered
        })
    };

    handleSortSumbit = event => {
        event.preventDefault();
        var sorted = this.state.sort;
        var empty = this.state.employeeList;

        if (sorted === "role") {
            var sortRole = empty.sort(function (a, b) {
                var roleA = a.role.toLowerCase()
                var roleB = b.role.toLowerCase()

                if (roleA < roleB) {
                    return -1
                } else if (roleA > roleB) {
                    return 1
                } else { return 0 }
            });

            this.setState({
                employeeList: sortRole
            });
        }
    };

    handleListReset = () => {
        this.setState({
            employeeList: employeeList
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Reset>
                    <Search
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <Filter
                        value={this.state.filter}
                        handleInputChange={this.handleInputChange}
                        handleFilterSubmit={this.handleFilterSubmit}
                    />
                    <Sort
                        value={this.state.sort}
                        handleInputChange={this.handleInputChange}
                        handleSortSubmit={this.handleSortSubmit}
                    />
                </Reset>

                <Table>
                    {this.state.employeeList[0] ? (
                        this.state.employeeList.map(Employee => (
                            <Employee
                                id={employeeList.id}
                                first_name={employeeList.first_name}
                                email={employeeList.email}
                                role={employeeList.role}
                            />
                        ))
                    ) : (<h5>Not found</h5>)
                    }

                </Table>

            </div>
        )
    }
}

export default Compiling;