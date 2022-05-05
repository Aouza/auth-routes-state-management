import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 24rem;
  padding: 2rem;

  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  border-radius: 0.8rem;

  > p {
    text-align: center;
    color: gray;
  }
`;
