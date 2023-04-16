import React from 'react';

const handleSubmit = () => {
    sessionStorage.clear();
}
function Dashboard() {
    return (
        <>
            <h2>Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Logout</button>
            </form>
        </>
    );
}

export default Dashboard;
