if(!process.env.REACT_APP_MAILER_LITE_TOKEN){
  throw new Error("Please provide mailer lite token")
}

export const addSubscriberToList = async (name: string, email: string) => {
  const response = await fetch(
    "https://connect.mailerlite.com/api/subscribers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          `Bearer ${process.env.REACT_APP_MAILER_LITE_TOKEN}`,
      },
      body: JSON.stringify({
        email: email,
        fields: {
          name: name,
        },
      }),
    }
  );
  const data=await response.json()
  return data
};
