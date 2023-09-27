import bcrypt from "bcrypt";

const saltrounds = process.env.SALT;

const saltnumber: number = saltrounds ? +saltrounds : 8;

export async function Hash(password: string) {
  const salt = await bcrypt.genSalt(saltnumber);

  const hashedpassword = await bcrypt.hash(password, salt);

  return hashedpassword;
}

export async function ValidateUser(hashedpassword: string, password: string) {
  const PasswordMatched = await bcrypt.compare(hashedpassword, password);

  return PasswordMatched;
}
