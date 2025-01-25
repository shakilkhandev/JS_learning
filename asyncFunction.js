// Define an async function
async function fetchData() {
  try {
    // Await the response of the fetch call
    let response = await fetch('https://api.example.com/data');
    // Await the response to be converted to JSON
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the async function
fetchData();
