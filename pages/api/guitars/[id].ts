import validate from "next-api-validation";
import { guitars } from "./index";

export default validate.get((req, res) => {
  const filteredGuitars = guitars.filter(
    (guitar) => guitar.id === req.query.id
  );
  if (filteredGuitars.length === 0) {
    res.status(404).json({
      message: "Not found",
    });
  } else {
    res.send(filteredGuitars[0]);
  }
});
