import ApiServices from "../Services/http";

const api = new ApiServices("http://localhost:1337/api");

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  return await api.PostData("/auth/local/register", {
    username,
    email,
    password,
  });
};
