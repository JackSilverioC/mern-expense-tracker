import { useState } from "react";
import { styled } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { plus } from "../../utils/Icons";
import { UseGlobalContext } from "../../context/GlobalContext";
import Button from "../button/Button";

function Form() {
  const { addIncome, error, setError } = UseGlobalContext();

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: ""
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (e) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: ""
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Título"
          onChange={handleInput}
        />
      </div>
      <div className="input-control">
        <input
          type="number"
          min={"0"}
          step={".01"}
          value={amount}
          name="amount"
          placeholder="Monto"
          onChange={handleInput}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          className="date-picker"
          placeholderText="Ingresa una fecha"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salario</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Inversión</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Transferencia bancaria</option>
          <option value="youtube">Youtube</option>
          <option value="other">Otro</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          style={{ resize: "none" }}
          name="description"
          value={description}
          placeholder="Ingresa una descripción"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput}
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button
          name={"Agregar ingreso"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input,
  date,
  textarea,
  select {
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: #eeeeee;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .react-datepicker-wrapper {
    width: 100%;
  }

  .input-control {
    input {
      width: 100%;
    }
  }
  .date-picker {
    width: 100%;
    &:focus,
    &:active {
      color: rgba(34, 34, 96, 1);
      border: 2px solid rgba(34, 34, 96, 1);
    }
  }

  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;

export default Form;
