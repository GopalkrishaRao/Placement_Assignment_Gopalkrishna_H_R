#
## Q.1 What is a Media Query in CSS, and what is its purpose?
*  CSS media query is a feature used to apply different styles and rules to a webpage based on specific conditions, such as the device's screen size, resolution, orientation etc.
* It allows to create responsive web designs that adapt and adjust to different devices and environments.
* The purpose of media queries is to make  website or web application look and function properly on a wide range of devices, from desktop computers to tablets and smartphones. 

#
## Q.2 How do you define a media query in CSS?
* 
In CSS, one can define a media query using the `@media` rule followed by one or more conditions that determine when the styles inside the media query should be applied. Here's the general syntax of a media query:
```
@media (max-width: 768px) {
  /* Styles for screens with a maximum width of 768 pixels */
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Styles for screens with a width between 769 and 1024 pixels */
}

```
#
## Q.3 Explain the concept of Breakpoints in Responsive Web Design and How They are used in Media Queries.
* In responsive web design, breakpoints refer to specific points or thresholds in the layout where the design needs to adapt and change based on the screen size or device being used. Breakpoints are used to define different sets of styles and layout rules that are applied at different screen sizes, allowing the design to respond and adjust accordingly.
* For example, you may start by designing for mobile screens and set a breakpoint at a certain width, such as 768 pixels, to handle small tablets or landscape-oriented mobile devices. You would then define a media query with that breakpoint:
```
@media (min-width: 768px) {
  /* Styles for screens with a width of 768 pixels or larger */
}

```
* By strategically choosing breakpoints and using media queries, one can create a responsive design that adapts fluidly to various screen sizes, providing an optimal user experience across devices ranging from small smartphones to large desktop monitors.

#
## Q.4 What is the purpose of using Media Queries for Print Media?

* The purpose of using media queries for print media is to provide a specific set of styles and layout rules that are optimized for printing a web page. While web pages are typically designed for screen display, media queries for print allow  to control how the content appears when printed on paper or saved as a PDF.
* To use media queries for print, you can define a media type of print within the @media rule. For example:
```
@media print {
  /* Styles specific to printing */
}
```
* Inside the media query, you can apply styles that are specifically designed for the printed output. These styles will only be applied when the content is being printed or saved as a PDF.

#
## Q.5 What is the purpose of the orientation media feature?
* The purpose of the orientation media feature in CSS is to target and apply different styles based on the orientation of the device's screen. 
* It allows you to adapt the layout and presentation of your web content based on whether the device is in a portrait or landscape orientation.
*  The orientation media feature has two possible values **portrait and landscape**
```
@media (orientation: portrait) {
  /* Styles for devices in portrait orientation */
}

@media (orientation: landscape) {
  /* Styles for devices in landscape orientation */
}
```
#
##  **Q.6** Imagine you are a web developer working for a creative agency that specializes in building visually appealing and interactive websites. The agency has recently received a client request to create a landing page similar to the design of the one-page website: https://www.getonecard.app/. The client wants to showcase a video prominently on the page to engage visitors.

Your task is to create a simple webpage that replicates the one-page landing page design, including a responsive layout and an HTML video. The below images are for your reference. Some browsers don’t allow you to play videos without the controls attribute. So, you can add controls here, we will learn how to play a video without the controls attribute in the later sections.

#
##

* [Gitrepo link]()
* [Deployment link]()

#
##

* [Gitrepo link]()
* [Deployment link]()

#
##

* [Gitrepo link]()
* [Deployment link]()

#
##
* [Gitrepo link]()
* [Deployment link]()

#
##

* [Gitrepo link]()
* [Deployment link]()