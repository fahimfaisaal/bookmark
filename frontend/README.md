Bookmark : frontend


Introduction 
Project bookmark frontend is structured based on the clientsite requirement. This portion is a continuous process of analytics of different mechanisms by the team. Team members were busy making the ui/ux to functionalities of all aspects along with the coding part. The Front part has a lot more user activities and interaction with the project. NEXTJs and Material Ui are chosen to build the layout. 


Environment:
The frontend part is constructed on the NODE.js environment. Npm package manager latest version used. Next.js is used to create react based web applications and Material UI is used for styling the application. 

Installation

Next.js :  to install the next.js run the command 
```

```
Material UI : 
``` 

```

Theme Customization : 

Link https://github.com/minimal-ui-kit/material-kit-react/tree/main/src/theme 


Table of contents
Representation Layer
Data layer // rtk query
Network layer 
Logical layer // 

Note :  if user input a data it will take by the network layer to data layer reach the db.
Representation Layer:

Layout: 


 List of UI Reusable components:
Address Card
Author Card
Author Profile
Book card 
Cart Item
Category Card
Custom image
Filter -> cartList 
          -> radioButtonGroup 
         -> rangeSlider
         -> search
        -> squireList
Icons  → location
          —> socialMedia
Layout
       —-> Auth 
      —--> Footer
     —----> Navber
Publication Card  -> cardTitle
Publication Cover
Review Card
Shared folder
              —--> custom LInk
               —--> Modals
             —----> SearchBar
                 —-> UI→ carosalBtn
UserDashboard
                    → change Password
                 —-> Menu 
                —--> myOrders 
                 —-> my wishList
                   —> profile
Buttons
 Checkout:
 Cart:
 Load More:
 Slider:
 Newsletter:
 Menu cart:
 Side Cart
 Join
 Login/Register
Pages : 
About page 


Authors


Books


Checkout → items 


Contact 


Profile 
        
          → Change Password
          —> my orders
          —> wishList 
Publishers


 Data layer and Logical layer:
 RTK Query:  

 Feature of all store 
Api -> Apislice.js
Auth → authSlice.js  authApi.js 
Book → booksApi.js bookSlice.js  
Carts → cartApi.js cartSlice.js
Checkout -> checkoutApi.js
Favorite  -> favoureatesApi.js
Order    - > orderApi.js
Rating   → rattingApi.js 
Tags    —> tagsApi.js
User   —> userApi.js

Feature of Bookmark



