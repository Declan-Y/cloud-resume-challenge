
async function getData() {
    const url = "https://gwxf3flmph.execute-api.us-east-1.amazonaws.com/dev/counter";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      
      return json
    } catch (error) {
      console.error(error.message);
    }
  }
  


window.onload = async (event) => {
    let data =  await getData()

    let counter = document.getElementById("counter")
    counter.innerText = data
  };
  