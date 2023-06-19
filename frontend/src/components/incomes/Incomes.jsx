import { styled } from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { UseGlobalContext } from "../../context/GlobalContext";
import Form from "../form/Form";

import IncomeItem from "../incomeItem/IncomeItem";
import { useEffect } from "react";

function Incomes() {
  const { deleteIncome, incomes, totalIncome, getIncomes, setError } =
    UseGlobalContext();

  useEffect(() => {
    getIncomes();
    setError("");
  }, []);

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Ingresos</h1>
        <h2 className="total-income">
          Total Ingresos: <span>S/ {totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, type, date, category, description } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  amount={amount}
                  date={date}
                  category={category}
                  description={description}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                  type={type}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  );
}

const IncomesStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222831;

    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Incomes;
