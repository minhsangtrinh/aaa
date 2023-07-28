import logo from "./logo.svg";
import "./App.css";
import JSX from "./Component/JSX";
import Wellcome from "./Component/Wellcome";
import Props from "./Component/Props";
import State from "./Component/State";
import Counter from "./Component/Counter";
import FunctionClick from "./Component/FunctionClick";
import ClassClick from "./Component/ClassClick";
import EventBind from "./Component/EventBind";
import GreetComponent from "./Component/GreetComponent";
import UserGreeting from "./Component/UserGreeting";
import NameList from "./Component/NameList";
import StyleSheets from "./Component/StyleSheets";
import Inline from "./Component/Inline";
import "./appStyle.css";
import style from "./appStyle.module.css";
import Form from "./Component/Form";
import LifecycleA from "./Component/LifecycleA";
import FragmentDemo from "./Component/FragmentDemo";
import ParentComp from "./Component/ParentComp";
import RefsDemo from "./Component/RefsDemo";

function App() {
  return (
    <div className="App">
      <RefsDemo />
      {/* <ParentComp /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <Inline /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={style.success}>Success</h1> */}
      {/* <StyleSheets primary={true} /> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <GreetComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter name = "A"/> */}
      {/* < Wellcome name = "Sang" type = "a man"/> */}
      {/* < Wellcome name = "Sang"/>
      < Wellcome name = "Sang"/>
      < JSX/> */}
      {/* < Props name = "Sang"  hero = "supper man"/> */}
      {/* < Props name = "A" />
      < Props name = "B" />
      <State /> */}
    </div>
  );
}

export default App;
