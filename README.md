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


## Project Design

The website consists of 3 main pages:

#### Habits

HTTP Needs:

GET 
- Updated habit tracking data

POST
- New habits
- Check when Habit is completed on time

PUT 
- Update habit frequency 
- Update habit description or title

DELETE
- Remove Habit

MODEL:
- Habit name
- Date Started
- Frequency (Day|Month|Year)
- Identity Developed by habit
- Notes

#### Metrics

Visual displays of data about my habits
Ratio circle
Consistency in keeping habits

#### Quote/Scripture Generator
Can randomly generate either impactful quotes or scriptures from the Bible or Book of Mormon
If you login as any of my family members you can request compliments from me directly

## Production Deployment

