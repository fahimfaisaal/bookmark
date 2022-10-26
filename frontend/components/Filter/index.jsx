import { Typography } from '@mui/material';
import { ContainerStyle, LinkContainer, InnerContainerStyle } from './style';
import SearchBar from './Search';
import Divider from '@mui/material/Divider';
import CheckboxList from './SquareList';
import RadioBoxList from './CircleList';
import RangeSlider from './RangeSlider';

const Filter = ({ img, title, slug }) => {
    return (
        <ContainerStyle>
            <InnerContainerStyle
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '20px 18px',
                }}
            >
                <Typography variant="h1" sx={{ fontWeight: '600' }}>
                    Filter
                </Typography>
                <LinkContainer>
                    <Typography variant="caption">Clear all</Typography>
                </LinkContainer>
            </InnerContainerStyle>
            {/* TODO: Divider isn't being visible */}
            <Divider sx={{ display: 'flex', flexDirection: 'column' }} />
            <InnerContainerStyle style={{ flexDirection: 'column' }}>
                <SearchBar />
                <RadioBoxList />
                <CheckboxList title={'Categories'} />
                <RangeSlider />
                <CheckboxList title={'Tags'} />
            </InnerContainerStyle>
        </ContainerStyle>
    );
};

export default Filter;
