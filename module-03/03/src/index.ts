import app from "./server";
import { PORT as port } from "./utils/env.config";

const PORT = port || 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
