import "./App.css";

function App() {
  let dummyList = [
    "Chemicals & Process",
    "Power",
    "Water & Waste Water",
    "Oils & Gas",
    "Pharma",
    "Sugars & Distilleries",
    "Paper & Pulp",
    "Marine & Defence",
    "Metal & Mining",
    "Food & Beverage",
    "Petrochemical & Refineries",
    "Solar | Building | HVAC",
    "Fire Fighting",
    "Agriculture & Residential",
  ]

  return (
    <div className="bg-gradient-to-b from-[#fffffd] to-[#fff9b1] pb-2">
      <div className="w-full flex justify-center">
      <div className="w-[22rem]">
        <img src="assets/logo.png" alt="CRI Logo" className="" />
      </div>
      </div>
      <div className="flex items-center justify-between mx-12 mt-12">
        <div className="w-[38rem]">
          <img src="assets/1.png" alt="Award" className="" />
        </div>
        <div>
          <p className="text-black font-black tracking-tighter">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul className="mt-4 list-disc ms-8">
            <li className="">
              <p className="font-bold tracking-tighter leading-4">
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </p>
            </li>
            <li className="mt-2">
              <p className="font-bold tracking-tighter leading-4">
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 star rated energy efficient
                smart pumps with IoT enabled control panel.
              </p>
            </li>
          </ul>
          <div className="mt-6 w-[58rem]">
            <img src="assets/2.png" alt="Award" className="" />
          </div>
          <p className="text-black font-regular leading-4 tracking-tighter">
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="mt-16 flex flex-col justify-center items-center">
        <p className="uppercase text-center">
          Installed over 10 lakhs star rated pumpsets across the country
          resulting in a cumulative saving of more than 9,000 million units of
          power for the nation.
        </p>
        <div className="w-[64rem] mt-6 self-center justify-self-center">
          <img src="assets/3.png" alt="Award" className="" />
          <p className="mt-8 text-center">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
          <div className="bg-[#eb3337] h-[0.1rem] mt-4"></div>
          <p className="mt-6 font-bold text-center">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE
          </p>
          <div className="flex flex-wrap mt-6">
            {dummyList.map((data, index) => {
              return (
                <div className="flex" key={index}>
                  <p className="uppercase font-semibold text-sm">{data}</p>
                  {index !== dummyList.length - 1 && (
                    <div className="bg-[#eb3337] w-[0.1rem] h-[1.2rem] mx-1"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#eb3337] mt-12 flex justify-around items-center pt-6 pb-16 text-white mx-2">
           <div className="flex items-end">
           <div className="w-12">
             <img src="assets/call.png" alt="call"/>
             </div>
             <p>Toll free <span className="font-bold">1800 200 1234</span></p>
           </div>
           <div className="flex items-end">
             <div className="w-12">
             <img src="assets/fb.png" alt="fb"/>
             </div>
             <a href="https://www.facebook.com/cripumps" target="_blank">www.facebook.com/cripumps</a>
           </div>
           <div className="flex items-end">
           <div className="w-12">
             <img src="assets/site.png" alt="site"/>
             </div>
             <a href="https://www.crigroups.com" target="_blank">www.crigroups.com</a>
           </div>
        </div>
    </div>
  );
}

export default App;
