import React from 'react'
import axios from 'axios';


const dataAPI = 'https://raw.githubusercontent.com/Ayush1350/user_data/master/data.json'

function App() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {

   const fetchApiData = async () => {

    try {

      const result = await axios.get(dataAPI);
     
      setData(result.data);

      
    } catch (error) {
      console.log(error);
    }

   }
   fetchApiData();
  },[])

  return (
    <div>
       {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <h3>{item.username}</h3>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App