import { verifyToken } from "../utils/verifyToken.js";

export const verifyTokenMiddleware = (req, res, next) => {
  const token = req.session.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token de acceso no proporcionado" });
  }

  try {
    const decoded = verifyToken(token);
    //guardar en el usuario que se verificó ok
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token de acceso invalido" });
  }
};
