#
## Q.1 What’s Box Model in CSS ? 
* The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.
#
## Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?
* Following are the different types of selectors in CSS:
    * **Element selectors**: These selectors target elements based on their HTML tag names. 
	* **Class selectors**: Class selectors target elements based on their class attribute. They are denoted by a dot (.) followed by the class name. 
	* **ID selectors**: ID selectors target elements based on their unique id attribute. They are denoted by a hash (#) followed by the ID name
    * **Attribute selectors**: Attribute selectors target elements based on their attribute values. 
	* **Pseudo-classes and pseudo-elements**: Pseudo-classes select elements based on their state or position in the document tree. Examples include :hover (selects an element when the mouse hovers over it) Pseudo-elements target specific parts of an element, such as ::before (inserts content before an element) and ::after (inserts content after an element). 
* Advantages of different types of selectors are:
	* **Flexibility**: CSS selectors provide different levels of granularity, allowing you to target specific elements or groups of elements based on your needs.
	* **Reusability**: Class selectors can be applied to multiple elements, enabling consistent styling throughout a website.
	* **Specificity**: ID selectors have high specificity, making them useful for targeting specific elements with precision.
	* **Dynamic styling**: Pseudo-classes and pseudo-elements allow you to apply styles based on element states or insert content dynamically.

#
## Q.3 What is VW/VH ?
* In CSS, "vw" and "vh" are relative length units that represent a percentage of the viewport's width and height, respectively. These units allow developer to size elements based on the dimensions of the viewport, providing a responsive and flexible design approach.
* Pixels (px) are the absolute unit of measurement commonly used in CSS. One pixel represents the smallest unit of screen display and has a fixed size. 
* The main difference between "vw"/"vh" and "px" is their behavior in relation to the viewport dimensions. While pixels provide a fixed size, "vw" and "vh" units offer responsiveness by scaling with the viewport.
#
## Q.4 Whats difference between Inline, Inline Block and block ?
* Three commonly used values for the display property in CSS are "inline", "inline-block", and "block".

|  Inline |  Inline-block | block  |
|---------|---------------|--------|
|         |               |        |   
|Elements with the inline display property do not start on a new line and only occupy the space necessary for their content.|Elements with the display property set to "inline-block" share characteristics of both inline and block elements. They flow inline like text but also allow width and height properties to be applied. Inline-block elements start on the same line as other inline elements, but they can have margins, padding, and dimensions|Elements with the display property set to "block" start on a new line and occupy the full width available within their parent container.|
|  `<span>, <a>`, and `<strong>` are some of html tags which has default inline property       |   Examples of inline-block elements are `<img>`, `<button>`, and `<input>`.            |  Examples of block elements are    to `<h6>`, and `<ul>. `     | 




#
## Q.5 How is Border-box different from Content Box?
* In CSS, the box-sizing property used to control how the width and height of an element are calculated, affecting the total size of the box model. The two main values for the box-sizing property are "content-box" and "border-box". 
1.	**Content-box:**
The default value for the box-sizing property is "content-box". With this value, the specified width and height of an element only include the content area. It does not include the padding or border. The padding and border are added to the specified width and height, increasing the total dimensions of the box. In other words, the content box size is independent of the padding and border.
* For example, if you set an element's width to 200px and add 10px padding and a 2px border, the total width of the element will be 224px (200px content width + 10px padding on the left + 10px padding on the right + 2px border on the left + 2px border on the right).

2.	**Border-box:**
When we set the box-sizing property to "border-box", the specified width and height of an element includes both the content, padding, and border. The padding and border are included in the specified dimensions, and they do not increase the total width and height of the box. In other words, the border box size is determined by the specified width and height, and the padding and border are included within that space.
* Continuing with the previous example, if we set an element's width to 200px and set the box-sizing property to "border-box", the element's total width will remain 200px, and the padding and border will be contained within that width. The browser automatically adjusts the content width to accommodate the padding and border.
#
## Q.6 What’s z-index and How does it Function ?
* In CSS, the z-index property is used to control the stacking order of elements on a web page along the z-axis, which represents the depth or elevation of elements in the three-dimensional space. The z-index property only works on positioned elements (elements with a position value other than "static," such as "relative," "absolute," or "fixed").
* The z-index property accepts integer values (positive, negative, or zero) to assign stacking levels. A higher positive value increases the element's stacking level, while a negative value decreases it.
* By using the z-index property strategically, one can control the visual layering and stacking order of elements on your web page, allowing you to position elements in front of or behind other elements based on their stacking levels within their respective stacking contexts.
#
## Q.7 What’s Grid & Flex and difference between them?
Grid and Flex are two CSS layout systems that are used to create responsive and flexible web page layouts. While they have some similarities, they serve different purposes and have distinct characteristics. 
1.	**CSS Grid**:
CSS Grid is a two-dimensional layout system that divides a webpage into rows and columns. It provides a grid-based structure that allows user to precisely position and align elements within the grid cells. Key features of CSS Grid include:
*	Two-dimensional layout: CSS Grid allows you to define both rows and columns, giving you control over the placement and sizing of elements in both directions.
*	Grid lines and tracks: Grid lines are the horizontal and vertical lines that define the boundaries of the grid cells. Grid tracks are the spaces between the grid lines, which can be set to specific sizes or auto to adjust based on content.
*	Explicit positioning: With CSS Grid, you can explicitly position elements anywhere in the grid, allowing for precise control over their placement. You can define the starting and ending grid lines for each element.
*	Grid alignment: CSS Grid provides various alignment properties to control the positioning of elements within the grid cells, such as aligning them vertically or horizontally.

2.	**CSS Flexbox:**
CSS Flexbox is a one-dimensional layout system that operates in a single direction (either horizontally or vertically) along a flex container and its flex items. Flexbox is designed for creating flexible and dynamic layouts. Key features of CSS Flexbox include:
*	One-dimensional layout: Flexbox focuses on arranging elements in a single row or column, depending on the flex container's direction.

*	Flex container and flex items: The parent element becomes a flex container by setting the display property to "flex". Its child elements become flex items and flow within the flex container.
*	Flexibility and auto-sizing: Flex items can dynamically adjust their width or height based on available space, accommodating different screen sizes and content lengths.
*	Flex alignment: Flexbox provides alignment properties to control how flex items are aligned within the flex container, such as justifying their distribution along the main axis or aligning them vertically along the cross axis.
Differences between Grid and Flex are:
*	Layout dimension: Grid is a two-dimensional layout system, while Flexbox is a one-dimensional layout system.
*	Control over layout: Grid provides more fine-grained control and positioning of elements in both rows and columns. Flexbox focuses on flexible and dynamic layouts, allowing elements to expand and shrink based on available space.
*	Layout complexity: Grid is ideal for complex layouts that require precise control over the positioning and alignment of elements. Flexbox is often used for simpler layouts or within Grid itself to control the behavior of items within a grid cell.
*	Direction: Grid can handle elements arranged in both horizontal and vertical directions. Flexbox focuses on either horizontal (row) or vertical (column) layouts.
#
## Q.8 Difference between absolute and relative and sticky and fixed position explain with example.

Position property in CSS helps to design attractive interfaces with ease and helps in positioning the elements.
There are five different position values: Static, Relative, Absolute, Fixed, Sticky
1.	**Relative position:**
Syntax - position: relative;
Elements with relative positions are positioned relative to their normal position. Properties like the top, bottom, right, and left are used to adjust from their normal position. Other contents or elements will not be adjusted to fill or fit into the space left by the element.
2.	**Absolute position:**
Syntax - `position: absolute;`
In absolute position, the elements are positioned relative to their ancestor or parent container. If there is no parent container then it takes the body of the page as its parent. In absolute position, the other elements surrounding it ignores the space occupied by the element with absolute position and the element is removed from the document flow in contrast to relative position.

3.	**Sticky position:**
Syntax - `position: sticky;`

An element with a sticky position is positioned based on the scroll position. They shift between relative and fixed values based on the scroll. Element with sticky position is positioned relative until a given offset position is met in the viewport and then it gets fixed in place like position: fixed.
4.	**Fixed position:**
Syntax - `position: fixed;`
Elements with the fixed position are positioned relative to the viewport and they do not weave when scrolled up or down. The top, right, bottom, and left properties are used to position the element.

#
##  Q.9 Build Periodic Table as shown in the below image
* [github repo link](https://github.com/GopalkrishaRao/Placement_Assignment_Gopalkrishna_H_R/tree/main/CSS/Q8-Periodic%20table)
[Deployed Pjoect link](https://css-periodic-table-8588d.netlify.app/)

#
## Q.10 Build Responsive Layout both desktop and mobile and Tablet, see below image for reference ?
* [github repo link](https://github.com/GopalkrishaRao/Placement_Assignment_Gopalkrishna_H_R/tree/main/CSS/Q10-Responsive%20Layout)
* [Deployed Pjoect link](https://assignment-css-responsive-lay-e5a2c2a.netlify.app/)
