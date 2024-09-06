import Card from '../components/Card';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import location_mark from '../assets/icons/location_mark.svg';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data: ChartData<'line'> = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'Male',
      data: [104752, 102046, 95090, 88146, 87291, 81634, 77117, 68164],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      tension: 0.1
    },
    {
      label: 'Female',
      data: [96771, 94827, 88352, 82426, 80920, 75673, 72201, 63444],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: false,
      tension: 0.1
    }
  ]
};

const options: ChartOptions<'line'> = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: false,
      suggestedMin: 50000,
      suggestedMax: 110000
    }
  },
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
};

const PopulationCard: React.FC = () => {
  return (
    <Card>
      <div className="flex h-[338px] w-[476px] flex-col justify-between text-navy-blue">
        <div className="mb-7 flex justify-between">
          <span className="flex gap-1 font-bold">
            <img src={location_mark} alt="Location" />
            <span className="text-navy-blue">Birth in Taiwan</span>
          </span>
          <span className="text-sm text-black opacity-60">source: Ministry of the Interior</span>
        </div>
        <div className="h-[289px] w-[448px]">
          <Line data={data} options={options} />
        </div>
      </div>
    </Card>
  );
};

export default PopulationCard;
