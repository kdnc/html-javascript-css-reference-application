# Dungeon inmate manager

## Table of Contents
**[Resource location](#resource-location)** 
**[Setup](#setup)** 
**[Models](#models)** 
**[Middelware](#middelware)** 
**[Views](#views)** 
**[Routes](#routes)** 

## Resource location
JavaScript Domain-Driven Design [Packt] (Jul 2015) Book - Chapter 1

## Setup
* Install all the dependencies via `npm install`
* Run via `npm start`

## Models
The dungeon model is defined in `models` and contains the standart logic to load
and modify following ActiveRecord loosly.

## Middelware
Middleware defined in `middleware` is used to load the dungeon on request and
inject it in the request to be used.

## Views
The view is defined in `views` and contains the form as well as display logic
for the dungeon status.

## Routes
The route to display the view is defined in `routes` along with the form
endpoint to modify the dungeon state.
