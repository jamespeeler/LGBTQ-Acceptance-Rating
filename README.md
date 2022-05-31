# rainbow-group-project
This is the 100Devs LGBTQ+ project group repo! 

## Project
The goal of this project was to be able to look up businesses and see what their "LGBTQ+ Acceptance Rating" is. We currently have no way to store or implement an actual rating system, so we will be returning a random number as a rating (with a disclaimer saying this is currently random and not a reflection of the business). In order to have access to currently existing businesses, we are using Yelp's API. When you search for a business, our server makes a request to Yelp and returns data to the client.

### Future Features
It would be awesome to actually allow people to submit ratings for businesses and show the current average rating!

## Contributing
Clone this repo to your local machine to get started. You will then need to ensure your local server is set up properly for this application to work (guidance below). Once everything is set up, check out the Issues tab on GitHub for ideas of what to work on. You can also reach the involved "Rainbow Group" members via the lgbtq-plus 100devs study community channel.

### Setting up server and accessing app
1. Make sure [Node](https://nodejs.org/en/) is installed (version 18 is currently required). You can run "node -v" in your terminal to see if what version you currently have.
3. From the terminal within your project folder, run "npm install" to install all dependencies.
4. Add your Yelp API key to the project folder. The easiest way to do this is ask HibLaz for it and follow the instructions provided.
5. From the terminal within your project folder, run "node server.js" to start the server.
6. Go to http://localhost:8000 to try out the app!

### GitHub help
Here are a couple of tutorials for forking/cloning the repo, as well as making pull requests:
- [Contributing to Projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)
- [Creating an Issue or Pull Request](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request)

### Troubleshooting Errors
- "Error: listen EADDRINUSE: address already in use :::80" -> run "taskkill /F /IM node.exe"
