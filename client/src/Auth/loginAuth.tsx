import ApiServices from "../Services/http";

const api = new ApiServices("http://localhost:1337/api");

export const loginUser = async (identifier: string, password: string) => {
  return await api.PostData("/auth/local", {
    identifier,
    password,
  });
};
