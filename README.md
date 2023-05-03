# Bridg - Serverless create-react-app + Netlify

This repo is an example of Bridg being used in a serverless capacity, with a static client via create-react-app, and a single Netlify cloud function for handling requests from Bridg.

### Up and Running

Set up project with Netlify:

1. Fork this project
2. `npm install -g netlify-cli`
3. `netlify init`

Configure your database connection:

1. Set up a cloud DB (you can get a free Postgres DB at https://www.elephantsql.com/)
2. create a file named `.env` at the root of the project
3. Add your DB url:

```
DATABASE_URL="postgres://username:pass@host:port/dbname"
```

Startup

1. `npm install`
2. `npm run dev`

To deploy your project to Netlify, just `git push`
