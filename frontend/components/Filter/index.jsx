import { Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../store/features/category/categoryApi";
import {
  addRemoveAvailability,
  addRemoveCategories,
  addRemovePublishers,
  addRemoveTags,
  clearFilter,
  getAvailabilities,
  getCategories, getPublishers, getTags, setStateFromQuery
} from "../../store/features/filter/filterSlice";
import { useGetPublishersQuery } from "../../store/features/publishers/publisherApi";
import { useGetTagsQuery } from "../../store/features/tags/tagsApi";
import RadioBoxList from "./CircleList";
import RangeSlider from "./RangeSlider";
import SearchBarComp from "./Search";
import CheckboxList from "./SquareList";
import { ContainerStyle, InnerContainerStyle, LinkContainer } from "./style";

const Filter = () => {
  const router = useRouter()
  const { data: tags = [] } = useGetTagsQuery();
  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: publishers = [] } = useGetPublishersQuery();
  const status = [
    'IN_STOCK',
    'STOCK_OUT',
    'COMING_SOON',
    'PRE_ORDER',
  ]

  const dispatch = useDispatch();
  const filterTags = useSelector(getTags);
  const filterCategories = useSelector(getCategories);
  const filterPublishers = useSelector(getPublishers);
  const filterAvailabilities = useSelector(getAvailabilities)

  useEffect(() => {
    console.log({ query: router.query })
    dispatch(setStateFromQuery(router.query))
  }, [JSON.stringify(router.query)])

  const setCategory = ([id, name]) => {
    dispatch(addRemoveCategories({ id, name }));
  };

  const setTag = ([id, name]) => {
    dispatch(addRemoveTags({ id, name }));
  };

  const setPublisher = ([id, name]) => {
    dispatch(addRemovePublishers({ id, name }))
  }

  const setAvailabilities = ([status]) => {
    dispatch(addRemoveAvailability({ status: status.toUpperCase().replace(/\s/g, '_') }))
  }

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
        <Divider />
        <CheckboxList
          setItem={setPublisher}
          title={"Publishers"}
        data={publishers.data?.map(publisher => ({ id: publisher.id, name: publisher.attributes.name}))}
          selectItems={new Set(filterPublishers)}
        />
        <Divider />
        <CheckboxList
          setItem={setAvailabilities}
          title={"Availability"}
          data={status.map(stat => stat.toLowerCase().replace(/_/g, ' '))}
          selectItems={new Set(filterAvailabilities.map(stat => stat?.toLowerCase().replace(/_/g, ' ')))}
        />
      </InnerContainerStyle>
    </ContainerStyle>
  );
};

export default Filter;
