import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { DarkModeSwitch } from 'components/DarkModeSwitch';

const Index = () => (
  <Box>
    <div
      css={css`
        text-align: center;
      `}
    >
      Page working!
    </div>
    <DarkModeSwitch />
  </Box>
);

export default Index;
