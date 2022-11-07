// // imports the React Javascript Library
// import React from 'react';
// import { styled } from '@mui/material/styles';
// //Card
// import {
//   Card,
//   CardActionArea,
//   CardContent,
//   Fab,
//   Grid,
//   Paper,
//   InputBase,
//   Divider,
//   IconButton
// } from '@mui/material';
// // import Card from '@material-ui/core/Card';
// // import CardActionArea from '@material-ui/core/CardActionArea';
// // import CardContent from '@material-ui/core/CardContent';

// // import Fab from '@material-ui/core/Fab';
// // import Grid from '@material-ui/core/Grid';
// import { red, blue } from '@mui/material/colors';
// // import red from '@material-ui/core/colors/red';
// // import blue from '@material-ui/core/colors/blue';

// import SearchIcon from '@mui/icons-material/Search';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

// // // Search
// // import Paper from '@material-ui/core/Paper';
// // import InputBase from '@material-ui/core/InputBase';
// // import Divider from '@material-ui/core/Divider';
// // import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

// //Tabs
// // import { withStyles } from '@mui/icons-material/styles';

// const styles = (theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-end'
//   },
//   icon: {
//     margin: theme.spacing.unit * 2
//   },
//   iconHover: {
//     margin: theme.spacing.unit * 2,
//     '&:hover': {
//       color: red[800]
//     }
//   },
//   cardHeader: {
//     textalign: 'center',
//     align: 'center',
//     backgroundColor: 'white'
//   },
//   input: {
//     display: 'none'
//   },
//   title: {
//     color: blue[800],
//     fontWeight: 'bold',
//     fontFamily: 'Montserrat',
//     align: 'center'
//   },
//   button: {
//     color: blue[900],
//     margin: 10
//   },
//   secondaryButton: {
//     color: 'gray',
//     margin: 10
//   },
//   typography: {
//     margin: theme.spacing.unit * 2,
//     backgroundColor: 'default'
//   },

//   searchRoot: {
//     padding: '2px 4px',
//     display: 'flex',
//     alignItems: 'center',
//     width: 400
//   },
//   searchInput: {
//     marginLeft: 8,
//     flex: 1
//   },
//   searchIconButton: {
//     padding: 10
//   },
//   searchDivider: {
//     width: 1,
//     height: 28,
//     margin: 4
//   }
// });

// export const StyledGrid = styled(Grid)(({ theme }) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-end'
//   },
//   icon: {
//     margin: theme.spacing.unit * 2
//   },
//   iconHover: {
//     margin: theme.spacing.unit * 2,
//     '&:hover': {
//       color: red[800]
//     }
//   },
//   cardHeader: {
//     textalign: 'center',
//     align: 'center',
//     backgroundColor: 'white'
//   },
//   input: {
//     display: 'none'
//   },
//   title: {
//     color: blue[800],
//     fontWeight: 'bold',
//     fontFamily: 'Montserrat',
//     align: 'center'
//   },
//   button: {
//     color: blue[900],
//     margin: 10
//   },
//   secondaryButton: {
//     color: 'gray',
//     margin: 10
//   },
//   typography: {
//     margin: theme.spacing.unit * 2,
//     backgroundColor: 'default'
//   },

//   searchRoot: {
//     padding: '2px 4px',
//     display: 'flex',
//     alignItems: 'center',
//     width: 400
//   },
//   searchInput: {
//     marginLeft: 8,
//     flex: 1
//   },
//   searchIconButton: {
//     padding: 10
//   },
//   searchDivider: {
//     width: 1,
//     height: 28,
//     margin: 4
//   }
// }));

// class ImageUploadCard extends React.Component {
//   state = {
//     mainState: 'initial', // initial, search, gallery, uploaded
//     imageUploaded: 0,
//     selectedFile: null
//   };

//   handleUploadClick = (event) => {
//     var file = event.target.files[0];
//     const reader = new FileReader();
//     var url = reader.readAsDataURL(file);

//     reader.onloadend = function () {
//       this.setState({
//         selectedFile: [reader.result]
//       });
//     }.bind(this);
//     console.log({url}); // Would see a path?

//     this.setState({
//       mainState: 'uploaded',
//       selectedFile: event.target.files[0],
//       imageUploaded: 1
//     });
//   };

//   renderInitialState() {

//     return (
//       <React.Fragment>
//         <CardContent>
//           <Grid container justify="center" alignItems="center">
//             <input
//               accept="image/*"
//               id="contained-button-file"
//             //   multiple
//               type="file"
//               onChange={this.handleUploadClick}
//             />
//             <label htmlFor="contained-button-file">
//               <Fab component="span" >
//                 <AddPhotoAlternateIcon />
//               </Fab>
//             </label>
//           </Grid>
//         </CardContent>
//       </React.Fragment>
//     );
//   }

//   handleSearchURL = (event) => {
//     console.log();
//     var file = event.target.files[0];
//     var reader = new FileReader();
//     var url = reader.readAsDataURL(file);

//     reader.onloadend = function () {
//       this.setState({
//         selectedFile: [reader.result]
//       });
//     }.bind(this);
//     console.log(url); // Would see a path?

//     this.setState({
//       selectedFile: event.target.files[0],
//       imageUploaded: 1
//     });
//   };

//   handleImageSearch(url) {
//     var filename = url.substring(url.lastIndexOf('/') + 1);
//     console.log(filename);
//     this.setState({
//       mainState: 'uploaded',
//       imageUploaded: true,
//       selectedFile: url,
//       fileReader: undefined,
//       filename: filename
//     });
//   }

//   handleSeachClose = () => {
//     this.setState({
//       mainState: 'initial'
//     });
//   };

//   renderSearchState() {

//     return (
//       <Paper  elevation={1}>
//         <InputBase  placeholder="Image URL" />
//         <IconButton

//           aria-label="Search"
//           onClick={this.handleImageSearch}
//         >
//           <SearchIcon />
//         </IconButton>
//         <Divider  />
//         <IconButton
//           color="primary"

//           aria-label="Close"
//           onClick={this.handleSeachClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       </Paper>
//     );
//   }

//   handleAvatarClick(value) {
//     var filename = value.url.substring(value.url.lastIndexOf('/') + 1);
//     console.log(filename);
//     this.setState({
//       mainState: 'uploaded',
//       imageUploaded: true,
//       selectedFile: value.url,
//       fileReader: undefined,
//       filename: filename
//     });
//   }

//   renderUploadedState() {
//     const { classes } = this.props;

//     return (
//       <React.Fragment>
//         <CardActionArea onClick={this.imageResetHandler}>
//           <img
//             width="100%"

//             src={this.state.selectedFile}
//           />
//         </CardActionArea>
//       </React.Fragment>
//     );
//   }

//   imageResetHandler = () => {
//     console.log('Click!');
//     this.setState({
//       mainState: 'initial',
//       selectedFile: null,
//       imageUploaded: 0
//     });
//   };

//   render() {

//     return (
//       <React.Fragment>
//         {/* <div> */}
//         <StyledGrid>
//           <Card >
//             {(this.state.mainState == 'initial' && this.renderInitialState()) ||
//               (this.state.mainState == 'search' && this.renderSearchState()) ||
//               (this.state.mainState == 'gallery' &&
//                 this.renderGalleryState()) ||
//               (this.state.mainState == 'uploaded' &&
//                 this.renderUploadedState())}
//           </Card>
//         </StyledGrid>
//       </React.Fragment>
//     );
//   }
// }

// export default ImageUploadCard;
