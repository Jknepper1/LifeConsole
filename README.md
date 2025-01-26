# LifeConsole
A web project to develop my skills in securely implementing a modern web API using NodeJS and the MVC method 


## Project Set up Instructions
To build out this website you need to install NodeJS

The project dependencies were built using Express application generator. The -g flag installs it globally
```
npm install express-generator -g
```

```
express --view=pug myapp
```
This was the command used to build the application. Express no longer supports the Jade view and uses the updated pug view instead
After installing the application, `run npm audit fix --force` twice in order to bring all of the dependencies up to date (as of Jan 2025)
