import React from 'react';

const Searchbox=({searchfield, searchchange})=>{
   return (
     <div className='tc pa2'>
         <input 
         className='pa3 ba b--green bg-lightest-blue' 
         type='search' 
         placeholder='Search Robot' 
         onChange={searchchange}
         />
     </div>
   );
}

export default Searchbox;