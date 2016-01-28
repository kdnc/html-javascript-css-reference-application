# Basic Responsive Design Example

## Table of Contents
**[Resource location](#resource-location)**     
**[Overview](#overview)**   
**[Important code blocks](#important-code-blocks)**   
**[System requirements](#system-requirements)**  
**[Deployment and Tests](#deployment-and-tests)** 

## Resource location
- Resource - [Packt] Responsive Web Design with HTML5 and CSS3 (Aug 2015, 2nd edition]
- Source Repository - [Packt] Responsive Web Design with HTML5 and CSS3 (Aug 2015, 2nd edition] - Exercise files - Chapter 1

## Overview
Sample fully responsive web page

## Important code blocks

- Viewport definition
	- The viewable area of a browser is known technically as the viewport.

			<meta name="viewport" content="width=device-width">

- Image max-width	
	- All this max-width based rule does is stipulate that all images should be a maximum of 100% of their width (in that they should expand to 100% of their size and no more).
	- width: 100% has a different effect. When a property of width is used then the image will be displayed at that width, regardless of its own inherent size. 

			img {
				max-width: 100%;
			}

- Media Query
	- In CSS, a minimum width media query is written like this.
	- CSS rules within this type of media query only get applied if the viewport is a minimum defined width. 

			@media screen and (min-width: 50em) {
				/* styles */
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