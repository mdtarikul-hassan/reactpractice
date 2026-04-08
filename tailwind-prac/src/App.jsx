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


      {/* 5 ------------------------------ Background----------------------------------- */}
        {/* 5.1 --------------- img --------------- */}
        {/* <div className="bg-local bg-fixed bg-scrool"></div> */}


        {/* 5.2 ----------------- bg clip ------------- */}
        <div className="border-4 bg-indigo-500 bg-clip-border p-3"></div>
        <div className="border-4 bg-indigo-500 bg-clip-padding p-3"></div>
        <div className="border-4 bg-indigo-500 bg-clip-content p-3"></div>
        <div className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">Hello World</div>


        {/* 5.3 -------------- bg color --------- */}
        <div className="bg-cyan-400 w-10 h-10"></div>

        {/* 5.4 -------------- bg position --------- */}
        <div className="bg-red-400 size-30 rounded-full bg-top">top</div>
        <div className="bg-red-400 size-30 rounded-full bg-bottom">bottom</div>
        <div className="bg-red-400 size-30 rounded-full bg-left">left</div>
        <div className="bg-red-400 size-30 rounded-full bg-rigth">right</div>
        <div className="bg-red-400 size-30 rounded-full bg-center">center</div>
        <div className="bg-red-400 size-30 rounded-full bg-top-left">t-l</div>
        <div className="bg-red-400 size-30 rounded-full bg-top-right">t-r</div>
        <div className="bg-red-400 size-30 rounded-full bg-bottom-left">b-l</div>
        <div className="bg-red-400 size-30 rounded-full bg-bottom-right">b-r</div>
        <div className=" bg-repeat bg-red-400 size-30 rounded-full bg-position-[center-top-1rem]"> cus</div>


        {/* 5.5 --------------- bg size ------------------ */}
        <div className="bg-auto"></div>
        <div className="bg-contain"></div>
        <div className="bg-cover"></div>


      {/* 6 ------------------------- border ------------------ */}

        {/* 6.1 --------------- border radius ------------- */}
        <div className="size-8 rounded-tl-lg bg-cyan-500"></div>
        <div className="size-8 rounded-10 bg-cyan-300"></div>
        <div className="size-8 rounded-full bg-cyan-700"></div>
        <div className="size-8 rounded-md bg-cyan-500"></div>



        {/* 6.2 ---------------- border color --------- */}
        <div className="size-10 bg-red-500 border-black rounded-b-md"></div>
            {/* stye and another same as border and outline */}
        


      {/* 7 ---------------------------- flex and grid --------------------------- */}

        {/* 7.1 ---------------- flex basic --------------- */}
        <h1>Flex row</h1>
        <div className="flex flex-row">
          <div className="basis-10 rounded-3xl bg-red-500">1 flex row</div>
          <div className="basis-10 rounded-3xl bg-red-600">2 flex row</div>
          <div className="basis-10 rounded-3xl bg-red-700">3 flex row</div>
        </div>
        <h1>Flex row reverse</h1>
        <div className="flex flex-row-reverse">
          <div className="basis-10 rounded-3xl bg-red-500">1 flex row rev</div>
          <div className="basis-10 rounded-3xl bg-red-600">2 flex row rev</div>
          <div className="basis-10 rounded-3xl bg-red-700">3 flex row rev</div>
        </div>
        <h1>Flex col</h1>
        <div className="flex flex-col">
          <div className="basis-10 rounded-3xl bg-red-500">1 flex col</div>
          <div className="basis-10 rounded-3xl bg-red-600">2 flex col</div>
          <div className="basis-10 rounded-3xl bg-red-700">3 flex col</div>
        </div>
        <h1>Flex col reverse</h1>
        <div className="flex flex-col-reverse">
          <div className="basis-10 rounded-3xl bg-red-500">1 flex col rev</div>
          <div className="basis-10 rounded-3xl bg-red-600">2 flex col rev</div>
          <div className="basis-10 rounded-3xl bg-red-700">3 flex col rev</div>
        </div>

        {/* 7.2 ------------- wrap ------------- */}
        <h1>Flex wrap</h1>
        <div className="flex flex-wrap">
          <div className="basis-60 rounded-3xl bg-red-500">1 flex wrap</div>
          <div className="basis-60 rounded-3xl bg-red-600">2 flex wrap</div>
          <div className="basis-60 rounded-3xl bg-red-700">3 flex wrap</div>
        </div>
        <h1>Flex nowrap</h1>
        <div className="flex flex-nowrap">
          <div className="basis-60 rounded-3xl bg-red-500">1 flex nowrap</div>
          <div className="basis-60 rounded-3xl bg-red-600">2 flex nowrap</div>
          <div className="basis-60 rounded-3xl bg-red-700">3 flex nowrap</div>
        </div>
        <h1>Flex wrap reverse</h1>
        <div className="flex flex-wrap-reverse">
          <div className="basis-60 rounded-3xl bg-red-500">1 flex wrap rev</div>
          <div className="basis-60 rounded-3xl bg-red-600">2 flex wrap rev</div>
          <div className="basis-60 rounded-3xl bg-red-700">3 flex wrap rev</div>
        </div>
        
        {/* 7.3 --------- flex style ----------- */}
        <h1>Flex style</h1>
        <div className="flex">
          <div className="flex-none rounded-2xl w-14 bg-red-500">1 flex</div>
          <div className="flex-1 rounded-2xl w-32 bg-red-600">2 flex</div>
          <div className="flex-2 rounded-2xl w-64-3xl bg-red-700">3 flex</div>
          <div className="flex-initial rounded-2xl w-64-3xl bg-red-700">3 flex</div>
          <div className="flex-auto rounded-2xl w-64-3xl bg-red-700">3 flex</div>
        </div>

        {/* 7.4 ------------ grow ----------- */}
        <h1>Flex grow</h1>
        <div className="flex">
          <div className="flex-none rounded-2xl w-14 bg-red-500">1 flex</div>
          <div className="grow rounded-2xl w-32 bg-red-600">2 flex</div>
          <div className="flex-none rounded-2xl w-64-3xl bg-red-700">3 flex</div>
        </div>

        {/* 7.5 ----------- shrink ----------- */}
        <h1>Flex shrink</h1>
        <div className="flex">
          <div className="flex-none rounded-2xl w-14 bg-red-500">1 flex</div>
          <div className="shrink rounded-2xl w-32 bg-red-600">2 flex</div>
          <div className="flex-none rounded-2xl w-64-3xl bg-red-700">3 flex</div>
        </div>

        {/* 7.6 ------------ order -------------- */}
        <h1>Flex order</h1>
        <div className="flex justify-center">
          <div className="order-first rounded-2xl w-14 bg-red-500">1 flex</div>
          <div className="order-3 rounded-2xl w-14 bg-red-500">1 flex</div>
          <div className="order-2 rounded-2xl w-32 bg-red-600">2 flex</div>
          <div className="order-1 rounded-2xl w-64-3xl bg-red-700">3 flex</div>
          <div className="order-last rounded-2xl w-64-3xl bg-red-700">3 flex</div>
        </div>

        {/* 7.7 -------------- grid-template-columns -------------- */}
        <h1>Grid template columns</h1>
        <div className="grid grid-flow-row grid-cols-4 gap-4">
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div className="rounded-2xl w-14 bg-red-500">6</div>
          <div className="col-span-3 grid grid-cols-subgrid gap-4">
            <div className="rounded-2xl w-14 bg-red-500">7</div>
          </div>
        </div>

        {/* 7.8 -------------- grid-columns ------------- */}
        <h1>Grid col span</h1>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4 col-start-2 rounded-2xl bg-red-500">1</div>
          <div className="col-start-1 col-end-3 rounded-2xl bg-red-500">2</div>
          <div className="col-span-2 col-end-7 rounded-2xl bg-red-500">3</div>
          <div className="col-start-1 col-end-7 rounded-2xl bg-red-500">3</div>
          <div className="col-span-3 rounded-2xl bg-red-500">4</div>
          <div className="rounded-2xl bg-red-500">5</div>
          <div className="col-span-1 rounded-2xl bg-red-500">6</div>
        </div>

        {/* 7.9 -------------- grid-template-row -------------- */}
        <h1>Grid template row</h1>
        <div className="grid grid-flow-col grid-rows-4 gap-4">
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div class="row-span-3 grid grid-rows-subgrid gap-4">
            <div className="rounded-2xl w-14 bg-red-500">6</div>
          </div>
          <div className="rounded-2xl w-14 bg-red-500">7</div>
          <div className="rounded-2xl w-14 bg-red-500">8</div>
          <div className="rounded-2xl w-14 bg-red-500">9</div>
          <div className="rounded-2xl w-14 bg-red-500">10</div>
        </div>

        {/* 7.10 -------------- grid-row ------------- */}
        <h1>Grid row</h1>
        <div className="grid grid-flow-col grid-rows-6 gap-4">
          <div className="row-span-4 rounded-2xl bg-red-500">1</div>
          <div className="col-span-2 rounded-2xl bg-red-500">2</div>
          <div className="col-span-2 col-end-7 rounded-2xl bg-red-500">3</div>
          <div className="col-start-1 row-span-2 rounded-2xl bg-red-500">4</div>
          <div className="col-span-3 rounded-2xl bg-red-500">5</div>
          <div className="rounded-2xl bg-red-500">6</div>
          <div className="col-span-1 rounded-2xl bg-red-500">7</div>
        </div>

        {/* 7.11 ------------- grid-auto-flow ----------- */}
        <h1>Grid auto flolw</h1>
        <div className="grid grid-flow-row-dense grid-rows-3 grid-cols-3 gap-4">
          <div className="col-span-2 rounded-2xl bg-red-500">1</div>
          <div className="col-span-2 rounded-2xl bg-red-500">2</div>
          <div className="rounded-2xl bg-red-500">3</div>
          <div className="rounded-2xl bg-red-500">4</div>
          <div className="rounded-2xl bg-red-500">5</div>
          <div className="rounded-2xl bg-red-500">6</div>
          <div className="rounded-2xl bg-red-500">7</div>
        </div>

        {/* 7.12 ---------- grid auto columns -------------- */}
        <h1>Grid auto columns</h1>
        <div className="grid auto-cols-max grid-flow-col gap-4">
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div className="rounded-2xl w-14 bg-red-500">6</div>
          <div className="rounded-2xl w-14 bg-red-500">7</div>
        </div>

        {/* 7.13 ---------- grid auto rows -------------- */}
        <h1>Grid auto rows</h1>
        <div className="grid auto-rows-max grid-flow-row gap-4">
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div className="rounded-2xl w-14 bg-red-500">6</div>
          <div className="rounded-2xl w-14 bg-red-500">7</div>
        </div>

        {/* 7.14 ---------- grid gap ----------- */}
        <h1>Grid gap</h1>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div className="rounded-2xl w-14 bg-red-500">6</div>
          <div className="rounded-2xl w-14 bg-red-500">7</div>
        </div>

        {/* 7.15 ------------ justify content --------- */}
        <h1>justify content</h1>
        <h3>justify center</h3>
        <div className="flex justify-center-safe gap-1">
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div className="rounded-2xl w-14 bg-red-500">6</div>
          <div className="rounded-2xl w-14 bg-red-500">7</div>
        </div>
        <h3>justify end</h3>
        <div className="flex justify-end gap-1">
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div className="rounded-2xl w-14 bg-red-500">6</div>
          <div className="rounded-2xl w-14 bg-red-500">7</div>
        </div>
        <h3>justify start</h3>
        <div className="flex justify-start gap-1">
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div className="rounded-2xl w-14 bg-red-500">6</div>
          <div className="rounded-2xl w-14 bg-red-500">7</div>
        </div>
        <h3>justify stretch</h3>
        <div className="grid grid-cols-[4rem_auto_4rem] justify-stretch gap-1">
          <div className="rounded-2xl bg-red-500">1</div>
          <div className="rounded-2xl bg-red-500">2</div>
          <div className="rounded-2xl bg-red-500">3</div>
        </div>
        <h3>justify evenly</h3>
        <div className="flex justify-evenly gap-1">
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div className="rounded-2xl w-14 bg-red-500">6</div>
          <div className="rounded-2xl w-14 bg-red-500">7</div>
        </div>
        <h3>justify around</h3>
        <div className="flex justify-around gap-1">
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div className="rounded-2xl w-14 bg-red-500">6</div>
          <div className="rounded-2xl w-14 bg-red-500">7</div>
        </div>
        <h3>justify between</h3>
        <div className="flex justify-between gap-1">
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div className="rounded-2xl w-14 bg-red-500">6</div>
          <div className="rounded-2xl w-14 bg-red-500">7</div>
        </div>

        {/* 7.16 ---------- justify items -------------- */}
        <h1>justify items start</h1>
        <div className="grid grid-cols-3 justify-items-start gap-4"> {/* same as prev lots of available */}
          <div className="rounded-2xl w-14 bg-red-500">1</div>
          <div className="rounded-2xl w-14 bg-red-500">2</div>
          <div className="rounded-2xl w-14 bg-red-500">3</div>
          <div className="rounded-2xl w-14 bg-red-500">4</div>
          <div className="rounded-2xl w-14 bg-red-500">5</div>
          <div className="rounded-2xl w-14 bg-red-500">6</div>
          <div className="rounded-2xl w-14 bg-red-500">7</div>
        </div>

        {/* 7.17 ---------- justify self -------------- */}
        <h1>justify self</h1>
        <div className="grid grid-cols-3 justify-items-stretch gap-4"> {/* same as prev lots of available */}
          <div className="justify-self-auto rounded-2xl bg-red-500">1</div>
          <div className="justify-self-start rounded-2xl bg-red-500">2</div>
          <div className="justify-self-auto rounded-2xl bg-red-500">3</div>
          <div className="justify-self-auto rounded-2xl bg-red-500">4</div>
          <div className="justify-self-center rounded-2xl bg-red-500">5</div>
          <div className="justify-self-auto rounded-2xl bg-red-500">6</div>
          <div className="justify-self-auto rounded-2xl bg-red-500">7</div>
          <div className="justify-self-end rounded-2xl bg-red-500">8</div>
          <div className="justify-self-auto rounded-2xl bg-red-500">9</div>
        </div>


        {/* 7.18 --------------- align conttent ----------- */}
        <h1>align content</h1>
        <div className="grid h-56 grid-cols-3 content-center gap-4"> {/* same as prev lots of available */}
          <div className="rounded-2xl bg-red-500">1</div>
          <div className="rounded-2xl bg-red-500">2</div>
          <div className="rounded-2xl bg-red-500">3</div>
          <div className="rounded-2xl bg-red-500">4</div>
          <div className="rounded-2xl bg-red-500">5</div>
          <div className="rounded-2xl bg-red-500">6</div>
          <div className="rounded-2xl bg-red-500">7</div>
        </div>

        {/* 7.19 --------------- align items ----------- */}
        <h1>align items</h1>
        <div className="grid grid-cols-3 items-stretch gap-4">
          <div className="py-4 rounded-2xl bg-red-500">1</div>
          <div className="py-12 rounded-2xl bg-red-500">2</div>
          <div className="py-8 rounded-2xl bg-red-500">3</div>
          <div className="rounded-2xl bg-red-500">4</div>
          <div className="rounded-2xl bg-red-500">5</div>
          <div className="rounded-2xl bg-red-500">6</div>
          <div className="rounded-2xl bg-red-500">7</div>
        </div>

        {/* 7.20 --------------- align self ----------- */}
        <h1>align items</h1>
        <div className="flex grid-cols-3 items-stretch gap-4"> {/* same as prev lots of available */}
          <div className="sefl-auto rounded-2xl w-14 bg-red-500">1</div>
          <div className=" rounded-2xl w-14 bg-red-500">2</div>
          <div className=" rounded-2xl w-14 bg-red-500">3</div>
          <div className=" rounded-2xl w-14 bg-red-500">4</div>
          <div className="self-auto rounded-2xl w-14 bg-red-500">5</div>
          <div className=" rounded-2xl w-14 bg-red-500">6</div>
          <div className=" rounded-2xl w-14 bg-red-500">7</div>
          <div className=" rounded-2xl w-14 bg-red-500">8</div>
          <div className=" rounded-2xl w-14 bg-red-500">9</div>
        </div>

        {/* 7.21 --------------- place content ----------- */}
        <h1>place content</h1>
        <div className="grid grid-cols-2 place-content-center gap-4"> {/* same as prev lots of available */}
          <div className="rounded-2xl bg-red-500">1</div>
          <div className="rounded-2xl bg-red-500">2</div>
          <div className="rounded-2xl bg-red-500">3</div>
          <div className="rounded-2xl bg-red-500">4</div>
        </div>

        {/* 7.22 --------------- place item ----------- */}
        <h1>place items</h1>
        <div className="grid grid-cols-3 place-items-start gap-4"> {/* same as prev lots of available */}
          <div className="place-self-auto rounded-2xl bg-red-500">1</div>
          <div className=" rounded-2xl w-14 bg-red-500">2</div>
          <div className=" rounded-2xl w-14 bg-red-500">3</div>
          <div className=" rounded-2xl w-14 bg-red-500">4</div>
          <div className=" rounded-2xl w-14 bg-red-500">5</div>
          <div className=" rounded-2xl w-14 bg-red-500">6</div>
          <div className=" rounded-2xl w-14 bg-red-500">7</div>
          <div className=" rounded-2xl w-14 bg-red-500">8</div>
          <div className=" rounded-2xl w-14 bg-red-500">9</div>
        </div>


      {/* 8 ------------------------------ layout ------------------------------ */}
        <h1>.................. Layout ................</h1>
        {/* 8.1 --------- aspect-ratio ----------- */}
        <h1>Aspect Ratio</h1>
        <div>
          {/* aspect auto/ square/ video/ custom available */}
          <img className="aspect-square object-cover" src="./assets/hero.png" alt="hero.png" />
        </div>

        {/* 8.2 ----------- columns ---------------- */}
        <h1>Columns</h1>
        <div className="columns-3">
          {/* customize with own */}
          <img class="aspect-square object-cover" src="./assets/hero.png" alt="hero.png" />
          <img class="aspect-square object-cover" src="./assets/hero.png" alt="hero.png" />
          <img class="aspect-square object-cover" src="./assets/hero.png" alt="hero.png" />
          <img class="aspect-square object-cover" src="./assets/hero.png" alt="hero.png" />
          <img class="aspect-square object-cover" src="./assets/hero.png" alt="hero.png" />
        </div>










    </div>
  );
}
export default App;
