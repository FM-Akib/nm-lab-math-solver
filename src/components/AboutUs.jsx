import { BookOpen, Code, School, Users } from 'lucide-react';
export default function AboutUs() {
  return (
    <>
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Numerical Method Lab
          </h1>
          <p className="text-xl text-gray-600">CSE - 4746</p>
        </div>

        {/* Course Details Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-800">Course Details</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <School className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Course Teacher</h3>
                <p className="text-gray-800 text-md mt-2">Arfanul Islam Rafi</p>
                <p className='text-gray-500 text-sm'>Assitant Lecturer</p>
                <p className="text-gray-500 text-sm">Department of CSE, IIUC</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Code className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Course Code</h3>
                <p className="text-gray-600">CSE - 4746</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-8 h-8 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-800">Our Team</h2>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-indigo-600">BYE BYE IIUC</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.ibb.co.com/q5QH6Zf/shahriyar-1.jpg"
                  alt="Shahriyar Hossain"
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-100"
                />
                <h3 className="text-xl font-semibold text-gray-800">Md Shahriyar Hossain Chowdhury</h3>
                <p className="text-indigo-600 font-medium">C211006</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.ibb.co.com/crxT7L9/IMG-20250105-210306.jpg"
                  alt="Fahim Muntasir"
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-100"
                />
                <h3 className="text-xl font-semibold text-gray-800">Mohammad Fahim Muntasir Akib</h3>
                <p className="text-indigo-600 font-medium">C211008</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

