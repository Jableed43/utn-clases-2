import jwt from "jsonwebtoken";

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, "secreto");
    return decoded;
  } catch (error) {
    throw new Error("Token invalido");
  }
}
