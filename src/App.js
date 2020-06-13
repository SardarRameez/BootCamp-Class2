import React from 'react';
import './App.css';
import Hello from './hello';

function App(prop) {
return <div>Hello World from {prop.name} and age is {prop.age}
<br/>
<Hello firstname="Sardar Rameez"></Hello>
</div>
}


export default App;
