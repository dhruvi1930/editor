import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "./App.css";

function App() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  const handleHtmlChange = (newHtmlCode: string) => {
    setHtmlCode(newHtmlCode);

    if (
      newHtmlCode.includes("<script>") ||
      newHtmlCode.includes("<iframe ") ||
      newHtmlCode.includes("<style>") ||
      newHtmlCode.includes("<iframe>")
    ) {
      window.alert("WARNING: <script> or <iframe> or <style> tags detected!");
    }
  };

  const handleCssChange = (newCssCode: string) => {
    setCssCode(newCssCode);
    if (
      newCssCode.includes("<script>") ||
      newCssCode.includes("<iframe ") ||
      newCssCode.includes("<style>") ||
      newCssCode.includes("<iframe>")
    ) {
      window.alert("WARNING: <script> or <iframe> or <style> tags detected!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-heading">Welcome to HTML and CSS Editor</p>
        <div className="spacer" />
        <div className="EditorContainer">
          <div className="editor">
            <h3 className="editorTitle">HTML EDITOR</h3>
            <Editor
              value={htmlCode}
              onValueChange={handleHtmlChange}
              highlight={(htmlCode) =>
                highlight(htmlCode, languages.markup, "markup")
              }
              padding={10}
              style={{
                height: "250px",
                overflow: "auto",
                fontSize: 16,
                border: "2px solid black",
                borderRadius: "4px",
                backgroundColor: "white",
                color: "black",
                margin: "5%",
              }}
            />
          </div>
          <div className="editor">
            <h3 className="editorTitle">CSS EDITOR</h3>
            <Editor
              value={cssCode}
              onValueChange={handleCssChange}
              highlight={(code) => highlight(code, languages.css, "css")}
              padding={10}
              style={{
                height: "250px",
                overflow: "auto",
                fontSize: 16,
                border: "2px solid black",
                borderRadius: "4px",
                backgroundColor: "white",
                color: "black",
                margin: "5%",
              }}
            />
          </div>
        </div>
        <br />
        <h3>Preview</h3>
        <iframe
          title="Preview"
          className="preview-iframe"
          srcDoc={`<style>${cssCode}</style>${htmlCode}`}
        />
      </header>
    </div>
  );
}

export default App;
