import React from "react"
import "./Dashboard.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { User, UserPlus, Users, GraduationCap, Briefcase } from "lucide-react";



export default function Dashboard() {

  const cardData = [
    { title: "New Admissions", value: 150, icon: UserPlus },
    { title: "All Students", value: 1200, icon: Users },
    { title: "Teachers", value: 75, icon: GraduationCap },
    { title: "Staff", value: 50, icon: Briefcase },
    { title: "Others", value: 25, icon: User },
  ];
  
  const pieChartData = [
    { name: 'Students', value: 1200 },
    { name: 'Teachers', value: 75 },
    { name: 'Staff', value: 50 },
    { name: 'Others', value: 25 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">School Dashboard</h1>
      
      <div className="dashboard-cards">
        {cardData.map((item, index) => (
          <div key={index} className="dashboard-card">
            <div className="card-header">
              <h2 className="card-title">{item.title}</h2>
              <item.icon className="card-icon" />
            </div>
            <div className="card-content">
              <p className="card-value">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="dashboard-chart">
        <h2>School Population Distribution</h2>
        <div className="pie-chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="dashboard-updates">
        <h2>Recent Updates</h2>
        <ul className="updates-list">
          <li>10 new students admitted this week</li>
          <li>Teacher recruitment drive starting next month</li>
          <li>Annual school gathering scheduled for next quarter</li>
        </ul>
      </div>
    </div>
  );
}