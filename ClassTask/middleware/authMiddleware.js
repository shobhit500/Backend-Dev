function authMiddleware(validTokens) {
  return (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    if (!validTokens.includes(token)) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    next();
  };
}

module.exports = authMiddleware;
