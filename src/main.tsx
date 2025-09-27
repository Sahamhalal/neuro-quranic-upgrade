import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import SimpleApp from "./App.simple.tsx";
import "./index.css";

// Add error handling and fallback
try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }

  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  console.error("Failed to mount React app:", error);
  // Fallback content
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h1>NeuroQuranic</h1>
        <p>Loading application...</p>
        <p style="color: red;">Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    `;
  }
}
