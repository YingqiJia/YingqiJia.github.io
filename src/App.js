//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "YingqiJia.github.io/build/museum.loader.js", // public��Ŀ¼
    dataUrl: "YingqiJia.github.io/build/museum.data",
    frameworkUrl: "YingqiJia.github.io/build/museum.framework.js",
    codeUrl: "YingqiJia.github.io/build/museum.wasm",
  });
  // һ��Ҫ��Unity�������width��height���ԣ�����Canvas�������������յ������������
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
