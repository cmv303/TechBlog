const getDashboard = async function() {
    const response = await fetch('/dashboard', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      const data = await response.json();
  
      // Render data to the page
      renderDashboard(data);
    } else {
      alert('Failed to fetch dashboard data');
    }
  };
  
  const renderDashboard = function(data) {
    // Code to render the dashboard data to the page
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    getDashboard();
  });
  