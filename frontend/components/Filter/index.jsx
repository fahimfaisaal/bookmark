import { Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useSelector } from 'react-redux';
import useFilter from '../../hooks/useFilter';
import { useGetCategoriesQuery } from '../../store/features/category/categoryApi';
import {
  getAvailabilities,
  getCategories,
  getPriceRange,
  getRatingRange,
  getTags
} from '../../store/features/filter/filterSlice';
import { useGetTagsQuery } from '../../store/features/tags/tagsApi';
import RadioBoxList from './CircleList';
import RangeSlider from './RangeSlider';
import SearchBarComp from './Search';
import CheckboxList from './SquareList';
import { ContainerStyle, InnerContainerStyle, LinkContainer } from './style';

function Filter() {
  const { data: tags = [] } = useGetTagsQuery();
  const { data: categories = [] } = useGetCategoriesQuery();
  const status = ['IN_STOCK', 'STOCK_OUT', 'COMING_SOON', 'PRE_ORDER'];
  const filterTags = useSelector(getTags);
  const filterCategories = useSelector(getCategories);
  const filterAvailabilities = useSelector(getAvailabilities);
  const filterPriceRange = useSelector(getPriceRange);
  const filterRatingRange = useSelector(getRatingRange);
  const {
    setCategory,
    setTag,
    setAvailabilities,
    setPriceRange,
    setRatingRange,
    clear
  } = useFilter();

  return (
    <ContainerStyle>
      <InnerContainerStyle>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h2" fontSize="26px">
            Filter
          </Typography>
          <LinkContainer>
            <Typography variant="h4" onClick={clear}>
              Clear all
            </Typography>
          </LinkContainer>
        </Stack>
      </InnerContainerStyle>
      <Divider />

      <InnerContainerStyle>
        <SearchBarComp />

        <Divider />
        <RadioBoxList />
        <RangeSlider
          title="Price range"
          commitHandler={setPriceRange}
          initialState={
            filterPriceRange.length === 0 ? [0, 5000] : filterPriceRange
          }
          min={10}
          max={5000}
          step={10}
        />
        <RangeSlider
          title="Rating range"
          commitHandler={setRatingRange}
          initialState={
            filterRatingRange.length === 0 ? [0, 5] : filterRatingRange
          }
          min={0}
          max={5}
          step={0.1}
        />
        <Divider />
        <CheckboxList
          setItem={setCategory}
          title="Categories"
          data={categories}
          selectItems={new Set(filterCategories)}
        />
        <Divider />
        <CheckboxList
          setItem={setTag}
          title="Tags"
          data={tags}
          selectItems={new Set(filterTags)}
        />
        <Divider />
        <CheckboxList
          setItem={setAvailabilities}
          title="Availability"
          data={status.map((stat) => stat.toLowerCase().replace(/_/g, ' '))}
          selectItems={
            new Set(
              filterAvailabilities?.map((stat) =>
                stat?.toLowerCase().replace(/_/g, ' ')
              )
            )
          }
        />
      </InnerContainerStyle>
    </ContainerStyle>
  );
}

export default Filter;
