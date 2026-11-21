import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDashComp = () => {

    
    const [product, setProduct] = useState([]);

    
    useEffect(() => {
        getData();
    }, []);

    // GET API
    const getData = () => {

        axios
            .get("http://localhost:5050/user")
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // DELETE PRODUCT
    const deleteProduct = (id) => {

        console.log(id);

        if (window.confirm(`Are you sure to delete with id: ${id}`)) {

            axios
                .delete(`http://localhost:5050/user/${id}`)
                .then(() => {

                    window.alert("Product deleted successfully");

                    getData();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    // JSX
    return (
        <div>

            <h1>ProductDashComp</h1>
            <link to="/dashbosrd/dashboardadd"></link>

            <table className="table table-bordered table-hover" border="1">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Company</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        product.map((val, index) => {

                            return (
                                <tr key={val.id || index}>

                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.price}</td>
                                    <td>{val.qty}</td>
                                    <td>{val.company}</td>

                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => deleteProduct(val.id)}
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            );
                        })
                    }

                </tbody>

            </table>

        </div>
    );
};

export default ProductDashComp;