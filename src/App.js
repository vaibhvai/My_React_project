
import React, {use, useEffect} from "react";
import Form from "./Form";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import SuccessPage from "./Sucesspage";
import ButtonTheme from "./Theme/ButtonTheme";
import { AccessProvider } from "./Theme/ThemeContext";
import './App.css';
import Mayur from "./Mayur";
import CounterCallback from "./Counter/CounterCallback";
import UseMemoHook from "./UseMemo/UseMemoHook";
import FetchApi from "./Promise/FetchApi";
import { FormProvider } from "./FormContext/FormContext";
import FormApi from "./FormContext/FormApi";
function App() {
useEffect(() =>{
console.log('render')
return () => console.log('hello mayur')
},[])
  return(
<>
{/* <Router>
  <switch>
    <Routes>
    <Route path="/" exact Component={Form}/>
    <Route path="Success" exact Component={SuccessPage}/>
    </Routes>
  
  </switch>
</Router> */}
<div>
  <AccessProvider>
    <FormProvider>
      <FormApi/>
    </FormProvider>
    {/* <div> */}
 {/* <h1>Theme Changer</h1>
  <ButtonTheme/>
  <Mayur/> */}
{/* <NewFile/> */}
{/* <CounterCallback/> */}
{/* <Suspense fallback={<div>...Laoding</div>}>
<UseMemoHook/>
<FetchApi/>
</Suspense> */}


    {/* </div> */}

  </AccessProvider>
 
</div>
</>
  )
}
export default App;


//usestate and usemmemo

//
