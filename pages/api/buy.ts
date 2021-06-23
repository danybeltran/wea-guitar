import Validate from "next-api-validation";

export default Validate.post((req, res) => {
  const random = (Math.random() * 1.5).toFixed();
  res.status(200).json({
    secret_url:
      random === "1"
        ? "https://twitter.com/dan_abramov"
        : "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  });
});
