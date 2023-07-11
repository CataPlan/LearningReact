// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // const App = () =>(
// //   <div>
// //     <p>Hello world</p>
// //   </div>
// // )
// // ReactDOM.render(<App/>,document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





import React from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  return (
  <div>
    <p>
      esta es un componente de Llamado App    </p>
      <p>probando los props:</p>
      <p>primer prop: {props.name}</p>
      <p>Nombre y edad: {props.name} {props.age}</p>
  </div>
  )
}

const Hello = () => {
  console.log("antes del return ");
  const name = "Rafael"
  const ag = 28
  return (
    <>
      <p>ya funcionando </p>
      
      <App name="Danny" age={ 25 - 12}/>
      {/* <App name= {name} age={ ag}/> */}
      
    </>
  )
}
      


ReactDOM.render(<Hello />, document.getElementById('root')) 
