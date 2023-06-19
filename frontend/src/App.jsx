import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/orb/Orb";
import Navigation from "./components/navigation/Navigation";
import { useState, useMemo } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Incomes from "./components/incomes/Incomes";
import Expenses from "./components/expenses/Expenses";
import Orb2 from "./components/orb/Orb2";

function App() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Incomes />;
      case 3:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const orbMemo2 = useMemo(() => {
    return <Orb2 />;
  }, []);

  return (
    <AppStyled className="App" bg={bg}>
      {orbMemo}
      {orbMemo2}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-color: #393e46;
  position: relative;
  main {
    flex: 1;
    background: rgba(57, 62, 70, 0.85);

    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
