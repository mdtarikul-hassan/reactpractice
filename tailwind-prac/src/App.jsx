function App() {
  return (
    <div className="">

    {/* 1. ---------------------  colors --------------- */}
      <h1 className="bg-indigo-600 text-amber-50">Colors1</h1>
      <p className="bg-sky-700/50">Colors 2</p>
      <p className="bg-slate-800 text-rose-300 dark:bg-rose-300 dark:text-slate-800">Colors 3 light and dark mode</p>
      <p className="bg-midnight text-tahiti">Colors from custom</p>
      <p className="bg-[#003049] text-[#FCBF49]">Colors 5</p>
      {/* --- todo : @theme inline, component --- */}
      <p> todo : .....</p>
      <p> --------------------------------------------------------------</p>

    {/*  2. -------------------- typography ----------------- */}
        {/* 2.1 ------------ font familt ------------ */}
        <h1 className="font-sans">font family sans</h1>
        <h1 className="font-mono">font family mono</h1>
        <p className="font-[Open-sans]">font open sans</p>
        <p className="font-sans md:font-mono sm:font-serif">font responsive</p>
        <p className="font-roboto">google font roboto</p>
        <div className="font-display"> font for this entire div Lorem ipsum dolor sit amet.</div>
        {/* ---- todo : custom font {@font-face} */}
        <p>todo : .........</p>
        <p>--------------------------------------------------------------</p>


    </div>
  );
}
export default App;
