# AngularMap

Using an SVG of a map with each country named and ID'd, the
Angular program makes an API call to get information about that
country. If the information isn't available on the first API,
a second one is called. The Map is routed to be the main page,
and the map with an additional column to see the information 
is routed to be on an alternate page that can be accessed via
a link.

Originally had an interface, but quickly found that to more be
in the way for the sake of the country object and promise passing.
Uses Angular 17, so there is no app.module.ts and each of the
components has a positive standalone value.

While using the fetch method was easier for the API call, the project
had to be reworked to use the HTTPClient due to the instruction
specifics for this project.

The major point of this project was to use Angular and Typescript,
not design CSS to look nice, though some is used for basic structure.