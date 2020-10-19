import styled from 'styled-components';

const StyledFormik = styled.div`
  font-family: 'Work Sans', sans-serif;

  width: 100vw;
  height: 100vh;
  display: flex;
  background: #21212b;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    height: 30px;
  }
  form {
    display: flex;
    max-width: 400px;
    width: 40vw;
    height: 50vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: white;
    border-radius: 5px;
  }
`;

export default StyledFormik;
