const css = [
  { 
    logo: 'css',
    // question: `<h3 class="flashcard__title">What is the "Box Model" in CSS? Which CSS properties are a part of it?</h3>`, ONLY FOR INLINE HTML TAGS
    question: `What is the "Box Model" in CSS? Which CSS properties are a part of it?`,
    answer: `The CSS box model describes the rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model. Each box has a content area (e.g. text, an image, etc.) and optional surrounding padding, border, and margin areas. 
    <br/><br/>
    The CSS box model is responsible for calculating:
    <li>How much space a block element takes up.</li>
    <li>Whether or not borders and/or margins overlap, or collapse.</li>
    <li>A box's dimensions.</li>
    <br/>
    The box model has the following rules:
    <li>The dimensions of a block element are calculated by width, height, padding, borders, and margins.</li>
    <li>If no height is specified, a block element will be as high as the content it contains, plus padding (unless there are floats, for which see below).</li>
    <li>If no width is specified, a non-floated block element will expand to fit the width of its parent minus padding.</li>
    <li>The height of an element is calculated by the content's height.</li>
    <li>The width of an element is calculated by the content's width.</li>
    <li>By default, paddings and borders are not part of the width and height of an element.</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing">MDN: box-sizing</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/box-sizing/">CSS-TRICKS: box-sizing</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/the-css-box-model/">CSS-TRICKS: the css box-model</a>`,
    id: 1,
  },
  { 
    logo: 'css',
    question: `What does {box-sizing: border-box} do? What are its advantages?`,
    answer: `<li>By default, elements have box-sizing: content-box applied, and only the content size is being accounted for.</li>
    <li>box-sizing: border-box changes how the width and height of elements are being calculated, border and padding are also being included in the calculation.</li>
    <li>The height of an element is now calculated by the content's height + vertical padding + vertical border width.</li>
    <li>The width of an element is now calculated by the content's width + horizontal padding + horizontal border width.</li>
    <li>Taking into account paddings and borders as part of our box model resonates better with how designers actually imagine content in grids.</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing">MDN: box-sizing</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/box-sizing/">CSS-TRICKS: box-sizing</a>`,
    id: 2,
  },
  { 
    logo: 'css',
    question: `What is the CSS <strong>display</strong> property? Can you give a few examples of its use?`,
    answer: `Every element on a web page is a rectangular box. The display property in CSS determines just how that rectangular box behaves. There are only a handful of values that are commonly used: inline, inline-block, block, none.
    <br/><br/><strong>Inline</strong> is the default value for elements. Think of elements like &lt;span>, &lt;em>, or &lt;b> and how wrapping text in those elements within a string of text doesn't break the flow of the text. An inline element will accept margin and padding, but the element still sits inline as you might expect. Margin and padding will only push other elements horizontally away, not vertically. An inline element will not accept height and width. It will just ignore it.
    <br/><br/>An element set to <strong>inline-block</strong> is very similar to inline in that it will set inline with the natural flow of text (on the "baseline"). The difference is that you are able to set a width and height which will be respected.
    <br/><br/>A number of elements are set to <strong>block</strong> by the browser UA stylesheet. They are usually container elements, like &ltdiv>, &lt;section>, and &lt;ul>. Also text "blocks" like &lt;p> and &lt;h1>. Block level elements do not sit inline but break past them. By default (without setting a width) they take up as much horizontal space as they can.
    <br/><br/><strong>None</strong> totally removes the element from the page. Note that while the element is still in the DOM, it is removed visually and any other conceivable way (you can't tab to it or its children, it is ignored by screen readers, etc).`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">MDN: display</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/almanac/properties/d/display/">CSS-TRICKS: display</a>`,
    id: 3,
  },
  { 
    logo: 'css',
    question: `What's the difference between a relative, fixed, absolute and statically positioned element?`,
    answer: `A positioned element is an element whose computed position property is either relative, absolute, fixed or sticky. In other words, it's anything except static.
    <br/><strong>static</strong> - The default position; the element will flow into the page as it normally would. The top, right, bottom, left and z-index properties do not apply.
    <br/><strong>relative</strong> - The element position is adjusted relative to itself, without changing layout (and thus leaving a gap for the element where it would have been had it not been positioned).
    <br/><strong>absolute</strong> - The element is removed from the flow of the page and positioned at a specified position relative to its closest positioned ancestor if any, or otherwise relative to the initial containing block. Absolutely positioned boxes can have margins, and they do not collapse with any other margins. These elements do not affect the position of other elements.
    <br/><strong>fixed</strong> - The element is removed from the flow of the page and positioned at a specified position relative to the viewport and doesn't move when scrolled.
    <br/><strong>sticky</strong> - Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">MDN: position</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/almanac/properties/p/position/">CSS-TRICKS: position</a>`,
    id: 4,
  },
  { 
    logo: 'css',
    question: `What existing CSS frameworks have you used locally, or in production? How would you change/improve them?`,
    answer: `<strong>Bootstrap</strong> - Slow release cycle. Bootstrap 4 has been in alpha for almost 2 years. Add a spinner button component, as it is widely used.
    <br/><strong>Semantic UI</strong> - Source code structure makes theme customization extremely hard to understand. Its unconventional theming system is a pain to customize. Hardcoded config path within the vendor library. Not well-designed for overriding variables unlike in Bootstrap.
    <br/><strong>Bulma</strong> - A lot of non-semantic and superfluous classes and markup required. Not backward compatible. Upgrading versions breaks the app in subtle manners.`,
    reference: ``,
    id: 5,
  },
  { 
    logo: 'css',
    question: `Have you played around with the new CSS Flexbox or Grid specs?`,
    answer: `Yes. <strong>Flexbox</strong> is mainly meant for 1-dimensional layouts while <strong>Grid</strong> is meant for 2-dimensional layouts.
    <br/>Flexbox</strong> solves many common problems in CSS, such as vertical centering of elements within a container, sticky footer, etc. Bootstrap and Bulma are based on Flexbox, and it is probably the recommended way to create layouts these days. Have tried Flexbox before but ran into some browser incompatibility issues (Safari) in using flex-grow, and I had to rewrite my code using inline-blocks and math to calculate the widths in percentages, it wasn't a nice experience.
    <br/><strong>Grid</strong> is by far the most intuitive approach for creating grid-based layouts (it better be!) but browser support is not wide at the moment.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://caniuse.com/#search=grid">Can I Use: Grid</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://philipwalton.github.io/solved-by-flexbox/">philipwalton: Solved by Flexbox</a>`,
    id: 6, 
  }, 
  { 
    logo: 'css',
    question: 'Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy?',
    answer: `Note that these two 2 approaches are not exclusive.

    Making a website responsive means the some elements will respond by adapting its size or other functionality according to the device's screen size, typically the viewport width, through CSS media queries, for example, making the font size smaller on smaller devices.
    <br/>A mobile-first strategy is also responsive, however it agrees we should default and define all the styles for mobile devices, and only add specific responsive rules to other devices later.
    <br/>A mobile-first strategy has 2 main advantages:
    <li>It's more performant on mobile devices, since all the rules applied for them don't have to be validated against any media queries.</li>
    <li>It forces to write cleaner code in respect to responsive CSS rules.</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="http://blog.froont.com/9-basic-principles-of-responsive-web-design/">froont.com: 9 basic principles of responsive web design</a>`,
    id: 7,  
  },
  { 
    logo: 'css',
    question: `How is responsive design different from adaptive design?`,
    answer: `Both responsive and adaptive design attempt to optimize the user experience across different devices, adjusting for different viewport sizes, resolutions, usage contexts, control mechanisms, and so on.
    <br/><strong>Responsive design</strong> works on the principle of flexibility - a single fluid website that can look good on any device. Responsive websites use media queries, flexible grids, and responsive images to create a user experience that flexes and changes based on a multitude of factors. Like a single ball growing or shrinking to fit through several different hoops.
    <br/><strong>Adaptive design</strong> is more like the modern definition of progressive enhancement. Instead of one flexible design, adaptive design detects the device and other features and then provides the appropriate feature and layout based on a predefined set of viewport sizes and other characteristics. The site detects the type of device used and delivers the pre-set layout for that device. Instead of a single ball going through several different-sized hoops, you'd have several different balls to use depending on the hoop size.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Archive/Apps/Design/UI_layout_basics/Responsive_design_versus_adaptive_design">MDN: Responsive design versus adaptive design</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="http://mediumwell.com/responsive-adaptive-mobile/">mediumwell: Responsive adaptive mobile</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/">CSS-TRICKS: the difference between responsive and adaptive design/</a>`,
    id: 8,
  },  { 
    logo: 'css',
    question: `Have you ever worked with retina graphics? If so, when and what techniques did you use?`,
    answer: `Retina is just a marketing term to refer to high resolution screens with a pixel ratio bigger than 1. The key thing to know is that using a pixel ratio means these displays are emulating a lower resolution screen in order to show elements with the same size. Nowadays we consider all mobile devices retina defacto displays.
    <br/>Browsers by default render DOM elements according to the device resolution, except for images.
    <br/>In order to have crisp, good-looking graphics that make the best of retina displays we need to use high resolution images whenever possible. However using always the highest resolution images will have an impact on performance as more bytes will need to be sent over the wire.
    <br/>To overcome this problem, we can use responsive images, as specified in HTML5. It requires making available different resolution files of the same image to the browser and let it decide which image is best, using the html attribute srcset and, optionally, sizes.
    <br/>It is important to note that browsers which don't support HTML5's srcset (i.e. IE11) will ignore it and use src instead. If we really need to support IE11 and we want to provide this feature for performance reasons, we can use a JavaScript polyfill.
    <br/>For icons, I would also opt to use SVGs and icon fonts where possible, as they render very crisply regardless of resolution.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/">MDN: If you’re just changing resolutions, use srcset.</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://aclaes.com/responsive-background-images-with-srcset-and-sizes/">aclaes: Responsive background images with srcset and sizes</a>`,
    id: 9, 
  },
  { 
    logo: 'css',
    question: 'What are the benefits of SVG?',
    answer: `SVG is an image format that is vector based. It's an efficient format for that (small file sizes). You can scale them and they retain their sharpness at any size. You can affect parts of them with CSS and JavaScript as well as SVG specific filters that can do things like blurring.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="http://css-tricks.com/using-svg/">CSS-TRICKS: Using SVG.</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/it/docs/SVG/">MDN: SVG</a>`,
    id: 10,
  },
  { 
    logo: 'css',
    question: `Which one would you prefer among 'px', 'em' and '%?'`,
    answer: `<strong>px</strong> gives fine grained control and maintains alignment because 1 px or multiple of 1 px is guaranteed to look sharp. px is not cascade, this means if parent font-size is 20px and child 16px. child would be 16px.
    <br/><strong>em</strong> maintains relative size. 1em is equal to the current font-size of the element or the browser default. If you set font-size to 16px, then 1em will be equal to 16px. The common practice is to set default body font-size to 62.5% (equal to 10px).
    <br/><strong>%</strong> sets font-size relative to the font size of the body. Hence, you have to set font-size of the body to a reasonable size. For example, if parent font-size is 20px and child font-size is 50%, child would be 10px.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/the-lengths-of-css/">CSS-TRICKS: Using SVG.</a>`,
    id: 11,
  },
  { 
    logo: 'css',
    question: `What are the differences between visibility hidden and display none?`,
    answer: `<strong>display: none</strong> removes the element from the normal layout flow and allow other elements to fill in. <strong>visibility: hidden</strong> tag is rendered, it takes space in the normal flow but doesn't show it.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="http://www.vanseodesign.com/css/visibility-vs-display/">vanseodesign: Visibility vs Display.</a>`,
    id: 12,
  },  { 
    logo: 'css',
    question: `Does <strong>overflow: hidden</strong> create a new block formatting context?`,
    answer: `Yes. Overflow property deals with the content if content size exceeds the allocated size for the content. You can make extra content visible, hidden, scroll or auto (viewport default behavior).`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/the-css-overflow-property/">CSS-TRICKS: The css overflow property</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>`,
    id: 13,
  },
  { 
    logo: 'css',
    question: `How could you apply css rules specific to a media?`,
    answer: `@media (max-width: 700px){...} means you want to apply rules to those media whose max-width is 700px. This means that every smaller device will have this rule.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries">MDN: Media queries</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>`,
    id: 14,
  },
  { 
    logo: 'css',
    question: `What are some of the pseudo classes you have used?`,
    answer: `Pseudo classes describe a specific state of an element and allow to style element dynamically. The most popular one is :hover. Besides, I have used :visited, :focus, :nth-child, nth-of-type, :link, etc.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/pseudo-class-selectors/">CSS-TRICKS: Pseudo class selectors</a>`,
    id: 15,
  },
  { 
    logo: 'css',
    question: `What are pseudo elements?`,
    answer: `Pseudo elements help you to add cosmetics contents. Pseudo elements generates content where as pseudo class deals with state of the element`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="http://nicolasgallagher.com/an-introduction-to-css-pseudo-element-hacks/">nicolasgallagher: An introduction to css pseudo element hacks</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/css-content/">CSS-TRICKS: CSS content</a>`,
    id: 16,
  },  
  { 
    logo: 'css',
    question: `What is specificity? How do you calculate specificity?`,
    answer: `Specificity is a process of determining which css rule will be applied to an element. It determines which rules will take precedence.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity">MDN: Specificity</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://specificity.keegan.st/">Keegan: Specificity Calculator</a>`,
    id: 18,
  },  
  // { 
  //   logo: 'css',
  //   question: `QUESTION`,
  //   answer: `ANSWER`,
  //   reference: `<a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>
  //   <br/><a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>`,
  //   id: 0000,
  // },  
]

module.exports.css = css