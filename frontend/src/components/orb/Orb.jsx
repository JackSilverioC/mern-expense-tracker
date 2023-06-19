import { keyframes, styled } from "styled-components";
import { useWindowSize } from "../../utils/UseWindowSize";

function Orb() {
  const { width, height } = useWindowSize();

  const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height / 2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `;

  const OrbStyled = styled.div`
    width: 70vw;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-top: -37vh;
    margin-left: -37vw;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(400px);
    animation: ${moveOrb} 15s alternate linear infinite;
  `;

  return <OrbStyled />;
}

export default Orb;
