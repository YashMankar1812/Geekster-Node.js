const loggerMiddleware = (req, res, next) => {
    // Log the incoming request details
    const start = Date.now(); // Record the start time
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  
    // Attach an event listener to log the processing time when the response is finished
    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`Response status: ${res.statusCode} - Time taken: ${duration}ms`);
    });
  
    next(); // Pass control to the next middleware
  };
  
  module.exports = loggerMiddleware;
  