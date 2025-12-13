import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { Send, Terminal, X } from 'lucide-react';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; content: string }[]>([
    { role: 'model', content: "INITIATING CONNECTION... ASK ME ABOUT SAI RAHUL." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await sendMessageToGemini(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', content: response || "ERROR_NO_DATA" }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-mono">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-terminal border border-neon-green text-neon-green p-4 hover:bg-neon-green hover:text-black transition-all duration-300 shadow-[0_0_10px_#39ff14] flex items-center gap-2 group"
        >
          <Terminal size={20} />
          <span className="hidden group-hover:block">CONNECT_SAI_AI</span>
        </button>
      )}

      {isOpen && (
        <div className="w-[350px] md:w-[450px] h-[500px] bg-void border border-neon-cyan shadow-[0_0_20px_rgba(0,255,255,0.2)] flex flex-col relative overflow-hidden">
          {/* CRT Header */}
          <div className="bg-neon-cyan/10 p-2 border-b border-neon-cyan flex justify-between items-center backdrop-blur-sm">
            <span className="text-neon-cyan text-xs flex items-center gap-2">
              <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
              LIVE_CONNECTION // GEMINI_2.5
            </span>
            <button onClick={() => setIsOpen(false)} className="text-neon-cyan hover:text-white">
              <X size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-neon-cyan scrollbar-track-black">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 text-sm border ${
                    msg.role === 'user'
                      ? 'border-neon-pink text-neon-pink bg-neon-pink/5'
                      : 'border-neon-green text-neon-green bg-neon-green/5'
                  }`}
                >
                  <span className="text-xs opacity-50 block mb-1">
                    {msg.role === 'user' ? 'USER@HOST' : 'SAI_AI@ROOT'}
                  </span>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="text-neon-green text-xs animate-pulse">
                 PROCESSING_DATA_PACKETS...
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-neon-cyan bg-black flex gap-2">
            <span className="text-neon-cyan pt-2">{'>'}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Query the system..."
              className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-gray-600 focus:ring-0"
              autoFocus
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="text-neon-cyan hover:text-white disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
