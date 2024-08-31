import * as React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Sidebar */}
            <div className="flex flex-row min-h-screen">
                <div className="w-64 bg-blue-800 text-white flex flex-col p-4">
                    <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>
                    <nav>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Home</a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Inventory</a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Users</a>
                        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Settings</a>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-blue-50">
                    <h1 className="text-3xl font-bold text-blue-900 mb-4">Welcome to the Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold text-blue-800">Organizations</h2>
                            <p className="text-blue-600">Manage all registered organizations.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold text-blue-800">Users</h2>
                            <p className="text-blue-600">Manage users and their activities.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold text-blue-800">Reports</h2>
                            <p className="text-blue-600">View and analyze reports.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
