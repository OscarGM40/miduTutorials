import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="">
      <motion.h1
        initial={{
          color:'#ff0000',
        }}
        animate={{
          y: 100,
          color: "#fff",
        }}
      >
        Hello World
      </motion.h1>
    </div>
  );
}

export default App;
