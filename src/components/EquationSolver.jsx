import { Trash } from 'lucide-react';
import * as math from 'mathjs';
import { useEffect, useState } from 'react';

export default function EquationSolver() {
  const [method, setMethod] = useState('simpson13');
  const [upperLimit, setUpperLimit] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [n, setN] = useState('');
  const [func, setFunc] = useState('');
  const [result, setResult] = useState(null);
  const [savedCalculations, setSavedCalculations] = useState([]);
  const [isDegreesMode, setIsDegreesMode] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCalculations')) || [];
    setSavedCalculations(saved);
  }, []);

  const saveCalculation = (newResult) => {
    const updatedCalculations = [...savedCalculations, { 
      method, 
      upperLimit, 
      lowerLimit, 
      n, 
      func, 
      result: newResult,
      isDegreesMode,
      id: Date.now()
    }];
    setSavedCalculations(updatedCalculations);
    localStorage.setItem('savedCalculations', JSON.stringify(updatedCalculations));
  };

  const deleteCalculation = (id) => {
    const updatedCalculations = savedCalculations.filter(calc => calc.id !== id);
    setSavedCalculations(updatedCalculations);
    localStorage.setItem('savedCalculations', JSON.stringify(updatedCalculations));
  };

  const calculateIntegral = () => {
    try {
      setError(null);
      const a = parseFloat(lowerLimit);
      const b = parseFloat(upperLimit);
      const nValue = n ? parseInt(n) : Math.ceil(b - a);
      
      if (isNaN(a) || isNaN(b) || isNaN(nValue)) {
        throw new Error("Invalid input. Please check your limits and n value.");
      }

      let sum = 0;
      const h = (b - a) / nValue;

      const f = (x) => {
        try {
          let xValue = x;
          if (isDegreesMode) {
            // Convert x to radians for trigonometric functions
            xValue = math.unit(x, 'deg').toNumber('rad');
          }
          // Use math.evaluate for safer and more versatile function evaluation
          return math.evaluate(func, { x: xValue });
        } catch (error) {
          setError(error.message);
          throw new Error("Invalid function. Please check your input.");
        }
      };

      if (method === 'simpson13') {
        for (let i = 0; i <= nValue; i++) {
          const x = a + i * h;
          if (i === 0 || i === nValue) {
            sum += f(x);
          } else if (i % 2 === 0) {
            sum += 2 * f(x);
          } else {
            sum += 4 * f(x);
          }
        }
        sum = (h / 3) * sum;
      } else if (method === 'simpson38') {
        for (let i = 0; i <= nValue; i++) {
          const x = a + i * h;
          if (i === 0 || i === nValue) {
            sum += f(x);
          } else if (i % 3 === 0) {
            sum += 2 * f(x);
          } else {
            sum += 3 * f(x);
          }
        }
        sum = ((3 * h) / 8) * sum;
      } else if (method === 'trapezoidal') {
        for (let i = 0; i <= nValue; i++) {
          const x = a + i * h;
          if (i === 0 || i === nValue) {
            sum += f(x);
          } else {
            sum += 2 * f(x);
          }
        }
        sum = (h / 2) * sum;
      }

      setResult(sum);
      saveCalculation(sum);
    } catch (error) {
      setError(error.message);
    }
  };

  const renderResult = (value) => {
    return (
      <div className="mt-4 p-4 bg-green-100 rounded">
        <h3 className="text-xl font-bold mb-2">Result:</h3>
        <p>{value.toFixed(6)}</p>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Equation Solver</h2>
      <div className="mb-4">
        <label className="block mb-2">Integration Method:</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="simpson13">Simpson&apos;s 1/3 Rule</option>
          <option value="simpson38">Simpson&apos;s 3/8 Rule</option>
          <option value="trapezoidal">Trapezoidal Rule</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Lower Limit:</label>
        <input
          type="number"
          value={lowerLimit}
          onChange={(e) => setLowerLimit(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Upper Limit:</label>
        <input
          type="number"
          value={upperLimit}
          onChange={(e) => setUpperLimit(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Value of n (optional):</label>
        <input
          type="number"
          value={n}
          onChange={(e) => setN(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Function for integration:</label>
        <input
          type="text"
          value={func}
          onChange={(e) => setFunc(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g., cos(x)"
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isDegreesMode}
            onChange={(e) => setIsDegreesMode(e.target.checked)}
            className="mr-2"
          />
          Use degrees for trigonometric functions
        </label>
      </div>
      <button
        onClick={calculateIntegral}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate
      </button>
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          <p>{error}</p>
        </div>
      )}
      {result !== null && renderResult(result)}
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Previous Calculations</h3>
        {savedCalculations.map((calc) => (
          <div key={calc.id} className="bg-gray-100 p-4 rounded mb-4 flex justify-between items-center">
            <div>
              <p><strong>Method:</strong> {calc.method}</p>
              <p className='text-red-600'><strong>Function:</strong> ∫ {calc.func} dx</p>
              <p><strong>Limits:</strong> [{calc.lowerLimit}, {calc.upperLimit}] {calc.isDegreesMode ? '(degrees)' : '(radians)'}</p>
              <p className='text-red-600'><strong>Result:</strong> {calc.result.toFixed(6)}</p>
            </div>
            <button
              onClick={() => deleteCalculation(calc.id)}
              className="bg-red-500 text-white p-3  rounded hover:bg-red-600"
            >
              <Trash size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

