import React from 'react';

const leaderboardData = [
  { name: 'Ashwin Yadav', referralCode: 'ashwin2025', donation: 12000 },
  { name: 'Priya Sharma', referralCode: 'priya2025', donation: 11000 },
  { name: 'Rahul Singh', referralCode: 'rahul2025', donation: 9500 },
  { name: 'Sneha Verma', referralCode: 'sneha2025', donation: 9000 },
];

const Leaderboard = () => {
  return (
    <div style={styles.container}>
  <h2 style={{ color: '#444' }}>🏆 Intern Leaderboard</h2>
     <table style={{ ...styles.table, color: '#333' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Referral Code</th>
            <th>Donations Raised (₹)</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.referralCode}</td>
              <td>{user.donation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: { textAlign: 'center', padding: '40px' },
  table: {
    margin: 'auto',
    borderCollapse: 'collapse',
    width: '90%',
    backgroundColor: '#f5f5f5',
    fontSize: '1rem',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  th: {
    background: '#007bff',
    color: '#fff',
    padding: '12px',
  },
};

export default Leaderboard;
<div style={{ backgroundColor: 'var(--card-bg)', padding: '30px', borderRadius: '10px', maxWidth: '600px', margin: 'auto', marginTop: '80px', boxShadow: '0 0 12px rgba(0,0,0,0.1)' }}>
</div>

