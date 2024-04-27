import { createRoot } from "react-dom/client";
import AppProvider from "./AppProvider";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

export default root.render(<AppProvider />);

// export default App;
