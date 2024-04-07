# Vehicle Information API

## Overview

The Vehicle Information API provides random vehicle data, leveraging the `@faker-js/faker` library. This service is designed for development and testing purposes, offering a quick way to populate applications with realistic vehicle information.

## Features

- **Random Vehicle Data**: Generate data for vehicle attributes like type, manufacturer, model, and more.
- **Easy-to-Use RESTful API**: Simple GET endpoint for fetching vehicle information.
- **No Authentication**: No need for API keys, simplifying the integration process.

## Usage
Fetch random vehicle information with a GET request:

Copy code
GET https://<server-address>/vehicle/info

Response example:

`{
  "vehicle": "Car",
  "manufacturer": "Tesla",
  "model": "Model S",
  "type": "Sedan",
  "color": "Red",
  "fuel": "Electric",
  "vin": "1N4AL3AP4FC444578",
  "vrm": "SJ64 WZW"
}`


## Development
This API uses Express.js and the @faker-js/faker library. The server.js file is where the API is defined and can be modified or extended.
