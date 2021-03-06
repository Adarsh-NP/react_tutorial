import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/greetinclass'
import Hello from './components/hello'
import Message from './components/message'
import Counter from './components/counter'
import Greetde from './components/greetde'
import FunctionClick from './components/functionclick'
import ClassClick from './components/classcomp'
import EventBind from './components/eventbind'
import Parentcomp from './components/parentcomp'
import Usergreet from './components/cond_rend/usergreeting'
import Jsrender from './components/cond_rend/jsrendering'
import Tern from './components/cond_rend/ternary'
import ShortC from './components/cond_rend/shortcirc';
import NameList from './components/list';
import Stylesheet from './styling/stylesheet';
import Inline from './styling/inline';
import Form from './components/forms/form';
import LifecycleA from './components/Lifecycle/LifecycleA';
import FragmentDemo from './components/fragments/FragmentDemo';
import Table from './components/fragments/Table';
import Purecomp from './components/purecomponents/Purecomp';
import Parentcompo from './components/purecomponents/Parentcomp';
import Refsdomo from './components/refs/Refsdomo';
import FocusInput from './components/refs/FocusInput';
import FRParent from './components/refs/FRParent';
import Portals from './components/Portals';
import Hero from './components/Hero';
import Errorboundary from './components/Errorboundary';
import Clickcounter from './Clickcounter';
import HoverCounter from './HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import RenderProps from './components/User';
import User from './components/User';
import Counterex from './components/Counterex';
import Postlist from './components/Postlist';
import PostForms from './PostForms';


class App extends Component {
  render() {
    return (
    <div className="App">
        <PostForms />
        <Postlist />
        {/* <ClickCounterTwo />
        <HoverCounterTwo /> */}
        {/* <Counterex
           render={(count, incrementCount, cVal) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} cVal={cVal} /> 
            )}
       />
        <Counterex
           render={(count, incrementCount, cVal) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} cVal={cVal} /> 
            )}
       /> */}
        {/* <User render={(IsLoggedIn)=> IsLoggedIn ? 'Addy' : 'Guest'}/> */}
        {/* <Clickcounter />
        <HoverCounter /> */}
        {/* <Errorboundary>
        <Hero heroname='batman' />
        <Hero heroname='superman' />
        <Hero heroname='joker' />
        </Errorboundary> */}
        
        {/* <Portals /> */}
        {/* <FRParent /> */}
        {/* <FocusInput /> */}
        {/* <Refsdomo /> */}
        {/* <Parentcompo /> */}
        {/* <Purecomp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <Form /> */}
        {/* <LifecycleA /> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList /> */}
        {/* <ShortC /> */}
        {/* <Tern /> */}
        {/* <Jsrender /> */}
        {/* <Parentcomp /> */}
        {/* <Usergreet /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick />
        <Message />
        <Counter />
        <Welcome  name="Adarsh Again" heroname="also Iron Man"/>
        <Welcome name="Adarsh once again" heroname=" once again Iron Man"/>
        <Welcome />
        <Greet name="Adarsh" heroname="Iron Man">Hey there</Greet> 
        <Greetde name="Adarsh Again" heroname="also Iron Man"><button>Click Me</button></Greetde>
        <Greet name="Adarsh once again" heroname=" once again Iron Man"/>
        <Hello />  */}
    </div>
  );
  }
}

export default App;
