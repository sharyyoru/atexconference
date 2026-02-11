import { motion } from 'framer-motion';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { BarChart3 } from 'lucide-react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const DelegateSentimentChart = () => {
  const data = {
    labels: ['Government', 'HR Leaders', 'Tech/AI', 'Finance', 'Education', 'C-Suite'],
    datasets: [
      {
        label: 'Jos Dirkx',
        data: [95, 60, 90, 70, 95, 85],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
      },
      {
        label: 'James Taylor',
        data: [70, 95, 75, 65, 70, 80],
        backgroundColor: 'rgba(249, 115, 22, 0.2)',
        borderColor: 'rgba(249, 115, 22, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(249, 115, 22, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(249, 115, 22, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(148, 163, 184, 0.2)',
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.2)',
        },
        pointLabels: {
          color: 'rgba(148, 163, 184, 1)',
          font: {
            size: 12,
            weight: '500',
          },
        },
        ticks: {
          display: false,
          stepSize: 20,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'rgba(148, 163, 184, 1)',
          padding: 20,
          font: {
            size: 14,
          },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#fff',
        bodyColor: 'rgba(148, 163, 184, 1)',
        borderColor: 'rgba(148, 163, 184, 0.3)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}% affinity`;
          }
        }
      },
    },
  };

  const sectorDetails = [
    { sector: 'Government', jos: 95, james: 70, josNote: 'Ministry-level engagement', jamesNote: 'Abu Dhabi Bureau partner' },
    { sector: 'HR Leaders', jos: 60, james: 95, josNote: 'Secondary audience', jamesNote: 'Core audience' },
    { sector: 'Tech/AI', jos: 90, james: 75, josNote: 'Top 100 AI recognition', jamesNote: 'Innovation focus' },
    { sector: 'Finance', jos: 70, james: 65, josNote: 'HSBC events', jamesNote: 'Deloitte partnership' },
    { sector: 'Education', jos: 95, james: 70, josNote: 'Core expertise', jamesNote: 'Creativity workshops' },
    { sector: 'C-Suite', jos: 85, james: 80, josNote: 'CEO/CTO focus', jamesNote: 'CHRO specialty' },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-4">
            <BarChart3 className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-slate-300">Audience Analysis</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Delegate Sentiment Chart</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Radar visualization showing sector attraction by speaker
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
          >
            <div className="aspect-square max-w-md mx-auto">
              <Radar data={data} options={options} />
            </div>
          </motion.div>

          {/* Sector Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6">Sector Breakdown</h3>
            
            {sectorDetails.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{item.sector}</span>
                  <div className="flex gap-4 text-sm">
                    <span className="text-blue-400">{item.jos}%</span>
                    <span className="text-orange-400">{item.james}%</span>
                  </div>
                </div>
                
                {/* Progress bars */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-16">Jos</span>
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.jos}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-16">James</span>
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.james}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-orange-500 to-red-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-slate-700">
                  <div>
                    <span className="text-xs text-blue-400">Jos: </span>
                    <span className="text-xs text-slate-400">{item.josNote}</span>
                  </div>
                  <div>
                    <span className="text-xs text-orange-400">James: </span>
                    <span className="text-xs text-slate-400">{item.jamesNote}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DelegateSentimentChart;
