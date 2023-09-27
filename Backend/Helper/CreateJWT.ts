import jwt from "jsonwebtoken";

export function CreateToken(
  payload: object,
  expiresIn: string | number,
  Privatekey: string
) {
  const token = jwt.sign(payload, Privatekey, {
    algorithm: "RS256",
    expiresIn,
  });
  return token;
}
