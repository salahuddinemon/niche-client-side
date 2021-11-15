import React, { useState } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };

        fetch('https://vast-plains-22065.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                    swal("Good job!", "This email is now admin!", "success")
                }
            })
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <div>
                    <p className="text-lg font-medium leading-none text-gray-800">Make An Admin With Email</p> <br />
                    <input onBlur={handleOnBlur} aria-label="enter email adress" type="email" name="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-2/5 pl-3 mt-2" />
                </div>
                <div className="mt-8">
                    <button type="submit" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-1/5">
                        Make Admin
                    </button>
                </div>
            </form>
            {/* {success && swal("Good job!", "This email is now admin!", "success")} */}
        </div>
    );
};

export default MakeAdmin;