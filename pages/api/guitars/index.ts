import Validate from "next-api-validation";
import guitars from "../../../src/db/guitars.json";
export { guitars };
export default Validate.get((req, res) => {
  res.send(guitars);
});
