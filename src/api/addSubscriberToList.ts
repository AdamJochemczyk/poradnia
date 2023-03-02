export const addSubscriberToList = async (name: string, email: string) => {
  const response = await fetch(
    "https://connect.mailerlite.com/api/subscribers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMjRhYjczYmM4NjQ5NjNmY2UzNWFmNzNkYmY5NzY5ZDRkMmU1YzEzOTBkMmEwODkyNzg3NjAzMWZlMWFmOWIxNjA5YzYyZDdiNjAzZjFlMWUiLCJpYXQiOjE2Nzc3MDYwNTAuODkyMDY5LCJuYmYiOjE2Nzc3MDYwNTAuODkyMDcxLCJleHAiOjQ4MzMzNzk2NTAuODg3MzA4LCJzdWIiOiIxNjMxNzciLCJzY29wZXMiOltdfQ.FM7EGjrYS8IiZ-8pewkkYA0JN87bNcPN6Eo8eZwxgUw1JxW-FNfsjfJKCAg_-NqkMqYUFlBsR9Q0toey_cxWZsAllI-6eKFprEoRIzxm7408jT6RYv7nMQbku4UMgLnFjxjsbxms3aJm0JinBZ_dnCC_mkEykwe9yhZ6s2UgeygD9NdqVYo0FYLFlQ0EO5Z-CSjpcDDO0tdUKcNnDgfCQemWl_hDLHYovx6yGLmCUwCCLVMyXim1IXrwSHgnoHGaPmiOvbqBdfb7rzkp8pHpS7waJAFoKvp0hv63MLIW5ucQ1AQl0fvyO_26KE0teS5scw4up8GbjZtd2YFdDwMpPe8Zc6PEr-wRgkHsTS6nSXbusckvQKI3G5xTC7Bxy5hlMnqcC0T-mgvHpYlBovB3yFJ3bYgKJx-JVruu8aL5VzKu2qAZOjcju4ddGgajdsS57M8_rBH0QsFrLToUY4ms66YlU2mXIkRzQN36O5IcYopgNCKQojnpnBdAFAarKwDHENhoQC4nCJUJu_2Tet8edculvSkUHYsvgzLMoPAIk3K4ZQWkMXF_n0DSzNfcSJK-U-mU7-xfzB66mhjTkZYy62alcOCGZEzzDGBg0IVBnF9oNyw0zUVXlR2SoD5IEOrfknP6Nx70TE8QZ6U9FVv3n446OrdyqzDCIdqkI-8OHX0",
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
