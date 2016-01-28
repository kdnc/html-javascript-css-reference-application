# Media Query in CSS

## Table of Contents
**[Resource location](#resource-location)**     
**[Overview](#overview)**   
**[Important code blocks](#important-code-blocks)**   
**[System requirements](#system-requirements)**  
**[Deployment and Tests](#deployment-and-tests)** 

## Resource location
- Resource - [Packt] Responsive Web Design with HTML5 and CSS3 (Aug 2015, 2nd edition]
- Source Repository - [Packt] Responsive Web Design with HTML5 and CSS3 (Aug 2015, 2nd edition] - Exercise files - Chapter 2 - example_02-01

## Overview
How to use media queries within CSS style sheets

## Important code blocks

- Using media query

	- First we specify we want a media query with the `@media` at-rule, then we specify the type we want to match. In the preceding example, we want to apply the rules enclosed only to screens (and not, for example, print). Then, inside parenthesis we enter the specifics of the query. Then like any CSS rule, we open the braces and write the required styles.

			@media screen and (min-width: 320px) {
			  body {
			    background-color: green;
			  }
			}

## System requirements

The case study was developed using the following:

- Windows 10, 64-bit
- Node 4.2.1

## Deployment and Tests

### Deployment steps

1. Navigate to the project directory where package.json file exists.
2. Install npm packages
	
		npm install

3. Start the server

		npm start

4. Application will be deployed on http://localhost:9000

### Deployment and test scenario demo video

[Watch video - server deployment and test scenario demo video]()