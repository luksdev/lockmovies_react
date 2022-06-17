import axios from "axios";

type Props = {
  email: string;
  password: string;
};

export async function signInResquest(data: Props) {
  const response = await axios.post(
    "https://9947ccq2oj.execute-api.us-east-1.amazonaws.com/login_users",
    { email: data.email, password: data.password }
  );

  sessionStorage.setItem("token", "s12dsah28dsj@90dsj9021");

  return response.data
}

export async function signUpResquest(data: any) {
  console.log(data);

  await axios.post(
    "https://9947ccq2oj.execute-api.us-east-1.amazonaws.com/register_users",
    {
      name: data.name,
      email: data.email,
      password: data.password,
      birth_date: data.birth_date,
      phone: data.phone,
      productor: true,
      plan_id: "1",
    }
  );
}
