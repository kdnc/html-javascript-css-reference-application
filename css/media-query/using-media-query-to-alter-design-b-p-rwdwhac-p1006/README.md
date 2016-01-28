# Using media queries to alter the design

## Table of Contents
**[Resource location](#resource-location)**     
**[Overview](#overview)**   
**[Important code blocks](#important-code-blocks)**   
**[System requirements](#system-requirements)**  
**[Deployment and Tests](#deployment-and-tests)** 

## Resource location
- Resource - [Packt] Responsive Web Design with HTML5 and CSS3 (Aug 2015, 2nd edition]
- Source Repository - [Packt] Responsive Web Design with HTML5 and CSS3 (Aug 2015, 2nd edition] - Exercise files - Chapter 2 - example_02-02

## Overview
How to use media queries to alter a design

## Important code blocks

- overriding base styles

	- By their very nature, styles further down a cascading style sheet, override equivalent styles higher up.
	- We can therefore set base styles at the beginning of a style sheet, applicable to all 
versions of our design, and then override relevant sections with media queries further on in the document.

			.CardLink:before {
				display: none;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 0;
			}

			@media (min-width: 300px) {
				.CardLink:before {
					display: block;
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