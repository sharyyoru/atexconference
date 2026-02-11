import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Plane, Hotel, Car, DollarSign } from 'lucide-react';

const CostCalculator = () => {
  const [speaker, setSpeaker] = useState('jos');
  const [flightClass, setFlightClass] = useState('business');
  const [hotelNights, setHotelNights] = useState(3);
  const [includeTransfers, setIncludeTransfers] = useState(true);

  const speakerData = {
    jos: {
      name: "Jos Dirkx",
      baseFee: 44040,
      vat: 2202,
      color: "blue",
      gradient: "from-blue-500 to-cyan-400"
    },
    james: {
      name: "James Taylor",
      baseFee: 53215,
      vat: 2660.75,
      color: "orange",
      gradient: "from-orange-500 to-red-400"
    }
  };

  const flightCosts = {
    economy: { jos: 3500, james: 1500 },
    business: { jos: 8000, james: 3500 },
    first: { jos: 15000, james: 8000 }
  };

  const hotelPerNight = 1200;
  const transferCost = 800;

  const s = speakerData[speaker];
  const flightCost = flightCosts[flightClass][speaker];
  const hotelCost = hotelNights * hotelPerNight;
  const transfers = includeTransfers ? transferCost : 0;
  const totalTravel = flightCost + hotelCost + transfers;
  const grandTotal = s.baseFee + s.vat + totalTravel;

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-4">
            <Calculator className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300">Real-Time Calculator</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Landed Cost Calculator</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Adjust travel parameters to calculate the total investment in AED
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6 space-y-6"
            >
              {/* Speaker Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-3">Select Speaker</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.keys(speakerData).map(key => (
                    <button
                      key={key}
                      onClick={() => setSpeaker(key)}
                      className={`px-4 py-3 rounded-xl font-medium transition-all ${
                        speaker === key
                          ? `bg-gradient-to-r ${speakerData[key].gradient} text-white`
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      {speakerData[key].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flight Class */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-3">
                  <Plane className="w-4 h-4 inline mr-2" />
                  Flight Class
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['economy', 'business', 'first'].map(fc => (
                    <button
                      key={fc}
                      onClick={() => setFlightClass(fc)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                        flightClass === fc
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      {fc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hotel Nights Slider */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-3">
                  <Hotel className="w-4 h-4 inline mr-2" />
                  Hotel Nights: <span className="text-white font-bold">{hotelNights}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={hotelNights}
                  onChange={(e) => setHotelNights(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1 night</span>
                  <span>7 nights</span>
                </div>
              </div>

              {/* Transfers Toggle */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-400">
                  <Car className="w-4 h-4 inline mr-2" />
                  Airport Transfers
                </label>
                <button
                  onClick={() => setIncludeTransfers(!includeTransfers)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    includeTransfers ? 'bg-blue-600' : 'bg-slate-700'
                  }`}
                >
                  <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    includeTransfers ? 'translate-x-7' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </motion.div>

            {/* Cost Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6"
            >
              <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-6">
                <DollarSign className="w-5 h-5 text-green-400" />
                Cost Breakdown
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-slate-800">
                  <span className="text-slate-400">Speaker Fee</span>
                  <span className="text-white font-mono">{s.baseFee.toLocaleString()} AED</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-800">
                  <span className="text-slate-400">VAT (5%)</span>
                  <span className="text-white font-mono">{s.vat.toLocaleString()} AED</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-800">
                  <span className="text-slate-400">Flights ({flightClass})</span>
                  <span className="text-white font-mono">{flightCost.toLocaleString()} AED</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-800">
                  <span className="text-slate-400">Hotel ({hotelNights} nights)</span>
                  <span className="text-white font-mono">{hotelCost.toLocaleString()} AED</span>
                </div>
                {includeTransfers && (
                  <div className="flex justify-between py-3 border-b border-slate-800">
                    <span className="text-slate-400">Transfers</span>
                    <span className="text-white font-mono">{transfers.toLocaleString()} AED</span>
                  </div>
                )}
              </div>

              <div className={`mt-6 p-4 rounded-xl bg-gradient-to-r ${s.gradient}`}>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-medium">Grand Total</span>
                  <span className="text-3xl font-bold text-white">{grandTotal.toLocaleString()} AED</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4 text-center">
                * Estimates based on current market rates. Final costs may vary.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
