import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

import { Line } from "react-chartjs-2";
import { styled } from "styled-components";
import { dateFormat } from "../../utils/DateFormat";
import { UseGlobalContext } from "../../context/GlobalContext";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { incomes, expenses } = UseGlobalContext();

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: "Ingresos",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          })
        ],
        backgroundColor: "green",
        tension: 0.2
      },
      {
        label: "Egresos",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          })
        ],
        backgroundColor: "red",
        tension: 0.2
      }
    ]
  };

  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
}

const ChartStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eaeaea;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
  width: 100%;
`;

export default Chart;
