import React from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ChartDataset
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import 'chartjs-adapter-date-fns'
import { categoryColors, categoryBorders, EventItem } from '../utils/roadmapData'

ChartJS.register(BarElement, CategoryScale, LinearScale, TimeScale, Tooltip, Legend)

type Props = {
  events: EventItem[]
  minDate?: string
  maxDate?: string
}

const RoadmapChart: React.FC<Props> = ({ events, minDate = '2025-10-01', maxDate = '2025-12-31' }) => {
  const labels = events.map(e => e.label)

  // Use `any` for dataset item shape because Chart.js time-range bar uses custom x tuples
  const data: ChartData<'bar', any[], string> = {
    labels,
    datasets: [{
      label: 'Event Duration',
      data: events.map(e => ({ x: [e.start, e.end], y: e.label, category: e.category })),
      backgroundColor: events.map(e => categoryColors[e.category]),
      borderColor: events.map(e => categoryBorders[e.category]),
      borderWidth: 1,
      barPercentage: 0.6,
      categoryPercentage: 0.8
    } as unknown as ChartDataset<'bar', any[]>]
  }

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'week',
          tooltipFormat: 'MMM dd, yyyy'
        },
        min: minDate,
        max: maxDate,
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        ticks: {
          autoSkip: false,
          callback: function(this, value) {
            // `this` has getLabelForValue in runtime; TypeScript ignores here
            const label = (this as any).getLabelForValue ? (this as any).getLabelForValue(value) : String(value)
            if (!label) return label
            if (label.length > 25) return label.substring(0, 25) + '...'
            return label
          }
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            const item = context.raw as any
            const start = new Date(item.x[0]).toLocaleDateString()
            const end = new Date(item.x[1]).toLocaleDateString()
            return `${context.dataset.label}: ${start} - ${end}`
          }
        }
      }
    }
  }

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  )
}

export default RoadmapChart