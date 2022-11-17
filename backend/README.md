# Bookmark – backend

## Introduction:

project bookmark backend structured on STRAPI CMS service to handle the prior operation from STRAPI GUI. The data storage is used by PostgreSQL. Strapi is an open source headless cms service that helps the developer who can easily edit the content and use the admin panel. It has a plugin system and every part is customizable built in user system to manage the end users access too.

## Why choose STRAPI and PostgreSql?

Our project is a MERN tech supporting system and it is also familiar with its NODE JS environment. Since the project has a short period of time limit and the required field was a headless CMS. Also demand a relational database like PostgreSQL because projects like e-commerce have so many primary and foreign key related links and one and more relationship data fetching operations need to be performed subsequently. Also has a user Authentication System which is a core requirement to fulfill the project system. So we choose the STRAPI backend that is perfect to handle such projects like bookmark along with postgresql.

## Server - Running :

If you wish to run the server, the first step is installing node environment then clone the git link. after that go to the backend branch by switching , open a terminal and run the following command:

```bash
$ yarn dev
```

**Run the project**

```
Move into the project directory: cd ~bookmark/backend/
Run the development task: yarn dev
Starts a server running at http://localhost:1337
```

Automatically restarts when any of your files change
Documentation and project Settings:

The project that we have organized at an early stage is making a backend collection model through UML diagrams which is being made for the first time. From the backend structure one can understand the workflow. We hereby illustrated the total

This sample backend interacts directly with bookmark on Demand API, specifically for the purpose of authorizing and capturing orders. A user token will be provided by the Strapi which handles the authorization easily.

## Backend Technologies uses

- STRAPI version 4.4.3
- PostGreSql version
- Faker js version 7.6.0
- Yaml version
- Cross-env 7.0.3

**Strapi Installation process**

**Installing command**

```
$ `npx create-strapi-app@latest bookmark
```

**Note: strapi installation required node version required 14-16 for compatible the setup**

### Postgresql addition

**PGAdmin:** PGAdmin is a web-based GUI tool used to interact with the Postgres database sessions, both locally and remote servers as well. You can use PGAdmin to perform any sort of database administration required for a Postgres database

For database connection below code is need to configure into the config-> database.js file
download & setup PGADMIN watch video create db bookmark
strapi backend install npm i pg

**UML diagram :** [bookmark uml diagram](https://app.diagrams.net/#G1wNdCHSYpqH2e38unt7cXo60WwZlVuBpd)

### Collections:

- User
- Book
- Category
- Tag
- Author
- Publisher
- Language
- Ratting
- Variant
- Payment
- order

**Authentication:**

Strapi provides the authentication for users along with an admin panel to manipulate the content and handle the permissions.

### API’s:

- Author
- Book
- Cart
- Category
- Language
- Order
- Payment
- Publisher
- Ratings
- Tag
- Variant

### Api: some endpoints sample

http://localhost:1337/api/books/7/?populate=\* → get single book

http://localhost:1337/api/books?populate=\* → get all book

http://localhost:1337/api/books?filters[name][$contains]=Superhero → get book by name

http://localhost:1337/api/authors?populate[0]=books&filters[name][$eq]=KELTON BENJAMIN → get books by author

http://localhost:1337/api/auth/local → login (POST

http://localhost:1337/api/register → register (POST)

http://localhost:1337/api/carts/17 → delete cart (DELETE)

**Fakedata and environment variables:**

```
Cross-env environment variables across platforms , latest version. cross-env will take care of setting it properly.

```

```
 YAML is used instead of JSON file cause it has better readability and is more user-friendly.The simple syntax does not impact the language's capabilities
```

**FakeData insertion manually:**

_Facker.js :_ we need to insert fake data to testify to the bulk data insertion portion. Faker.js is used here for insertion manually into the strapi.
Here we generate a \_seed file to initialize the process to insertion. Some functions were written to run the command which help to generate ……

Run command for fakedata insertion:

```
$ yarn seed      // will run all seeds command
```

```
$ yarn reset    // will reset all
```

```
$ yarn seed:prod    // to seed in production
```

```

$ yarn reset:prod    // to reset in production
```

```
For insert models in database run command- yarn seed:models
For reset the models run command -yarn reset:models
For relation between the models   yarn  relate:models
For insert media files run command  yarn seed:medias
For reset all the medias run command yarn reset:medias
```

### Deployment :

deployed the api in fly.io: [bookmark-backend.fly.io/api](https://bookmark-backend.fly.dev/)
used postgresDB from render
