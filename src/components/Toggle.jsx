import { motion } from "motion/react";

export default function Toggle({ toggle, onHandleToggle }) {
  function ToggleOff() {
    return (
      <div className="bg-gray toggle-handle relative w-10 overflow-hidden rounded-full p-1">
        <button
          className="h-8/12 absolute left-1 w-4 cursor-pointer rounded-full bg-white"
          onClick={onHandleToggle}
        ></button>
      </div>
    );
  }

  function ToggleOn() {
    return (
      <div className="bg-primary toggle-handle relative w-10 overflow-hidden rounded-full p-1">
        <button
          className="h-8/12 absolute right-1 w-4 cursor-pointer rounded-full bg-white"
          onClick={onHandleToggle}
        ></button>
      </div>
    );
  }

  return (
    <>
      {toggle ? <ToggleOn /> : <ToggleOff />}
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </>
  );
}
