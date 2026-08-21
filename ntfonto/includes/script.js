/* RESET & BASIC SETUP */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  /* جعل صورة اللوجو خلفية بكامل الشاشة وبدون تكرار */
  background: #000 url('img.jpg') no-repeat center center fixed;
  background-size: cover;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

/* CONSOLE BUTTON (TOP LEFT) */
#toggle-console-btn {
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 9999;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.65);
  color: #00d4ff;
  border: 1px solid #00d4ff;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
}

#toggle-console-btn:hover {
  background: #00d4ff;
  color: #000;
  box-shadow: 0 0 12px #00d4ff;
}

/* OVERLAY STATUS (BOTTOM BAR) */
.status-overlay {
  margin-top: auto;
  margin-bottom: 25px;
  background: rgba(0, 0, 0, 0.75);
  padding: 15px 30px;
  border-radius: 12px;
  border: 1px solid rgba(0, 212, 255, 0.3);
  backdrop-filter: blur(6px);
  text-align: center;
  max-width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

#msgs {
  font-size: 1.2rem;
  color: #00d4ff;
  margin-bottom: 6px;
  font-weight: 600;
  text-shadow: 0 0 8px rgba(0, 212, 255, 0.4);
}

#autoJbLabel {
  font-size: 0.95rem;
  color: #d1d1d1;
}

/* CONSOLE CONTAINER */
#console {
  position: fixed;
  bottom: 90px;
  left: 5%;
  width: 90%;
  max-height: 220px;
  background: rgba(10, 10, 10, 0.93);
  border: 1px solid #00d4ff;
  color: #00ff66;
  border-radius: 8px;
  padding: 12px 16px;
  text-align: left;
  direction: ltr;
  overflow-y: auto;
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 0.85rem;
  line-height: 1.4;
  z-index: 9998;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
}

/* HIDDEN CONTROLS (WORKING IN BACKGROUND) */
.hidden-controls {
  display: none !important;
}

/* SCROLLBAR FOR CONSOLE */
#console::-webkit-scrollbar {
  width: 6px;
}

#console::-webkit-scrollbar-thumb {
  background: #00d4ff;
  border-radius: 3px;
}

#console::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.5);
}