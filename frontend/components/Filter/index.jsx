import { Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import RadioBoxList from './CircleList';
import RangeSlider from './RangeSlider';
import SearchBarComp from './Search';
import CheckboxList from './SquareList';
import { ContainerStyle, InnerContainerStyle, LinkContainer } from './style';

const categoryList = [
  'Commic Book',
  'Science Fiction',
  'Literature',
  'Horror Fiction',
  'Children',
  'Sifi',
];
const tagList = ['carton', 'fantacy', 'love', 'sad'];

const Filter = ({ img, title, slug }) => {
  return (
    <ContainerStyle>
      <InnerContainerStyle>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Typography variant="h2" fontSize={'26px'}>
            Filter
          </Typography>
          <LinkContainer>
            <Typography variant="h4">Clear all</Typography>
          </LinkContainer>
        </Stack>
      </InnerContainerStyle>
      <Divider />

      <InnerContainerStyle>
        <SearchBarComp />
        <Divider />
        <RadioBoxList />
        <CheckboxList title={'Categories'} data={categoryList} />
        <Divider />
        <RangeSlider />
        <Divider />
        <CheckboxList title={'Tags'} data={tagList} />
      </InnerContainerStyle>
    </ContainerStyle>
  );
};

export default Filter;
