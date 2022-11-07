import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRemoveAvailability,
  addRemoveCategories,
  addRemoveTags,
  clearFilter,
  getQueries,
  updatePriceRange,
  updateRatingRange
} from '../store/features/filter/filterSlice';

const useFilter = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const queries = useSelector(getQueries);

  useEffect(() => {
    router.push(
      {
        pathname: router.pathname,
        query: queries
      },
      '',
      {
        scroll: false
      }
    );
  }, [queries]);

  const setCategory = ([id]) => {
    dispatch(addRemoveCategories({ id }));
  };

  const setTag = ([id]) => {
    dispatch(addRemoveTags({ id }));
  };

  const setAvailabilities = ([statusParam]) => {
    dispatch(
      addRemoveAvailability({
        status: statusParam.toUpperCase().replace(/\s/g, '_')
      })
    );
  };

  const setPriceRange = (value) => {
    dispatch(updatePriceRange({ range: value }));
  };

  const setRatingRange = (value) => {
    dispatch(updateRatingRange({ range: value }));
  };

  const clear = () => dispatch(clearFilter());

  return {
    setCategory,
    setTag,
    setAvailabilities,
    setPriceRange,
    setRatingRange,
    clear
  };
};

export default useFilter;
