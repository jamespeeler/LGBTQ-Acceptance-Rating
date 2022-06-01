# Contributing
Clone this repo to your local machine to get started. You will then need to ensure your local server is set up properly for this application to work (guidance below). Once everything is set up, check out the Issues tab on GitHub for ideas of what to work on. You can also reach the involved "Rainbow Group" members via the lgbtq-plus 100devs study community channel.

## Setting up server and accessing app
1. Make sure [Node](https://nodejs.org/en/) is installed (version 18 is currently required). You can run "node -v" in your terminal to see if what version you currently have.
3. From the terminal within your project folder, run "npm install" to install all dependencies.
4. Add your Yelp API key to the project folder. The easiest way to do this is ask HibLaz for it and follow the instructions provided.
5. From the terminal within your project folder, run "node server.js" to start the server.
6. Go to http://localhost:8000 to try out the app!

## GitHub help
Here are a couple of tutorials for forking/cloning the repo, as well as making pull requests:
- [Contributing to Projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)
- [Creating an Issue or Pull Request](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request)

## Troubleshooting Errors
- "Error: listen EADDRINUSE: address already in use :::80" -> run "taskkill /F /IM node.exe"

## Independent work
Wanna work on something not listed in the issues? Please do, but _always_ [create a new issue](https://github.com/jamespeeler/rainbow-group-project/issues) and assign yourself to it; that way the rest of the team knows what you're working on, __and so you are appropriately credited for your hard work!__

# Style guide
You can pick up on most of these just by looking around the repository, but in case you're not sure about how to format something, here's a handy style guide!

## New Issues
When creating a new issue, please follow this guide to keep things consistent and tidy for easy reading! There are plenty of examples below.

### __The title:__
Template :

the part of the project that you are changing (frontend, backend, repo structure, etc.) - the file you are changing AND/OR the language used - a very brief description of what's happening in the issue

Examples :
1. Frontend - JS - display random rating to page
2. Backend - node.js server - handle requests using express (convert old code into express)
3. Repo - README change - add a new section about zebras

---

###  __The description:__
Template :
At least 1 sentence detailing what is being addressed with this issue.

Important supporting material (links, images, etc.) should be included if relevant.

Examples :
1.  I noticed that our HTML file was messy, so I'm removing some unused code, and cleaned things up a little.
2.  Once I pulled the newest code from the repository, I started getting this hurtful error message when I click the button. I'm going to remove the code that is causing this.

![banner](https://user-images.githubusercontent.com/44689036/171348231-64d02630-6d8e-4464-9603-cbf3a448e5c1.png)

3. For some reason, the entire app crashes when you enter the words "buffalo chicken nuggets" into the form??? Adding a conditional statement into the main.js file should fix this.

## Pull Requests
For pull requests, you really just need to make sure you write out exactly what your code is doing, or why you removed code. What have you changed about it? Why did you change it? 

### __The size:__
Try to keep your pull requests somewhat small. If you have a massive pull request, and 95% of your code works, but 5% breaks the app, we have to revert every bit of your code and you'll have to somehow extract just the buggy bit. If you have several smaller pull requests, you can reduce the chance of having to debug massive chunks of your code.

---

### __The title:__
Template :
A short sentence describing what your pull request is accomplishing.

Examples :
1. Add number generator into main.js file
2. Remove code that was no longer in use.
3. Add JS that effectively makes time travel possible and safe

---

###  __The description:__
This is where you detail everything going on in your pull request. Generally, pull request descriptions will be similar to issue descriptions.

Template :
Describe everything you changed in the code, small or big. It could be 1 sentence, or it could be 10. The length of a body message really depends on how much you changed.

Examples :
1. The Fancy Feast API was taken down by federal agents, so I had to switch out all of our API fetch requests to the Purina API. Luckily, the JSON objects they return are nearly identical to the Fancy Feast API.
2. The site was crashing due to an error in main.js. I left the error in, and I've added an infinite loop because I wanted to see what would happen.* 
3. I found a better way of sorting through the arrays in server.js. I have replaced the old method with the new one. 

*(please don't do this)