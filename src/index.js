import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import Home from './Home';
import Employee from './Employee';
import Student from './Student';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import StudentList from './StudentList';
import EventHandling from './EventHandling';
import StudentForm from './StudentForm';
import { BrowserRouter,Routes,Link,Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Header/>
    <Home/>
    <Employee type="text" placeholder="enter name"/>
    <Student/> */}
    {/* <StudentList/>
    <EventHandling/> */}
    {/* <StudentForm/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

