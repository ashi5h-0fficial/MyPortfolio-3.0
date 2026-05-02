// Basic input sanitizer — strip HTML tags to prevent XSS stored in DB
const sanitizeInput = (req, res, next) => {
  const stripTags = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(/<[^>]*>/g, '').trim();
  };

  if (req.body && typeof req.body === 'object') {
    for (const key of Object.keys(req.body)) {
      if (typeof req.body[key] === 'string') {
        req.body[key] = stripTags(req.body[key]);
      }
    }
  }
  next();
};

module.exports = { sanitizeInput };
