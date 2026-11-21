
import React, { Component } from 'react';

class ListComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            courses: [
                { id: 1, name: "HTML", price: 2000 },
                { id: 2, name: "CSS", price: 3000 },
                { id: 3, name: "JavaScript", price: 4000 },
                { id: 4, name: "React", price: 5000 }
            ],

            emp: [
                { id: 1, name: "Pratik", post: "Manager", salary: 85000, gender: "Male" },
                { id: 2, name: "Sudarshan", post: "HR", salary: 65000, gender: "Male" },
                { id: 3, name: "Disha", post: "TL", salary: 55000, gender: "Female" },
                { id: 4, name: "Atharva", post: "CEO", salary: 120000, gender: "Male" },
                { id: 5, name: "Riya", post: "Developer", salary: 45000, gender: "Female" }
            ]
        };
    }

    render() {
        const { courses, emp } = this.state;

        return (
            <div>

                <h2>This is my list</h2>

                <ul>
                    {
                        courses.map((val) => {
                            return (
                                <li key={val.id}>
                                    {val.name} - ₹{val.price}
                                </li>
                            );
                        })
                    }
                </ul>

                <h2>Employee Table</h2>

                <table
                    style={{
                        borderCollapse: "collapse",
                        width: "70%"
                    }}
                >
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid black", padding: "10px" }}>
                                ID
                            </th>

                            <th style={{ border: "1px solid black", padding: "10px" }}>
                                Name
                            </th>

                            <th style={{ border: "1px solid black", padding: "10px" }}>
                                Post
                            </th>

                            <th style={{ border: "1px solid black", padding: "10px" }}>
                                Salary
                            </th>

                            <th style={{ border: "1px solid black", padding: "10px" }}>
                                Gender
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            emp.map((employee) => {
                                return (
                                    <tr key={employee.id} align="center">

                                        <td style={{ border: "1px solid black", padding: "10px" }}>
                                            {employee.id}
                                        </td>

                                        <td style={{ border: "1px solid black", padding: "10px" }}>
                                            {employee.name}
                                        </td>

                                        <td style={{ border: "1px solid black", padding: "10px" }}>
                                            {employee.post}
                                        </td>

                                        <td style={{ border: "1px solid black", padding: "10px" }}>
                                            ₹{employee.salary}
                                        </td>

                                        <td style={{ border: "1px solid black", padding: "10px" }}>
                                            {employee.gender}
                                        </td>

                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default ListComp;
