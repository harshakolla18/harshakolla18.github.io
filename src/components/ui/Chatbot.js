import React, { useState, useEffect, useRef } from "react";
import chatbotImage from "../../assets/images/profile/chat bot.jpg";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isAuthenticated] = useState(true);
  const [suggestionsRemoved, setSuggestionsRemoved] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messages.length === 0) {
      const initialSuggestions = [
        "Tell me about your experience",
        "What projects have you worked on?",
        "What are your skills?",
        "How can I contact you?",
      ];

      setMessages([
        {
          type: "bot",
          content: "Hi! I'm Harsha's AI assistant. How can I help you today?",
          suggestions: initialSuggestions,
        },
      ]);
    }
  }, [messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    // Check authentication
    if (!isAuthenticated) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "Please log in to send a message.",
        },
      ]);
      return;
    }

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        content: message,
      },
    ]);

    // Remove suggestions after first user message
    if (!suggestionsRemoved) {
      setSuggestionsRemoved(true);
    }

    // Simulate bot response (you can replace this with actual API call)
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: botResponse,
        },
      ]);
    }, 1000);

    setInputValue("");
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("experience") || lowerMessage.includes("work")) {
      return "I have 3+ years of experience in software engineering, specializing in AI and data. I've worked at Metis Analytics, Saint Louis University, and Excelerate, focusing on AI-driven solutions, logistics optimization, and healthcare systems.";
    } else if (
      lowerMessage.includes("project") ||
      lowerMessage.includes("work on")
    ) {
      return "I've worked on several key projects including Preppr.ai (disaster management), AI-powered logistics platform, real-time fraud detection, and healthcare data pipelines. Each project delivered significant improvements in efficiency and cost reduction.";
    } else if (
      lowerMessage.includes("skill") ||
      lowerMessage.includes("technology")
    ) {
      return "My core skills include Python, React, Machine Learning, AI/ML, Data Analytics, Docker, AWS, and various databases. I specialize in building intelligent systems and scalable data solutions.";
    } else if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("email")
    ) {
      return "You can reach me at harshakolla90@gmail.com or harshakolla18@gmail.com. I'm also active on LinkedIn and other social platforms. Feel free to connect!";
    } else {
      return "Thanks for your message! I'm Harsha's AI assistant. I can help you learn more about my experience, projects, skills, or how to get in touch. What would you like to know?";
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div className="chatbot-container">
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        <img src={chatbotImage} alt="Chatbot" />
        <span className="chatbot-status">
          <i className="fas fa-circle"></i>
        </span>
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-info">
              <img src={chatbotImage} alt="Harsha's AI Assistant" />
              <div>
                <h3>Harsha's AI Assistant</h3>
                <span className="status">Online</span>
              </div>
            </div>
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chatbot"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-content">{message.content}</div>
                {message.suggestions && !suggestionsRemoved && (
                  <div className="message-suggestions">
                    {message.suggestions.map((suggestion, suggestionIndex) => (
                      <button
                        key={suggestionIndex}
                        className="suggestion-btn"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              disabled={!isAuthenticated}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || !isAuthenticated}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
