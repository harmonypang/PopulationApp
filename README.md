# PopulationApp
A full-stack web app displays random population data from US Census data model using MongoDB, Express.js, React.js, Node.js (MERN).

Features: <br>
• Create the React app structure and Express backend structure. <br>
• Import the CSV file data into MongoDB. <br>
• Add code for Express routing and Mongoose middleware. <br>
• Create the React Front end.

Data Source: <br>
 • <a href="https://www.kaggle.com/datasets/peretzcohen/2019-census-us-population-data-by-state">Kaggle</a>

Stacks: <br>
 • MongoDB <br>
 • Express.js <br>
 • React.js <br>
 • Node.js <br>
 • JavaScript <br>
 • CSS3 <br>
 • HTML5 <br>

IDE: <br>
 • Visual Studio Code 

Click to run this project: <br>
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/harmonypang/PopulationApp)

<b>Problem encountered during development</b>: <br>
 • Error: Census.aggregate() is not a function

<b>My Solution</b>: <br>
 • Add line "module.exports = Census" in "census.js" model file <br>
 • This line allows the Census model to be properly exported and available for use in other files.
