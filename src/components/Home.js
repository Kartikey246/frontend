// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// function Home() {
//     const [policies, setPolicies] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchPolicies = async () => {
//         try {
//           const response = await fetch('http://localhost:8882/policies/loadPolicies');
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           const data = await response.json();
//           setPolicies(data);
//         } catch (error) {
//           setError(error.message);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchPolicies();
//     }, []);

//   return (
//     <div>
//       <div style={topBarStyle}>
//         <h1 style={{ margin: 0, color: 'white' }}>Insurance Management System</h1>
//       </div>

//       <div style={welcomeContainerStyle}>
//         <h3 style={helloCustomerStyle}>Hello, Customer</h3>
//         <h3 style={welcomeTextStyle}>Welcome to the Insurance Management System</h3>
//         <hr style={horizontalLineStyle} />

//         <div style={buttonContainerStyle}>
//           <Link to="/login">
//             <button style={buttonStyle}>Login</button>
//           </Link>
//           <Link to="/register">
//             <button style={buttonStyle}>Register</button>
//           </Link>
//         </div>
//       </div>

//       <div>
//       <h1>All Policies</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       <ul>
//         {policies.map((policy) => (
//           <li key={policy.policy_id}>
//             <h3>{policy.policy_name}</h3>
//             <p>{policy.policy_description}</p>
//             <p>Standard Premium: ${policy.standardPremium}</p>
//             <p>Coverage Amount: {policy.coverageAmount} years</p>
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>

//     </div>
//   );
// }

// const topBarStyle = {
//   backgroundColor: 'black',
//   padding: '10px',
//   textAlign: 'center',
// };

// const welcomeContainerStyle = {
//   textAlign: 'center',
//   marginTop: '20px',
// };

// const helloCustomerStyle = {
//   fontSize: '5em',
// };

// const welcomeTextStyle = {
//   fontSize: '2.3em',  
//   margin: '10px 0', 
// };

// const horizontalLineStyle = {
//   border: 'none',
//   borderTop: '1px solid #ccc',
//   margin: '20px 0',
// };

// const buttonContainerStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   marginTop: '20px',
// };

// const buttonStyle = {
//   fontSize: '1.5em', 
//   margin: '0 15px', 
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   topBarStyle : {
    backgroundColor: '#f3c3c3', // Very light red
    padding: '10px',
    textAlign: 'center',
    marginBottom: '10px', // Reduced margin
    color: 'white', // Text color
  },
  welcomeContainerStyle: {
    textAlign: 'center',
    marginTop: '20px',
  },
  helloCustomerStyle: {
    fontSize: '5em',
  },
  welcomeTextStyle: {
    fontSize: '2.3em',
    margin: '10px 0',
  },
  horizontalLineStyle: {
    border: 'none',
    borderTop: '1px solid #ccc',
    margin: '20px 0',
  },
  buttonContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  buttonStyle: {
    fontSize: '1.5em',
    margin: '0 15px',
  },
  gridItem: {
    padding: theme.spacing(2),
  },
  coloredPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  cardTitle: {
    fontSize: '1.8em',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '1.2em',
    color: '#333',
  },
  cardFooter: {
    marginTop: '15px',
  },
  cardButton: {
    fontSize: '1.3em',
    color: 'white',
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  pageContainer: {
    backgroundColor: '#f4f4f4',
    color: '#333',
  },
  topBarStyle: {
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  welcomeContainerStyle: {
    textAlign: 'center',
    marginTop: '20px',
  },
  helloCustomerStyle: {
    fontSize: '5em',
    color: '#333',
  },
  welcomeTextStyle: {
    fontSize: '2.3em',
    margin: '10px 0',
    color: '#555',
  },
  horizontalLineStyle: {
    border: 'none',
    borderTop: '1px solid #ccc',
    margin: '20px 0',
  },
  buttonContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  buttonStyle: {
    fontSize: '1.5em',
    margin: '0 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  gridItem: {
    padding: theme.spacing(2),
  },
  coloredPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
  cardTitle: {
    fontSize: '1.8em',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '1.2em',
    color: '#333',
  },
  cardFooter: {
    marginTop: '15px',
  },
  cardButton: {
    fontSize: '1.3em',
    color: 'white',
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  pageContainer: {
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  topBarStyle: {
    backgroundColor: '#e74c3c', // Light red
    padding: '10px',
    textAlign: 'center',
    marginBottom: '10px', // Reduced margin
  },
  welcomeContainerStyle: {
    textAlign: 'center',
    marginTop: '10px', // Reduced margin
  },
  helloCustomerStyle: {
    fontSize: '3em', // Reduced font size
    color: '#555',
  },
  welcomeTextStyle: {
    fontSize: '1.5em', // Reduced font size
    margin: '5px 0', // Reduced margin
    color: '#777',
  },
  horizontalLineStyle: {
    border: 'none',
    borderTop: '1px solid #ccc',
    margin: '10px 0', // Reduced margin
  },
  buttonContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px', // Reduced margin
  },
  buttonStyle: {
    fontSize: '1.2em', // Reduced font size
    margin: '0 15px',
    backgroundColor: '#e74c3c', // Light red
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  gridItem: {
    padding: theme.spacing(2),
  },
  coloredPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#333',
    background: 'linear-gradient(45deg, #ecf0f1 30%, #f5f5f5 90%)', // Light gradient
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
  cardTitle: {
    fontSize: '1.5em', // Reduced font size
    marginBottom: '10px',
    color: '#555',
  },
  cardText: {
    fontSize: '1em', // Reduced font size
    color: '#666',
  },
  cardFooter: {
    marginTop: '10px', // Reduced margin
  },
  cardButton: {
    fontSize: '1em', // Reduced font size
    color: '#e74c3c', // Light red
    backgroundColor: '#fff', // White background
    padding: '8px 15px',
    border: '1px solid #e74c3c', // Light red border
    borderRadius: '5px',
    cursor: 'pointer',
  },
}));

function Home() {
  const classes = useStyles();
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await fetch('http://localhost:8882/policies/loadPolicies');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPolicies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  return (
    <div className={classes.pageContainer}>
      <div className={classes.topBarStyle}>
        {/* <h1 style={{ margin: 0, color: 'white' }}>Insurance Management System</h1> */}
      </div>

      <div className={classes.welcomeContainerStyle}>
        <h3 className={classes.helloCustomerStyle}>Hello, Customer</h3>
        <h3 className={classes.welcomeTextStyle}>Welcome to the Insurance Management System</h3>
        <hr className={classes.horizontalLineStyle} />

        <div className={classes.buttonContainerStyle}>
          <Link to="/login">
            <button className={classes.buttonStyle}>Login</button>
          </Link>
          <Link to="/register">
            <button className={classes.buttonStyle}>Register</button>
          </Link>
        </div>
      </div>

      <div>
        <h1>All Policies</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <Grid container spacing={3}>
          {policies.map((policy) => (
            <Grid item xs={12} sm={6} md={4} key={policy.policy_id} className={classes.gridItem}>
              <Paper elevation={3} className={classes.coloredPaper}>
                <h3 className={classes.cardTitle}>{policy.policy_name}</h3>
                <p className={classes.cardText}>{policy.policy_description}</p>
                <p className={classes.cardText}>Standard Premium: ${policy.standardPremium}</p>
                <p className={classes.cardText}>Coverage Amount: {policy.coverageAmount} years</p>
                <hr />
                <div className={classes.cardFooter}>
                  <button className={classes.cardButton}>Details</button>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;