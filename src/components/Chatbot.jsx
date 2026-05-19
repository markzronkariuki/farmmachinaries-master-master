import React, { useState } from "react";


const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I’m your Bold dream assistant how can i help you ?. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");

  const botReplies = {
    "hi": "Hey there 👋 How can I help you today?",
    "hello": "Hello 😊 i am here to help you today on how to get our services in our organization?",
    "Requirements": "dream creation is an organizition working with female gender of age 23 to 38 years that have the following requirements:Aged from 23-38 years, eloquent english, expirienced in cleaning and house keeping, slim good looking, good grooming, medically fit, willing to work, ready to relocate to saudi aribia and giving a contract of 2 years.",
    "contact": "0746171045 0r 0116113551",
    "services": "recruitments, passports, good conducts, applications",
    "default": "you can click on get services to get our services explained clearly or cotuct us."
  
  };

  const handleSend = () => {
    if (!input) return;

    const userMsg = { from: "user", text: input };
    setMessages(prev => [...prev, userMsg]);

    const key = input.toLowerCase();
    const reply = botReplies[key] || botReplies.default;

    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "black",
          color: "white",
          padding: "15px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 1000
        }}
      >
        💬
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div style={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          width: "300px",
          height: "400px",
          background: "white",
          border: "1px solid #c72d2d",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000
        }}>

          {/* messages */}
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                textAlign: msg.from === "user" ? "right" : "left",
                margin: "5px 0"
              }}>
                <span style={{
                  background: msg.from === "user" ? "#0673e7" : "#c6da98",
                  color: msg.from === "user" ? "white" : "black",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  display: "inline-block"
                }}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* input */}
          <div style={{ display: "flex", borderTop: "1px solid #c8e06f" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              style={{ flex: 1, padding: "10px", border: "none" }}
            />
            <button onClick={handleSend} style={{ padding: "10px" }}>
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default Chatbot
