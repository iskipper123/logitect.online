import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import ContentManagement from './ContentManagement'
import Analytics from './Analytics'
import Users from './Users'
import Settings from './Settings'

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-gray-800 p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Nav</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/adminpanel" className="text-gray-300 hover:text-white">
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/adminpanel/content"
                className="text-gray-300 hover:text-white"
              >
                Content Management
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/adminpanel/analytics"
                className="text-gray-300 hover:text-white"
              >
                Analytics
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/adminpanel/users"
                className="text-gray-300 hover:text-white"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/adminpanel/settings"
                className="text-gray-300 hover:text-white"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/content" element={<ContentManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  )
}

export default AdminPanel
