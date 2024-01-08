import { OptionsList, OptionsItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <OptionsItem key={option}>
          <Button name={option} type="button" onClick={leaveFeedback}>
            {option}
          </Button>
        </OptionsItem>
      ))}
    </OptionsList>
  );
};