# Graph sentiment UI
Angular app to show sentiment based on feedback comment from/to people.

Graph sentiment based on feedback comment: 
![alt text](https://github.com/nickomart/graph-sentiment-ui/blob/master/src/assets/example/sentiment_example.png "Example of sentiment")

Green is showing positive (0.1 to 1) and red showing negative (-1 to -0.1) score.

In addition the edge thickness scale to score accordingly.

## Build

```
npm install --save
```

```
ng build
```

```
ng serve
```

# Backend
This front-end to show graph sentiment and relation from project: https://github.com/nickomart/graph-sentiment-svc 

# Dependency
This project has dependency to forked neovis.js: 
https://github.com/nickomart/neovis.js

If somehow `ng install --save` didnt install the forked neovis.js dependency correctly you can clone that forked neovis.js and linked locally or specify the package.json to your local neovis.js.

After you clone the forked neovis.js Do `npm-build` and in this `package.json`, specifiy the root path of your local neovis.js.

i.e.:
```
"neovis.js": "file:../neovis.js",
```