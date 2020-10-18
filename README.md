# City-Search-using-DC-and-Crossfilter

## Inspiration

We want to find what are the factors that attract people moving from one place to the other. How do we exam it? We first used pair plots and correlation matrices to have a feeling of how different variables such as pollution and healthcare are correlated. Then for some of these correlations, it will be easy for us to use methods like Linear regression and get a decent model. For some of the other parameters. It might be hard for us to conclude how they are correlated. So we decided to use neural network for assistance. We also focus on a case study of the United States that will help us understand what exactly factors bring people into the cities.  

For the data interactions, we have borrowed some of the [link](https://devpost.com/software/exploratory-visualization-of-google-play-store-trends)![previous hackathon project].

## What it does

Our implementation includes not only static reports but also dynamic ones. We used DC.js and crossfilter.js for our framework, which are useful to understand the meaning behind different trends of the variables. And help us understand how different variables are correlated by selecting and dragging different components on the interface. 

It was a great help to use these technologies and we also include a map implemented through leaflet.js library. 

## How we built it

We build it through 2 platforms. One is the ObservableHQ page. We know there are websites that can convert python notebook into web pages. We did not use it because it wasn't as powerful as libraries like DC.js and D3.js. The other is the Google Colab, which helps us do analysis and model building for the project.

## Challenges we ran into

We ran into the challenges that when we were porting the maps from leaflet.js, it became extremely long. We exampled the issue and it turned out to be that we didn't import necessary css into our notebook on ObservableHQ. We also ran into problems in gathering data. Instead of using the unemployment data given by US census, we used the data from U.S. Bureau of Labor Statistics. It turns out that it works well with the data. 

## Accomplishments that we're proud of

We're managed to team up and coordinate from different places in the country. 

## What we learned

We have learned that it's important to learn more skills through websites like Kaggle. If we did not learn these skills, in future, we won't be able to do as good as we have done in this Hackathon.

## What's next for City Search using DC and Crossfilter

In the future, we will add not only a map showing the locations. But also a map that can interact with the users. 
