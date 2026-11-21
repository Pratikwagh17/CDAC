import React, { useState } from 'react'

const MyFormComp = () => {

    const [user, setuser] = useState({
        uname: "",
        upass: "",
        term: false
    });

    const inputchangehandler = (event) => {

        const { name, value } = event.target;

        setuser({
            ...user,
            [name]: value
        });
    };

    const checkData = (event) => {

        event.preventDefault();

        if(user.uname === ""){
            window.alert("plase enter a name");
            return false;
        }

        if(user.upass === ""){
            window.alert("please enter a password");
            return false;
        }

        if(!user.term === ""){
            window.alert("please accept term and condition");
            return false;
        }

        window.alert(JSON.stringify(user));
    };

    return (
        <div>

            <h2>This Is MyFormComp</h2>

            <form onSubmit={checkData}>

                <label className='form-label'>
                    Enter Your Name
                </label>

                <input
                    type='text'
                    name='uname'
                    onChange={inputchangehandler}
                    value={user.uname}
                />

                <br />

                <label className='form-label'>
                    Enter Password
                </label>

                <input
                    type='password'
                    name='upass'
                    onChange={inputchangehandler}
                    value={user.upass}
                />

                <br />

                <label>
                    <input
                        type='checkbox'
                        name='term'
                        onChange={inputchangehandler}
                        value="accepted"
                    />
                    I agree Term and Condition
                </label>

                <br />

                <button
                    type='submit'
                    className='btn btn-success btn-sm mt-2'
                >
                    Submit
                </button>

            </form>

        </div>
    )
}

export default MyFormComp