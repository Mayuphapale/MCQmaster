document.addEventListener('DOMContentLoaded', function() {
    const attempt = parseInt('<%=attempt%>'); // Get attempt count from server-side data
    const skip = parseInt('<%=skip%>'); // Get skip count from server-side data
    const correct = parseInt('<%=correct%>'); // Get correct count from server-side data
    const wrong = parseInt('<%=wrong%>'); // Get wrong count from server-side data
  
    // Calculate total questions
    const totalQuestions = 24;
    
    // Calculate total attempts
    const totalAttempts = attempt + skip;
  
    // Calculate percentage correct, wrong, skipped
    const correctPercent = (correct / totalQuestions) * 100;
    const wrongPercent = (wrong / totalQuestions) * 100;
    const skippedPercent = (skip / totalQuestions) * 100;
  
    // Chart.js data
    const ctx = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Correct', 'Wrong', 'Skipped'],
        datasets: [{
          label: 'Question Results',
          data: [correctPercent, wrongPercent, skippedPercent],
          backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + '%';
              }
            }
          }
        }
      }
    });
  
    // Determine pass or fail based on criteria
    const passPercentage = 50; // Example: 50% to pass
    const passFail = correctPercent >= passPercentage ? 'Pass' : 'Fail';
    console.log('Result:', passFail);
  });
  