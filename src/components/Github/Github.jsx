import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    const [inputVal, setInputVal] = useState('');

    // for initial render: 
    useEffect(() => {
        fetch('https://api.github.com/users/nitin1103')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data);
            });
    }, []);

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    }

    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${inputVal}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data);
            });
    }


    return (
        <>
            <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
                <h1 className='text-3xl'>Enter GitHub Username to search</h1>
                <div className="mb-4 mt-2">
                    <input
                        value={inputVal}
                        onChange={handleInputChange}
                        type="text"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleSubmit}>
                        Search
                    </button>
                </div>
            </div>
            <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
                <div className='flex align-center justify-center'>
                    <img src={data?.avatar_url} alt="profile pic" className='flex justify-center align-center w-80' />
                </div>
                <div>
                    Name: {data?.name || 'N/A'}
                </div>
                <div >
                    Location: {data?.location || 'N/A'}
                </div>
                <div>
                    Github Followers: {data?.followers || 'N/A'}
                </div>

            </div >
        </>

    )
}

export default Github