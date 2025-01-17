import { BeakerIcon } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-blue-700 text-white py-14">
      <div className="container mx-auto text-center">
      
      <div className="flex items-center justify-center mb-4">
        <span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-20">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
      </svg>
      </span>
      </div>

        <h1 className="text-4xl font-bold mb-4">Welcome to Bye Bye IIUC</h1>
        <p className="text-xl mb-8">Solve complex integrals with ease using our advanced numerical methods</p>
   
         <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white  py-10 flex flex-col items-center justify-center">
            <div className="p-6 rounded-lg shadow-lg bg-white text-gray-800 w-11/12 max-w-3xl">
              <h1 className="text-2xl font-bold text-center mb-6">We are implementing here!</h1>

              <div className="space-y-4 ">
                <div className="flex items-center space-x-3">
                  <BeakerIcon className="h-6 w-6 text-blue-500" /> {/* Replace with desired icon */}
                  <p className="text-lg">Trapezoidal Rule</p>
                </div>

                <div className="flex items-center space-x-3">
                  <BeakerIcon className="h-6 w-6 text-purple-500" /> {/* Replace with desired icon */}
                  <p className="text-lg">Simpson&apos;s 1/3 Rule</p>
                </div>

                <div className="flex items-center space-x-3">
                  <BeakerIcon className="h-6 w-6 text-green-500" /> {/* Replace with desired icon */}
                  <p className="text-lg">Simpson&apos;s 3/8 Rule</p>
                </div>
              </div>
            </div>
          </div>
     
      </div>
    </div>
  );
}

