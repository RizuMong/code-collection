import axios from "axios";
import querystring from "querystring";

export const code = async (inputs) => {
  let config = inputs.config;

  try {
    const headers = {
      "Content-Type": "application/json",
    };
    // define body
    const requestBody = querystring.stringify({
      grant_type: "password",
      username: config.credential.email,
      password: config.credential.password,
    });

    console.log(requestBody);

    const response = await axios.post(
      "https://app.qontak.com/oauth/token",
      requestBody,
      { headers }
    );
    if (response.data.access_token) {
      return {
        access_token: response.data.access_token,
        status: 200,
        errors: null,
      };
    }
  } catch (error) {
    return {
      access_token: "",
      status: error.response.status,
      errors: {
        status: error.response.status,
        message: error.response.data,
      },
    };
  }
  return true;
};
