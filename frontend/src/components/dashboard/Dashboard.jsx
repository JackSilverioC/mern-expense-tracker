import { styled } from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Chart from "../chart/Chart";
import { useEffect } from "react";
import { UseGlobalContext } from "../../context/GlobalContext";
import { dollar } from "../../utils/Icons";
import History from "../history/History";

function Dashboard() {
  const {
    totalExpense,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses
  } = UseGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>Todas las transacciones</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Ingresos</h2>
                <p>
                  {dollar} S/{totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Egresos</h2>
                <p>
                  {dollar} S/{totalExpense()}
                </p>
              </div>
              <div className="balance">
                <h2>Balance</h2>
                <p>
                  {dollar} S/{totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min<span>Ingreso</span>Max
            </h2>
            <div className="salary-item">
              <p>
                S/ {Math.min(...incomes.map((item) => item.amount)).toFixed(2)}
              </p>
              <p>
                S/ {Math.max(...incomes.map((item) => item.amount)).toFixed(2)}
              </p>
            </div>
            <h2 className="salary-title">
              Min <span>Egreso</span>Max
            </h2>
            <div className="salary-item">
              <p>
                S/ {Math.min(...expenses.map((item) => item.amount)).toFixed(2)}
              </p>
              <p>
                S/ {Math.max(...expenses.map((item) => item.amount)).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1 / 4;
      height: 40vh;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          text-align: center;
          background: #252a34;

          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          p {
            margin-top: 0.5rem;
            font-size: 2rem;
            font-weight: 700;
          }
        }

        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            margin-top: 0.5rem;
            color: var(--color-green);
            opacity: 0.6;
            font-size: 2.5rem;
          }
        }
      }
    }

    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 0.5rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1rem;
        span {
          font-size: 1.6rem;
        }
      }
      .salary-item {
        background: #eeeeee;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default Dashboard;
