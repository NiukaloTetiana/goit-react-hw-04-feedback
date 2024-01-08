import styled from 'styled-components';

export const OptionsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const OptionsItem = styled.li``;

export const Button = styled.button`
  display: flex;
  justify-content: center;

  padding: 10px;
  width: 90px;

  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.box};
  background-color: ${({ theme }) => theme.colors.grine};

  font-family: Roboto;
  font-style: italic;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
  text-shadow: ${({ theme }) => theme.shadows.text};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.regular};
    transform: scale(1.1);
  }
`;
