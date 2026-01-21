import React, { useState, useEffect } from 'react';

const CodeLaptop3D = () => {
  const [codeIndex, setCodeIndex] = useState(0);
  
  const codeSnippets = [
    {
      language: 'Python',
      title: 'RAG System with CAMEL-AI',
      code: `from camel.agents import ChatAgent
from camel.messages import BaseMessage

# Initialize RAG agent
agent = ChatAgent(
    model_type="gpt-4o",
    system_message="You are an AI assistant"
)

# Query knowledge base
response = agent.step(
    BaseMessage.make_user_message(
        role_name="User",
        content="Analyze Reddit discussions"
    )
)

print(f"Agent: {response.msg.content}")`
    },
    {
      language: 'Python',
      title: 'Multi-Agent System',
      code: `from camel.societies import RolePlaying

# Setup multi-agent collaboration
role_play = RolePlaying(
    assistant_role="AI Researcher",
    user_role="Data Scientist",
    task_prompt="Build RAG pipeline"
)

# Execute agent interaction
for message in role_play.step():
    if message:
        print(f"{message.role}: {message.content}")
        
# Deploy autonomous agents
agents.deploy()`
    },
    {
      language: 'Python',
      title: 'LLM Pipeline',
      code: `import openai
from langchain.chains import LLMChain

# Initialize LLM
llm = ChatOpenAI(
    model="gpt-4o",
    temperature=0.7
)

# Create chain
chain = LLMChain(llm=llm, prompt=prompt)

# Run inference
result = chain.run(
    query="Generate insights from data"
)

return result`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentSnippet = codeSnippets[codeIndex];

  return (
    <div className="laptop-container">
      <div className="laptop-3d">
        {/* Laptop Base */}
        <div className="laptop-base">
          <div className="keyboard"></div>
          <div className="trackpad"></div>
        </div>
        
        {/* Laptop Screen */}
        <div className="laptop-screen">
          <div className="screen-bezel">
            <div className="screen-content">
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn-close"></span>
                  <span className="btn-minimize"></span>
                  <span className="btn-maximize"></span>
                </div>
                <div className="terminal-title">
                  {currentSnippet.title}
                </div>
                <div className="terminal-lang">
                  {currentSnippet.language}
                </div>
              </div>
              
              {/* Code Editor */}
              <div className="code-editor">
                <pre className="code-display">
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>
              
              {/* Cursor Blink */}
              <div className="cursor-blink"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .laptop-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 2000px;
          z-index: 1;
        }

        .laptop-3d {
          position: relative;
          transform-style: preserve-3d;
          animation: float 6s ease-in-out infinite, rotate 20s linear infinite;
        }

        .laptop-base {
          position: relative;
          width: 600px;
          height: 20px;
          background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
          border-radius: 0 0 20px 20px;
          transform: rotateX(85deg) translateZ(-10px);
          box-shadow: 
            0 10px 40px rgba(0, 255, 209, 0.2),
            inset 0 -2px 10px rgba(0, 255, 209, 0.1);
        }

        .keyboard {
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          height: 8px;
          background: linear-gradient(90deg, 
            rgba(0, 255, 209, 0.1) 0%,
            rgba(168, 85, 247, 0.1) 100%
          );
          border-radius: 2px;
        }

        .trackpad {
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: rgba(0, 255, 209, 0.2);
          border-radius: 2px;
        }

        .laptop-screen {
          position: relative;
          width: 600px;
          height: 400px;
          transform: translateY(-200px) rotateX(-10deg);
          transform-style: preserve-3d;
        }

        .screen-bezel {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%);
          border-radius: 10px;
          padding: 15px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.8),
            0 0 40px rgba(0, 255, 209, 0.3),
            inset 0 0 30px rgba(0, 255, 209, 0.05);
          border: 2px solid rgba(0, 255, 209, 0.3);
        }

        .screen-content {
          width: 100%;
          height: 100%;
          background: #000000;
          border-radius: 5px;
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 0 20px rgba(0, 255, 209, 0.1);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(18, 18, 18, 0.95);
          border-bottom: 1px solid rgba(0, 255, 209, 0.3);
        }

        .terminal-buttons {
          display: flex;
          gap: 6px;
        }

        .terminal-buttons span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .btn-close {
          background: #ff5f56;
        }

        .btn-minimize {
          background: #ffbd2e;
        }

        .btn-maximize {
          background: #27c93f;
        }

        .terminal-title {
          color: var(--brand-primary);
          font-size: 11px;
          font-weight: 600;
          font-family: 'Kode Mono', monospace;
        }

        .terminal-lang {
          color: var(--text-muted);
          font-size: 10px;
          font-family: 'Kode Mono', monospace;
        }

        .code-editor {
          padding: 16px;
          height: calc(100% - 40px);
          overflow: hidden;
          position: relative;
        }

        .code-display {
          margin: 0;
          font-family: 'Kode Mono', 'Courier New', monospace;
          font-size: 11px;
          line-height: 1.6;
          color: #e0e0e0;
          animation: typing 3s steps(40) infinite;
        }

        .code-display code {
          color: #00FFD1;
          text-shadow: 0 0 8px rgba(0, 255, 209, 0.5);
        }

        .cursor-blink {
          position: absolute;
          bottom: 20px;
          left: 20px;
          width: 8px;
          height: 16px;
          background: var(--brand-primary);
          animation: blink 1s infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateZ(0px);
          }
          50% {
            transform: translateY(-30px) translateZ(20px);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotateY(-5deg) rotateX(5deg);
          }
          50% {
            transform: rotateY(5deg) rotateX(5deg);
          }
          100% {
            transform: rotateY(-5deg) rotateX(5deg);
          }
        }

        @keyframes typing {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .laptop-3d {
            transform: scale(0.6);
          }
        }

        @media (max-width: 480px) {
          .laptop-3d {
            transform: scale(0.4);
          }
        }
      `}</style>
    </div>
  );
};

export default CodeLaptop3D;
