import { verifyToken } from "../utils/verifyToken.js";

export const verifyTokenMiddleware = (req, res, next) => {
  const authHeader = req.session.token;
  console.log({ authHeader });

  // Verificar si se proporcionó un token de acceso
  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Token de acceso no proporcionado" });
  }

  try {
    // Verificar la validez del token
    const decoded = verifyToken(authHeader);

    // Almacenar la información del usuario verificado en req.user
    req.user = decoded;

    // Continuar con la siguiente función de middleware
    next();
  } catch (error) {
    // Manejar errores de token inválido
    return res.status(401).json({ message: "Token de acceso inválido" });
  }
};
