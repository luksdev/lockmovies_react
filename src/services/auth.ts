import axios from "axios";

export async function signInResquest(data: any) {
  await axios.get(
    "https://9947ccq2oj.execute-api.us-east-1.amazonaws.com/login_users",
    {
      withCredentials: false,
      params: {
        data,
      },
    }
  );
}
