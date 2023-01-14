import PropTypes from 'prop-types';

import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onFeedbackClick }) => {
  const optionsKeys = Object.keys(options);
  console.log();

  return (
    <ButtonList>
      {optionsKeys.map(option => (
        <ButtonItem key={option}>
          <Button name={option} type="button" onClick={onFeedbackClick}>
            {option}
          </Button>
        </ButtonItem>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  // options: PropTypes.arrayOf(PropTypes.string),
  onFeedbackClick: PropTypes.func.isRequired,
};
