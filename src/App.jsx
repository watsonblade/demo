import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [aiSuggestion, setAiSuggestion] = useState("");

  const handleAudioUpload = async (event) => {
    const file = event.target.files[0];
    setAudioFile(file);

    // Example: send audio file to backend for transcription
    const formData = new FormData();
    formData.append("audio", file);

    const response = await fetch("http://localhost:5000/transcribe", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    setText(result.transcription);
  };

  const handleAISuggestion = async () => {
    const response = await fetch("http://localhost:5000/gpt_suggest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const result = await response.json();
    setAiSuggestion(result.suggestion);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Radiology AI Dictation System</h2>
      <input type="file" accept="audio/*" onChange={handleAudioUpload} />
      <div style={{ marginTop: 20 }}>
        <textarea
          style={{ width: "100%", height: 120 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={handleAISuggestion} style={{ marginTop: 16 }}>
        Get GPT Suggestion
      </button>
      {aiSuggestion && (
        <div style={{ marginTop: 24 }}>
          <h4>Suggested Report Text</h4>
          <div
            style={{
              background: "#eee",
              padding: 12,
              borderRadius: 6,
              fontFamily: "monospace",
            }}
          >
            {aiSuggestion}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
