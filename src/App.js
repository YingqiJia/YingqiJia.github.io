//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "YingqiJia.github.io/build/museum.loader.js", // public下目录
    dataUrl: "YingqiJia.github.io/build/museum.data",
    frameworkUrl: "YingqiJia.github.io/build/museum.framework.js",
    codeUrl: "YingqiJia.github.io/build/museum.wasm",
  });
  // 一定要给Unity组件设置width和height属性，否则Canvas将无限增大最终导致浏览器卡死
  return (
    <Unity unityProvider={unityProvider} style={{ width: 960, height: 600 }}/>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
