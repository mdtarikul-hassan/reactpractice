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

        {/* 2.8 -------- letter spacing ------------- */}
        <p className="tracking-tighter">letter spacing tighter</p>
        <p className="tracking-tight">letter spacing tight</p>
        <p className="tracking-normal">letter spacing normal</p>
        <p className="tracking-wide">letter spacing wide</p>
        <p className="tracking-wider">letter spacing wider</p>
        <p className="tracking-widest">letter spacing widest</p>
        <br />

        {/* 2.9 -------- line clamp --------  */}
        <article>
          <time>Mar 10, 2020</time>
          <h2>Boost your conversion rate</h2>
          <p class="line-clamp-3">
            Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut
            sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat
            dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt
            ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur
            enim.
          </p>
          <div>
            <img src="/img/lindsay.jpg" />
            Lindsay Walton
          </div>
        </article>
        <br />


        {/* 2.10 --------- line height --------- */}
        <p className="text-base/6">Line height</p>
        <p className="text-base/7">Line height</p>
        <p className="text-base/8">Line height</p>
        <p className="text-base/9">Line height</p>
        <p className="leading-5">Line height</p>
        

        {/* 2.11 ----------- list style position ------------ */}
        <ul class="list-inside">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
        </ul>
        <ul class="list-outside">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
        </ul>


        {/* 2.12 -------------- text align ----------- */}
        <p className="text-center">text center</p>
        <p className="text-left">text left</p>
        <p className="text-right">text right</p>
        <p className="text-end">text end</p>
        <p className="text-start">text start</p>
        <p className="text-justify">text justify</p>
        <br />

        {/* 2.13 --------- text decoration line, color, style, thickness , underline offset-------- */}
        <p className="underline decoration-sky-500 decoration-solid decoration-1 underline-offset-1">underline</p>
        <p className="underline decoration-slate-500 decoration-double decoration-2 underline-offset-4">underline</p>
        <p className="underline decoration-sky-800 decoration-dotted">underline</p>
        <p className="overline decoration-red-600 decoration-dashed">overline</p>
        <p className="overline decoration-blue-600">overline</p>
        <p className="overline decoration-bermuda decoration-wavy">overline</p>
        <p className="line-through decoration-indigo-700 decoration-4">line-through</p>
        <p className="line-through decoration-indigo-700 decoration-wavy">line-through</p>
        <p className="no-underline">no-underline</p>
        <br />


        {/* 2.14 --------- text tranaformation ---------- */}
        <p className="uppercase">Uppercase</p>
        <p className="lowercase">Lowercase</p>
        <p className="capitalize">capitalize</p>
        <p className="normal-case">NormaL-cASE</p>
        <br />

        {/* 2.15 --------- text overflow ----------- */}
        <p className="truncate">Text-truncate Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit, facilis culpa ducimus reiciendis vel dolorem atque quia autem hic?</p>
        <p className="text-ellipsis">Text-truncate Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit, facilis culpa ducimus reiciendis vel dolorem atque quia autem hic?</p>
        <p className="text-clip">Text-truncate Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit, facilis culpa ducimus reiciendis vel dolorem atque quia autem hic?</p>
        <br />

        {/* 2.16 -------- text wrap, indent ----------- */}
        <p className="text-wrap">Text Wrap Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam accusantium, deleniti natus sit vel dignissimos? Excepturi ratione pariatur non totam consequuntur sed dolores labore, reiciendis a eum odit. Eveniet, reprehenderit?</p>
        <p className="indent-8">Text Wrap Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ex sit velit rem, ullam ipsum similique sunt cupiditate et, voluptatibus optio non sequi nostrum cum veritatis impedit sint! Eveniet, et!</p>
        <p className="pl-9 -indent-8">Text Wrap Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, temporibus enim excepturi, quas quisquam rerum porro iure sint quos quam est repudiandae perspiciatis deserunt? Aliquid soluta praesentium quae ut ab.</p>
        <br />


        {/* 2.17 -------- alignment ----------- */}
        <p className="inline-block align-bottom">verticle bottom alignment Lorem ipsum dolor sit amet.</p>
        <p className="inline-block align-middle">verticle middle alignment Lorem ipsum dolor sit amet.</p>
        <p className="inline-block align-top">verticle top alignment Lorem ipsum dolor sit amet.</p>
        <br />


        {/* 2.18 -------- whitespace --------- */}
        <p className="whitespace-normal">white space          normal       </p>
        <p className="whitespace-nowrap">white space          normal       </p>
        <p className="whitespace-pre">white space          normal       </p>
        <p className="whitespace-break-spaces">white space          normal       </p>
        <br />

        {/* 2.19 -------- word break -------- */}
        <p className="break-normal">word break   word     break</p>
        <p className="break-all">word break   word     break</p>
        <p className="break-keep">word break   word     break</p>

        <p>todo : content in typography ....</p>
      <p>---------------------------------------------------------------------------------</p>
      <br />


    {/* 3 --------------------------- spacing --------------------- */}

        {/* 3.1 ------------ margin ---------- */}
        <div className="bg-red-600 mt-3">
          <h1 className="text-slate-700">margin top</h1>
        </div>
        <div className="bg-red-600 mb-3">
          <h1 className="text-slate-700">margin bottom</h1>
        </div>
        <div className="bg-red-600 ml-5">
          <h1 className="text-slate-700">margin left</h1>
        </div>
        <div className="bg-red-600 mr-5">
          <h1 className="text-slate-700">margin right</h1>
        </div>
        <div className="bg-red-600 mx-6">
          <h1 className="text-slate-700">margin x axis</h1>
        </div>
        <div className="bg-red-600 my-5">
          <h1 className="text-slate-700">margin y axis</h1>
        </div>
        <div className="bg-red-600 m-6">
          <h1 className="text-slate-700">margin all</h1>
        </div>
        <div className="bg-red-600 m-auto">
          <h1 className="text-slate-700">margin auto</h1>
        </div>
        <br />

        {/* 3.2 ---------- padding ------------- */}
        <div className="bg-[#003049]">
          <h1 className=" text-[#FCBF49] pt-6">padding top</h1>
        </div><br />
        <div className="bg-[#003049]">
          <h1 className=" text-[#FCBF49] pb-6">padding bottom</h1>
        </div><br />
        <div className="bg-[#003049]">
          <h1 className=" text-[#FCBF49] pl-6">padding left</h1>
        </div><br />
        <div className="bg-[#003049]">
          <h1 className=" text-[#FCBF49] px-6">padding x axis</h1>
        </div><br />
        <div className="bg-[#003049]">
          <h1 className=" text-[#FCBF49] py-6">padding y axis</h1>
        </div><br />
        <div className="bg-[#003049]">
          <h1 className=" text-[#FCBF49] p-6">padding all</h1>
        </div><br />
        <div dir="ltr" className="bg-[#003049]">
          <h1 className=" text-[#FCBF49] ps-6">padding ltr start</h1>
          <h1 className=" text-[#FCBF49] pe-6">padding ltr end</h1>
        </div><br />
        <div dir="rtl" className="bg-[#003049]">
          <h1 className=" text-[#FCBF49] ps-6">padding rtl start</h1>
          <h1 className=" text-[#FCBF49] pe-6">padding rtl end</h1>
        </div><br />

      {/* 4 ----------------- sizing --------------------- */}
        {/* 4.1 ---------- width, min width, max width, height, min height, max height -------------- */}
        <div className="w-96 bg-cyan-700">Width</div>
        <div className="w-1/2 bg-cyan-700">Width</div>
        <div className="w-full bg-cyan-700">Width</div>
        <div className="w-auto bg-cyan-700">Width</div>
        <div className="size-10 bg-cyan-700">Width</div>
        <div className="size-30 bg-cyan-700">Width</div>
        <div className="size-50 bg-cyan-700">Width</div>
        <div className="min-w-10 bg-red-500">min width</div>
        <div className="max-w-10 bg-red-500">max width</div>
        <div className="h-10 bg-amber-950">height</div>
        <div>height = same as width</div>

        {/* h-screen and w-screen use in real project */}
        <div className="inline-3xl bg-cyan-950">inline size same as prev</div>
        <div className="block-8 bg-slate-600">block size same as prev</div>



    </div>
  );
}
export default App;
