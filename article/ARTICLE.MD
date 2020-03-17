# How you should have started to add Swagger to your Express API

## You will get answers for these questions

- What is Swagger and why we need it
- what autogenerate means in Node & Express context
- Swagger 2 vs OpenAPI 3
- swagger-ui-express vs openapi-express
- document format: JSON or YAML?
- structure: breaking documentation to separate files and using $ref
- implementation

_note: in the next paragraphs I will talk about code design decisions. If you would like to see how actual code looks like, scroll down to the very end or check out my test project [openapi-express-tutorial](www.gooogle.com)_

## The Start

Swagger is a documentation tool for APIs. You have your endpoints like `/users/search?searchPhrase` and as a developer you would like to be able to monitor all of them, see how you should use them. Swagger creates a single HTML page, listing all of them with descriptions, parameter set, examples. It even allows you to type your endpoint parameters to a form end call it by clicking a button. It is quite useful.

Swagger is used for several programming languages, you can find it for PHP, Java, Javascript, Go, Python etc.

![Snapshot on Swagger UI](swaggerui.png)

## Libraries, specifications and names

Eh, it is super-confusing. The original tool was called 'Swagger' and had version 2. Then the creators wanted to make a step ahead to version 3.. but it is OpenAPI 3. Clear? :grinning:

So:

- OpenAPI is a specification. It describes the format of your REST API: endpoints, parameters, etc.
- Swagger is a tool collection. It includes the auto-generated UI, the online editor on Swagger website.
- In version 2, the specification was also called Swagger.

What you should remember is that you can choose from version 2 and version 3 syntax.

__Next step__: _choose which library to use to implement Swagger for your Express API._

If you make your early googling, you will meet _swagger-ui-express_. When you realize the existence of OpenAPI, you may find _openapi-express_. __BUT__: you should understand that it has nothing to do with _Swagger 2_ vs _OpenAPI 3_. Both libraries are compatible with both specifications and none of them are developed by Swagger/OpenAPI creators. See? So, our choice here will be to use __OpenAPI 3 and swagger-ui-express__.

## Organizing docs, JSON vs YAML, swagger-jsdoc vs ...?

Swagger documentation examples and most online articles tells you to put your documentation in YAML format into comments above the endpoint, with a _@swagger_ annotation. A package called _swagger-jsdoc_ will process it. Something like this:

```javascript
/**
 * @swagger
 * path:
 *  /healthcheck:
 *    get:
 *      summary: tells you if API works fine
 *      tags: [General]
 *      parameters:
 * ... bla bla bla ...
*/
router.get('/', (req, res) => {
  console.log('health check')
  return res.json('health check okay');
});
```

Although it looks nice, for larger endpoints it may overcharge your code file. Another solution may be to put everything into a giant, single YAML file in the root folder. It is another _bad_ solution. To separate docs from the endpoints and hide them in another enormous file is not a good idea. I offer a cleaner approach: break documentation to files, one file for each endpoint.

It is time to choose a __format__! Previously I used YAML for a Spring Boot (Java) API. YAML is clean, it has no annoying quotation marks like a JSON file. But indentation-as-a-syntax was never such a good idea (sorry, Python) and you cannot modify imported YAML data natively in your node code. Finally I realised that there is a third option, not mentioned in library documentation: use __Javascript objects__! They know everything you need: you can import them, modify them, keys do not need quotation marks and swagger-ui-express setup function accepts it as input. There is another important reason: swagger-ui-express __Does Not Support__ usage of __$ref__ for file references! (see more below).

## D.R.Y. - using references

So now we have a main documentation Javascript file, importing other doc files about endpoints. The whole pack goes into the Swagger library, then it creates its UI. You will soon find out that your object models occur again and again and you repeat them again and again. The parameter set of a _user_ object will be the same for a _create_ and a _modify_ endpoint.
You don't have to repeat yourself. Swagger allows you to create reusable modules in your documentation file and simply link them in the endpoints. But there is a problem: we've just broken the documentation to a root swagger file, importing endpoint Swagger files. Now we want _these_ Swagger endpoint files to import components from the main documentation file.

There is a nice solution for that: original, YAML / JSON -based Swagger specification includes referencing components and files with _$ref_. The whole concept inside would be to able to break a YAML/JSON documentation file to separate files, have reusable components and when collecting them in Swagger init function, resolve reference automatically. Here comes that fun part... wait for it... __swagger-ui-express Does Not Support referencing files__. It does support component references but ignores file references.
So for this very reason, as previously described, we will use Javascript objects to have separate files. Still, for components we would like to use _$ref_ as this is the way to have access from endpoint Swagger files to the components in main Swagger file.

This is how it will happen:

- import endpoint files to main Swagger file
- resolve references in this object, containing all the data
- then give it to swagger-ui-express

## Implementation

In my example I use __ES6__. I simply believe it should and it is an industry standard today, we simply have to forget `require()`. For this very reason, I use __Babel__. My entry point will be `babelstart.js`, which does the Babel setup, then calls `main.js`. I also use __Express Router__. So `main.js` will be responsible for general setup, all the routing will happen in `router.js`.

Add swagger-ui-express to your code. Install it, then implement the code below. As you may have noticed, we import `package.json` and use its versioning. Frontend developers may want to see API version and why would you manually refresh it both in `openapi.js` and `package.json` all the time, if you can automate it?

``` javascript
import express from 'express';
import swaggerUi from "swagger-ui-express";

import pjson from '../package.json';
import swaggerDoc from './openapi.js';

const router = express.Router();

swaggerDoc.info.version = pjson.version;
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/* endpoints will be here */
```

Next step should be to create the documentation file itself. As I said earlier, we will use __OpenAPI 3 syntax__. It is important, Swagger 2 syntax is different! So you would like to start with this specification statement:

``` YAML
openapi: 3.0.0
info:
  title: Openapi Express Tutorial
  description: ...
```

Oh wait! We use Javascript objects!

``` javascript
export default {
  openapi: '3.0.0',
  info: {
    title: 'Openapi Express Tutorial',
    description: ...
```

Swagger documentation offers you Swagger Editor to see complete setup. I highly recommend you to check it [here](https://swagger.io/tools/swagger-editor/). Click on _Live Demo_ and have fun. You can see my implementation of `openapi.js` [here](github......). All the following code parts can be found in this example app. Most important thing for your start is to define _server url(s)_ with the appropriate port and to add your first path.

``` javascript
servers: [
  {
   url: 'http://localhost:8080',
   description: 'Local server',
  }
],
paths: {
   '/': healthCheck,
},
```

Of course you should create this healthCheck object to be able to import it, so:

``` javascript
export default {
  get: {
    tags: [],
    summary: 'healthcheck',
    description: '',
    parameters: [],
    responses: {
      200: {
        description: 'healthcheck okay',
      },
      400: {
        description: 'bad request',
      },
    },
  },
};
```

Great! Now just start your API and open `http://localhost:8080/docs`.

## Notes

If you come from the Java world, you may expect that Swagger documentation's source files can be generated automatically. Java has its object models defined with parameter types, it is easy to collect information. In Javascript it does not work as it is not a strongly typed language.