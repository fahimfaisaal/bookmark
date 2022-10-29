import { Button, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import AuthorProfile from "../../components/AuthorProfile";
import BookCard from "../../components/BookCard";
import { useGetBooksByAuthorQuery } from "../../store/features/books/booksApi";
import { SectionHeaderStyle } from "./Styles";

const AuthorItem = () => {
  const router = useRouter();
  console.log({ q: router.query.slug });
  const { data } = useGetBooksByAuthorQuery({ authorName: router.query.slug });
  const authorData = data?.data[0]?.attributes;
  // const { name, bio, birth, avatar, books } = authorData;
  console.log({ name:authorData?.name });
  
  return (
    <Box>
      <AuthorProfile authorInfo={authorData} />
      <SectionHeaderStyle variant="h1">Author Books</SectionHeaderStyle>
      <Box>
        <Grid container spacing={2}>
          {authorData?.books?.data?.map((book) => (
            <Grid item lg={3} md={6} xs={12} key={book?.id}>
              <BookCard book={book?.attributes}/>
            </Grid>
          ))}
          
        </Grid>
        <Stack direction={"row"} justifyContent={"center"} my={5}>
          <Button variant="contained" size="large" disableElevation={true}>
            Load More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AuthorItem;
