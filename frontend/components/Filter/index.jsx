import { Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../store/features/category/categoryApi";
import {
  addRemoveCategories,
  addRemoveTags,
  clearFilter,
  getCategories,
  getPriceRange,
  getSortAs,
  getTags,
} from "../../store/features/filter/filterSlice";
import { useGetTagsQuery } from "../../store/features/tags/tagsApi";
import RadioBoxList from "./CircleList";
import RangeSlider from "./RangeSlider";
import SearchBarComp from "./Search";
import CheckboxList from "./SquareList";
import { ContainerStyle, InnerContainerStyle, LinkContainer } from "./style";
import qs from "qs";
import { useEffect, useMemo } from "react";

const categoryList = [
  "Commic Book",
  "Science Fiction",
  "Literature",
  "Horror Fiction",
  "Children",
  "Sifi",
];
const tagList = ["carton", "fantacy", "love", "sad"];

const Filter = ({ img, title, slug }) => {
  const router = useRouter();
  const { data: tags = [] } = useGetTagsQuery();
  const { data: categories = [] } = useGetCategoriesQuery();
  const dispatch = useDispatch();
  const filterTags = useSelector(getTags);
  const filterCategories = useSelector(getCategories);

  const setCategory = ([id, name]) => {
    dispatch(addRemoveCategories({ id, name }));
  };

  const setTag = ([id, name]) => {
    dispatch(addRemoveTags({ id, name }));
  };

  const clear = () => dispatch(clearFilter());

  return (
    <ContainerStyle>
      <InnerContainerStyle>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h2" fontSize={"26px"}>
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
        <CheckboxList
          setItem={setCategory}
          title={"Categories"}
          data={categories}
          selectItems={new Set(filterCategories)}
        />
        <Divider />
        <RangeSlider />
        <Divider />
        <CheckboxList
          setItem={setTag}
          title={"Tags"}
          data={tags}
          selectItems={new Set(filterTags)}
        />
      </InnerContainerStyle>
    </ContainerStyle>
  );
};

export default Filter;
