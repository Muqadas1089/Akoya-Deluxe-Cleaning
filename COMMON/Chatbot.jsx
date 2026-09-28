import React, { useState } from "react";
import logo from "../src/assets/logo.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Welcome to Akoya. How can I help you today?",
    },
  ]);

  // Send Message
  const handleSend = async (e) => {
    e.preventDefault();

    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    // Show user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    // Show typing message
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "Typing...",
        loading: true,
      },
    ]);

    try {
      // Send message to backend
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Replace typing message with Gemini answer
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          sender: "bot",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error);

      // Show error message
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          sender: "bot",
          text: "Sorry, I couldn't answer right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Reset Chat
  const handleReset = () => {
    if (loading) return;

    setMessages([
      {
        sender: "bot",
        text: "Hello! Welcome to Akoya. How can I help you today?",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="font-sans">

      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Akoya chatbot"
          className="fixed bottom-7 right-7 z-[9999] flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white shadow-xl transition duration-300 hover:scale-110"
        >
          <img
            src={logo}
            alt="Akoya Logo"
            className="h-full w-full rounded-full object-contain p-2"
          />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-7 right-7 z-[9999] flex h-[570px] max-h-[calc(100dvh-40px)] w-[390px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-[25px] border border-gray-200 bg-white shadow-2xl">

          {/* Header */}
          <div className="flex min-h-[95px] items-center justify-between gap-2 border-b border-gray-200 bg-[#fafafa] px-5 py-4">

            <div className="flex min-w-0 items-center gap-3">

              {/* Logo */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                <img
                  src={logo}
                  alt="Akoya Logo"
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-[#292929]">
                  Akoya Chatbot
                </h2>

                <p className="truncate text-sm text-gray-500">
                  Akoya's concierge garment services
                </p>
              </div>
            </div>

            {/* Header Buttons */}
            <div className="flex shrink-0 items-center gap-3">

              {/* Reset */}
              <button
                onClick={handleReset}
                title="New chat"
                aria-label="Reset chat"
                disabled={loading}
                className="text-gray-500 transition hover:text-[#bd9d2e] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 11a9 9 0 1 1 2.6 6.4M3 4v7h7"
                  />
                </svg>
              </button>

              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
                className="text-3xl leading-none text-gray-500 transition hover:text-black"
              >
                &times;
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto bg-white p-5">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {/* Bot Avatar */}
                {msg.sender === "bot" && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                    <img
                      src={logo}
                      alt="Akoya"
                      className="h-full w-full rounded-full object-contain p-1"
                    />
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`max-w-[82%] whitespace-pre-wrap break-words px-4 py-3 text-sm leading-6 ${
                    msg.sender === "user"
                      ? "rounded-[20px] rounded-br-sm bg-[#bd9d2e] text-white"
                      : "rounded-[20px] rounded-bl-sm bg-[#f1f1f1] text-[#292929]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form
            onSubmit={handleSend}
            className="mx-4 mb-2 flex items-center rounded-full border border-gray-200 bg-[#fafafa] px-4"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
              className="h-14 min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 disabled:opacity-60"
            />

            <button
              type="submit"
              disabled={!message.trim() || loading}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#bd9d2e] transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#bd9d2e] border-t-transparent" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m22 2-7 20-4-9-9-4Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 2 11 13"
                  />
                </svg>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="flex h-8 items-center justify-center gap-1 text-xs text-gray-400">
            <span className="text-orange-500">✦</span>
            Powered by Gemini
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;