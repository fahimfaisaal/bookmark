# Bookmark 

[live](https://bookmark-bd.fly.dev/)

The “FullStack Army” a learning platform of programming under the monitoring of the best promising programmer in BD Mr. H M Nayem. As a student we were selected for building an E-commerce web application. We chose our product as a “book” and named it as “BOOKMARK”.
This application is fully made of modern technology in running trends of the IT industry.
Bookmark is a modern looking e-commerce application where buyers and visitors have a lot more interaction. We tried to make the project with a lot of features and ongoing events unlike a traditional e-commerce has. We tried to explore every portion of technology regarding requirement issues and emphasized each detail like a professional approach.

## Planning part:

First we planned how an e-commerce web application was structured and its merits of events and interaction to justify the user experience.
For that we explore some real world e-commerce like ROKOMARI and other applications and see the interaction of users then try to list the sections that need to be scrutinized.
After selecting an application site we mixed our thoughts to build the site as modern trendy. We listed the UI and layout of the project regarding our requirements. We also took a styled framework Material UI so that it could look glossy.

## Making of UI

- [Component tree](https://app.diagrams.net/#G1wNdCHSYpqH2e38unt7cXo60WwZlVuBpd):
  First we drew the component tree of the web site. According to the planning part it will make a perfect way to find out the UI level so that it will show the overall outlooking and the components how interrelated. Finding the reusable components and important components our planned made easy to express the data in our site.
- [Wireframe](https://app.diagrams.net/#G1wNdCHSYpqH2e38unt7cXo60WwZlVuBpd): We use the wireframe to design our interface how it looks, with some pages and components. From the component tree our design made easy deciding the features of our product.
- For database anyalysis ER [diagram](https://app.diagrams.net/#G1wNdCHSYpqH2e38unt7cXo60WwZlVuBpd)

## Requirement Analysis

- All Features or functional requirements
- Auth
- Login
- Register
- Logout
- Product
- Cart (Relation)
- Add to cart
- Decrease the product count
- Increase the product count
- Remove from cart
- Checkout
- Wishlist add and remove
- Rating
- Categories
- Reviews
- Profile
- Edit profile info
- Change password
- Wishlist
- Order History
- Order Track
- Dark Mode
- Related Product view
- Product filter with (subjects, author, publisher)
- Product Search / topic-wise search (books, author, publisher)
- Hero section, book overview, and category sliders
- infinite scroll
- User orders in the admin bar
- Data Loading Skeleton
- Popular product display
- Product variation
- PWA
- PDF downloadable (upcomming..)

## Technologies we are choosing

- Next Js (frontend)
- Styled Component + MUI (styling)
- RTK query (managing server state)
- Strapi (CMS for backend)
- PostgreSQL (Database)
- REST API
- Strapi Auth
- Stripe (payment)

## Functional requirements:

Base Project Requirement -You have to create an Ecommerce application containing the following features,

- User authentication
- Product Catalog
- Product Variant
- Product Categories
- Search Products
- Filter Products by Properties
- Pagination & Sorting Order History
- Payment Gateway Integration (Fake or Real)
- Admin using Strapi or any relative CMS

## Non Functional Requirements:

- The backend should be made with Strapi
- Front end Store found type individual product item.
- Users can log in
- User can Register
- Users can see products
- Users can see product details
- Users can select categories
- Users can Add a shopping cart
- Users can checkout cart products
- Payment Integration will be a fake payment/ stripe
- When ordering is complete can be tracked
- If the admin behind the seen order succeeded then the user can see their dashboard order completed and place the order history.
- No Shipment
- Technologies that Mandatory
- The backend made with Strapi
- The project must be Next Js file structure
- SEO ranking up to 90 in the lighthouse
- The project must be made with Styled component
- We have to select a theme from the theme forest or other platforms
- Ui component must be reusable and make documentation with storybook
- The framework can choose anything but the code should be the right way.
- API layer must be in the service layer
- We can choose a store management system anything but everything must be logical way.
- The project must be well folder structured, with no duplicate codes, and well-designed code
- It will be good if we work with react query but it is not forced just insists.
- We must use Axios
- For Authentication, we have to use Strapi auth.
- Ui must be beautiful
- Individual case study and write a final article about
- What are we doing every day?
- Which problem we are facing
- How to handle things with teamwork

## Pages, Sections, and Features:

### Home

- Header Section ( where user can navigate pages, search products, and change themes and languages)
- The cover page hero section (Where special offer products will be sliding)
  New Product Section (Where users can see recently added products based on date)
- Offers Section/Product collection category section (Where users can see many collections or product categories)
- Featured Products
- Shop
- Filter Bar (where users can filter products with price, Date, Subjects, Writers, Publishers, Ratting
- All product lists gallery with pagination (where users can see all existing products and pagination numbers)
-

### Login
- users can log in by email password
  forgot password (upcomming..)
- Register
- user name or email, password

### Cart

- Users can see carted products, quantities, prices, total prices, and subtotal price
- Users can increase and decrease product quantities
- Users can remove products from the cart
- Users also can checkout

### Profile

- Users can see and edit their profile info like avatar, name, email
- Users can see their order history with date and product info
- User can see their review item products
- Favorite or Wish list
- users can see wish list products with details and remove them

### Product Detail

- Image Gallery
- price
- title
- description
- additional information
- Related products
- Checkout

### Payment

- A payment system will be added with a stripe
- Contact

## Deployment:
  - frontend: `https://bookmark-bd.fly.dev/` (UI inspired from [pickBazar](https://pickbazar-react.vercel.app/books))
  - api: `https://bookmark-backend.fly.dev/api`

### project members:

- Mr Jahid Hasan - Team lead
- Mr Fahim Faisal- Fullstack-developer
- Mr Rezuan Ahmed - Frontend-developer
- Mr Mazharul Islam - Frontend-developer
- Mr Mirajul Islam - Frontend-developer
- Mr Md Abu Hossain Content writer
