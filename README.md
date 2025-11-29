# Radiology Dictation System

## Overview
This is a cross-platform AI-powered radiology dictation system that leverages Electron and React for the user interface, uses the open-source Whisper (Python) for speech-to-text functionality, and integrates GPT-based smart suggestions via the OpenAI API.

## Technologies
- **Electron**: Cross-platform desktop application framework
- **React**: JavaScript library for building user interfaces
- **Whisper (Python)**: Open-source speech-to-text engine
- **OpenAI API**: For smart suggestions using GPT

## Initial Setup for macOS Intel
1. Ensure you have Node.js and Python installed on your system.
2. Clone the repository:
   ```
   git clone https://github.com/yourusername/demo.git
   cd demo
   ```
3. Install dependencies:
   ```
   npm install
   pip install -r requirements.txt
   ```

## Usage Instructions
To start the application:
1. Run the Electron app:
   ```
   npm start
   ```
2. Use the speech-to-text feature and input data as per prompts.

## Project Structure
This project is structured as follows:

```
/demo
├── README.md
├── src
│   ├── electron
│   ├── react
│   └── python
└── package.json
```

## Contributions
Feel free to contribute to the project by submitting issues and pull requests!