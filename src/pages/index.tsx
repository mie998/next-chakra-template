import { Box, Text } from '@chakra-ui/react';
import SampleButton from 'components/sampleButton';

const Index = () => (
  <Box textAlign="center">
    <Text>Hello! ✋</Text>
    <SampleButton clickHandler={() => console.log('button Clicked')} />
  </Box>
);

export default Index;
