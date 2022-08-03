import './App.css';
import React from 'react';
import boxes from './boxes';
import Box from './box';

export default function App() {
      const [squares,setSquares] = React.useState(boxes);

      function toggle(keyy){
        setSquares(items=> {
          return items.map(item =>{
            return item.id === keyy?{...item,condition: !item.condition}:item
          })
        })}
      
      const givingColours = squares.map(item =>
          <Box classname='box' key={item.id} keyy={item.id} condition={item.condition} handleClick={toggle}/>
      )
    
      return(
        <div>
          {givingColours}
        </div>

      )
      
}