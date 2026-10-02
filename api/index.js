// api/index.js - Vercel Node.js serverless function entry point (CommonJS)
// Loads the TanStack Start server bundle

const { createRequire } = require('module');
const require = createRequire(import.meta.url);
const path = require('path');
const fs = require('fs');

// Load the TanStack Start server bundle
const serverPath = path.join(__dirname, '..', 'dist', 'server', 'server.js');

// Check if server bundle exists
if (!fs.existsSync(serverPath)) {
  throw new Error('Server bundle not found at ' + serverPath);
}

// Import the server module
let serverModule;
try {
  serverModule = require(serverPath);
} catch (err) {
  // If ESM, we need a different approach - just re-export
  console.error('Failed to load server bundle:', err.message);
  throw err;
}

const serverHandler = serverModule.default || serverModule;

module.exports = async (req, res) => {
  // Convert Vercel req/res to Fetch API Request/Response
  const url = new URL(req.url, `http://${req.headers.host}`);
  
  const request = new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
  });

  // Create a mock env and ctx for TanStack Start
  const env = {};
  const ctx = {
    waitUntil: (promise) => {
      return promise;
    }
  };

  try {
    const response = await serverHandler.fetch(request, env, ctx);
    
    // Send response back to Vercel
    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Internal Server Error');
  }
};