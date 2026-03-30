function App() {
  return (
    <div className="">

    {/* 1. ---------------------  colors with opacity--------------- */}
      <h1 className="bg-indigo-600 text-amber-50">Colors1</h1>
      <p className="bg-sky-700/50">Colors 2</p>
      <p className="bg-slate-800 text-rose-300 dark:bg-rose-300 dark:text-slate-800">Colors 3 light and dark mode</p>
      <p className="bg-midnight text-tahiti">Colors from custom</p>
      <p className="bg-[#003049] text-[#FCBF49]">Colors 5</p>
      <p className="bg-[#003049] text-[#FCBF49]/50">Colors 5 opcity 50</p>
      <p className="bg-[#003049] text-[#FCBF49]/70">Colors 5 opacity 70</p>
      {/* --- todo : @theme inline, component --- */}
      <p> todo : .....</p>
      <p> --------------------------------------------------------------</p>

    {/*  2. -------------------- typography ----------------- */}
        {/* 2.1 ------------ font family ------------ */}
        <h1 className="font-sans">font family sans</h1>
        <h1 className="font-mono">font family mono</h1>
        <p className="font-[Open-sans]">font open sans</p>
        <p className="font-sans md:font-mono sm:font-serif">font responsive</p>
        <p className="font-roboto">google font roboto</p>
        <div className="font-display"> font for this entire div Lorem ipsum dolor sit amet.</div>
        {/* ---- todo : custom font {@font-face} */}
        <p>todo : .........</p>
        <p>--------------------------------------------------------------</p>

        {/* 2.2 ------------- font size --------- */}
        <h1 className="text-xl">font size xl</h1>
        <h1 className="text-[10px]">font size 10px</h1>
        <h1 className="sm:text-sm md:text-md lg:text-lg xl:text-xl">font size responsive</h1>
        <br />

        {/* 2.3 ----------- font smoothing ----------- */}
        <h1 className="antialiased">Font smoothing using antialiasing. Lorem ipsum dolor sit amet.</h1>
        <h1 className="subpixel-antialiased">Font smoothing using subpixel antialiasing. Lorem ipsum dolor sit amet.</h1>
        <br />

        {/* 2.4 ---------- font style --------- */}
        <h1 className="italic">italic</h1>
        <h1 className="bold">bold</h1>
        <br />

        {/* 2.5 --------- font weight --------- */}
        <h1 className="font-thin">thin font</h1>
        <h1 className="font-semibold">semibold font</h1>
        <br />

        {/* 2.6 --------- font stratch --------- */}
        <h1 className="font-stretch-ultra-condensed">stretch font</h1>
        <h1 className="font-stretch-expanded">stretch font</h1>
        <br />

        {/* 2.7 --------- font varient numaric ---------- */}
        <p class="ordinal ...">1st</p>
        <p class="slashed-zero ...">0</p>
        <p class="lining-nums ...">1234567890</p>
        <p class="oldstyle-nums ...">1234567890</p>
        <p class="proportional-nums ...">12121</p>
        <p class="tabular-nums ...">12121</p>
        <p class="diagonal-fractions ...">1/2 3/4 5/6</p>
        <p class="stacked-fractions ...">1/2 3/4 5/6</p>
        <dl class="...">
          <dt class="...">Subtotal</dt>
          <dd class="text-right slashed-zero tabular-nums ...">$100.00</dd>
          <dt class="...">Tax</dt>
          <dd class="text-right slashed-zero tabular-nums ...">$14.50</dd>
          <dt class="...">Total</dt>
          <dd class="text-right slashed-zero tabular-nums ...">$114.50</dd>
        </dl>
        <br />


    </div>
  );
}
export default App;
