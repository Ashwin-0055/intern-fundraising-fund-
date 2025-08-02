import React, { useEffect } from "react";
import './Dashboard.css';
import confetti from "canvas-confetti";

function Dashboard() {
  const name = localStorage.getItem("internName") || "User";
  const referralCode = `${name.toLowerCase()}${Math.floor(1000 + Math.random() * 9000)}`;

  useEffect(() => {
    const shouldShowConfetti = localStorage.getItem("showConfetti");

    if (shouldShowConfetti === "true") {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Remove flag so it doesn't show again
      localStorage.removeItem("showConfetti");
    }
  }, []);

  return (
    <div className="dashboard-container fade-in-glow">
      <div className="dashboard-card glow-box">
        <h2 className="dashboard-title typing-animation">
          Welcome, {name.toLowerCase()} 👋
        </h2>
        <p><strong>Referral Code:</strong> {referralCode}</p>
        <p><strong>Total Donations Raised:</strong> ₹12000</p>

        <div className="rewards-section">
          <h3>🏆 <strong>Rewards</strong></h3>
          <ul>
            <li className="glow-reward">🥉 Bronze Badge</li>
            <li className="glow-reward">🎟️ Early Access Pass</li>
            <li className="glow-reward">🏅 Intern of the Week</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;






 
