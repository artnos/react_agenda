#  React Agenda Creator

A simple Agenda CRUD. With 3 different listitem types ordered by time.
Submiting data is disabled, in this demo.
#### <a href="http://demo.artsir.com/react_agenda/dist/">Demo</a>
## Installation
1. You will need to have node.js installed and install webpackserver globally
    
       //git clone this repo
       npm install webpack-dev-server -g
       //cd to root directory
       npm install
              
2. Sign Up for google firebase.
3. Create a authenticated user
4. Config utils/firebase.js  
    
       const config = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
       }
5. Run Development Server
       
       npm start
 
## Deployment

Files will be in ./dist/*
```
 //for production
 npm run prod
```

## 

### Data
Data is stored in firebase. 
```
  key : {
                "body" : string,
                "datetime" : string //ISO-8601 
                "group" : int 
                "parent" : key, //required only for children items
                "title" : string
                "type" : string [header,indent,default]
            },
```
### Testing

    npm run test:watch


### Deployment

For deployment copy files from dist folder.

### Screenshots

A few screenshots to show the admin controls in use.


### Future

There are many more features, I would like to add but I wanted to keep it simple.
I need to work out groups to do concurrent time schedules. Right now everything is ordered by time. By creating groups I can circumvent the order.

Edit Button for List Items. To make a change to a timeslot just delete and readd. You can edit the days.

I would like to add more css animations to give it a more polish state. But this is a great start when I build one for my clients. 



