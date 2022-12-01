import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { Message } from "./02-useEffect/Message";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { CallBackHook } from "./06-memos/CallBackHook";
import { MemoHook } from "./06-memos/MemoHook";
import { Memorize } from "./06-memos/Memorize";
import { Padre } from "./07-tarea-memo/padre";
import { TodoApp } from "./08-reducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import "./index.css";

import { BrowserRouter } from 'react-router-dom'

// import './08-reducer/intro-reducer'; //importar archivo directamente

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>
);
