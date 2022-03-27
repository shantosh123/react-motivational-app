import React, { useState } from 'react';
import ItemQuotes from './ItemQuotes';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import './Style.css';

const App = () => {

    const [items, setItems] = useState ([])

    
const fetchData = () => {

    return fetch ("https://jsonguide.technologychannel.org/quotes.json")
    .then(( response)=> response.json())
    .then ((data)=>{ 
    setItems(data)
    })
}

  return (
    <div>
        <button onClick={()=> fetchData()}> Fetch</button>
        <br></br>
        <br></br>
 
        <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      {items.map((item) => <ItemQuotes
         author = { item.from} text ={item.text}/> )}
      </Stack>
    </Box>
 
      
    </div>
  )
}



export default App;