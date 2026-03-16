import React from 'react'

function Dashboard() {
  const status={
    total: 12,
    completed: 5,
    pending:7
  };
  const upcomingTasks=[
  {id: 1, title: "Math Homework", status: "Due Date"},
  {id: 2, title: "Science Project", status: "Due Date"},
  {id: 3, title: "History Essay", status: "Due Date"},
];
  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-900 mb-6">Welcome!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
          <p className="text-2xl font-bold">Total Tasks</p>
          <p className="text-4xl font-bold">{status.total}</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-xl shadow-md">
          <p className="text-2xl font-bold">Completed</p>
          <p className="text-4xl font-bold">{status.completed}</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-xl shadow-md">
          <p className="text-2xl font-bold">Pending</p>
          <p className="text-4xl font-bold">{status.pending}</p>
        </div>
      </div>
      <div>
        <h2>Upcoming Tasks</h2>
      </div>
    </div>
  );
}

export default Dashboard