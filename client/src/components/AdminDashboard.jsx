// AdminDashboard.js

import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 py-6 px-4">
        <h1 className="text-white text-lg font-semibold mb-6">Admin Dashboard</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-200 hover:text-white block">Dashboard</a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:text-white block">Users</a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:text-white block">Settings</a>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <div className="bg-white shadow-md p-4">
          {/* Dashboard content goes here */}
          <p>Welcome to the Admin Dashboard!</p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
