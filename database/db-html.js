const html = [
  { 
    logo: 'html',
    question: `What does a DOCTYPE do?`,
    answer: `DOCTYPE is an abbreviation for “document type”. It is a declaration used in HTML to distinguish between standards mode and quirks mode. Its presence tells the browser to render the web page in standards mode.
      <br/>Moral of the story - just add <!DOCTYPE html> at the start of your page.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/questions/7695044/what-does-doctype-html-do">StackOverflow: What does doctype html do</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://www.w3.org/QA/Tips/Doctype">w3.org: Doctype</a>`,
    id: 1,
  },
  { 
    logo: 'html',
    question: `How do you serve a page with content in multiple languages?`,
    answer: `The question is a little vague, I will assume that it is asking about the most common case, which is how to serve a page with content available in multiple languages, but the content within the page should be displayed only in one consistent language.

    <br/><br/>When an HTTP request is made to a server, the requesting user agent usually sends information about language preferences, such as in the Accept-Language header. The server can then use this information to return a version of the document in the appropriate language if such an alternative is available. The returned HTML document should also declare the lang attribute in the &lt;html> tag, such as &lt;html lang="en">...&lt;/html>.
    
    <br/><br/>In the back end, the HTML markup will contain i18n placeholders and content for the specific language stored in YML or JSON formats. The server then dynamically generates the HTML page with content in that particular language, usually with the help of a back end framework.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="LINK">w3.org: Language</a>`,
    id: 2,
  },
  { 
    logo: 'html',
    question: `What kind of things must you be wary of when designing or developing for multilingual sites?`,
    answer: `<li>Use lang attribute in your HTML.</li>
    <li>Directing users to their native language - Allow a user to change his country/language easily without hassle.</li>
    <li>Text in images is not a scalable approach - Placing text in an image is still a popular way to get good-looking, non-system fonts to display on any computer. However, to translate image text, each string of text will need to have it's a separate image created for each language. Anything more than a handful of replacements like this can quickly get out of control.</li>
    <li>Restrictive words/sentence length - Some content can be longer when written in another language. Be wary of layout or overflow issues in the design. It's best to avoid designing where the amount of text would make or break a design. Character counts come into play with things like headlines, labels, and buttons. They are less of an issue with free-flowing text such as body text or comments.</li>
    <li>Be mindful of how colors are perceived - Colors are perceived differently across languages and cultures. The design should use color appropriately.</li>
    <li>Formatting dates and currencies - Calendar dates are sometimes presented in different ways. Eg. "May 31, 2012" in the U.S. vs. "31 May 2012" in parts of Europe.</li>
    <li>Do not concatenate translated strings - Do not do anything like "The date today is " + date. It will break in languages with different word order. Use a template string with parameters substitution for each language instead. For example, look at the following two sentences in English and Chinese respectively: I will travel on {% date %} and {% date %} 我会出发. Note that the position of the variable is different due to grammar rules of the language.</li>
    <li>Language reading direction - In English, we read from left-to-right, top-to-bottom, in traditional Japanese, text is read up-to-down, right-to-left.</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://www.quora.com/What-kind-of-things-one-should-be-wary-of-when-designing-or-developing-for-multilingual-sites">quora: Designing and developing for multilingual sites</a>`,
    id: 3,
  },
  { 
    logo: 'html',
    question: `What are <strong>data-</strong> attributes good for?`,
    answer: `Before JavaScript frameworks became popular, front end developers used data- attributes to store extra data within the DOM itself, without other hacks such as non-standard attributes, extra properties on the DOM. It is intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.

    <br/><br/>These days, using data- attributes is not encouraged. One reason is that users can modify the data attribute easily by using inspect element in the browser. The data model is better stored within JavaScript itself and stay updated with the DOM via data binding possibly through a library or a framework.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="http://html5doctor.com/html5-custom-data-attributes/">html5doctor: HTML5 custom Data attributes</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://www.w3.org/TR/html5/dom.html#embedding-custom-non-visible-data-with-the-data-attributes">w3.org: Embedding custom non-visible data with the data- attributes</a>`,
    id: 4,
  },
  { 
    logo: 'html',
    question: `Consider HTML5 as an open web platform. What are the building blocks of HTML5?`,
    answer: `<li>Semantics - Allowing you to describe more precisely what your content is.</li>
    <li>Connectivity - Allowing you to communicate with the server in new and innovative ways.</li>
    <li>Offline and storage - Allowing webpages to store data on the client-side locally and operate offline more efficiently.</li>
    <li>Multimedia - Making video and audio first-class citizens in the Open Web.</li>
    <li>2D/3D graphics and effects - Allowing a much more diverse range of presentation options.</li>
    <li>Performance and integration - Providing greater speed optimization and better usage of computer hardware.</li>
    <li>Device access - Allowing for the usage of various input and output devices.</li>
    <li>Styling - Letting authors write more sophisticated themes.</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">MDN: HTML5</a>`,
    id: 5,
  },
  { 
    logo: 'html',
    question: `Describe the difference between a cookie, sessionStorage and localStorage`,
    answer: `All the above-mentioned technologies are key-value storage mechanisms on the client side. They are only able to store values as strings.
    <br/><br/><strong>cookie</strong>
    <br/><strong>Initiator:</strong> Client or server. Server can use Set-Cookie header
    <br/><strong>Expiry:</strong> Manually set
    <br/><strong>Persistent across browser sessions:</strong> Depends on whether expiration is set
    <br/><strong>Sent to server with every HTTP request:</strong> Cookies are automatically being sent via Cookie header
    <br/><strong>Capacity (per domain):</strong> 4kb
    <br/><strong>Accessibility:</strong> Any window

    <br/><br/><strong>localStorage</strong>
    <br/><strong>Initiator:</strong> Client
    <br/><strong>Expiry:</strong> Forever
    <br/><strong>Persistent across browser sessions:</strong> Yes
    <br/><strong>Sent to server with every HTTP request:</strong> No
    <br/><strong>Capacity (per domain):</strong> 5MB
    <br/><strong>Accessibility:</strong> Any window
    
    <br/><br/><strong>sessionStorage</strong>
    <br/><strong>Initiator:</strong> Client
    <br/><strong>Expiry:</strong> on Tab close
    <br/><strong>Persistent across browser sessions:</strong> No
    <br/><strong>Sent to server with every HTTP request:</strong> No
    <br/><strong>Capacity (per domain):</strong> 5MB
    <br/><strong>Accessibility:</strong> Same tab`,
    
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">MDN: Cookies</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="http://tutorial.techaltum.com/local-and-session-storage.html">techaltum: Local and Session Storage</a>`,
    id: 6,
  },
  { 
    logo: 'html',
    question: `Describe the difference between &lt;script>, &lt;script async> and &lt;script defer>`,
    answer: `<li><strong>&lt;script></strong> - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed.</li>
    <li><strong>&lt;script async></strong> - The script will be fetched in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes). Use async when the script is independent of any other scripts on the page, for example, analytics.</li>
    <li><strong>&lt;script defer></strong> - The script will be fetched in parallel to HTML parsing and executed when the page has finished parsing. If there are multiple of them, each deferred script is executed in the order they were encoun­tered in the document. If a script relies on a fully-parsed DOM, the defer attribute will be useful in ensuring that the HTML is fully parsed before executing. There's not much difference in putting a normal &lt;script> at the end of &lt;body>. A deferred script must not contain document.write.</li>
    <br/>Note: The async and defer attrib­utes are ignored for scripts that have no src attribute.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html">growingwiththeweb: async vs defer attributes</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/questions/10808109/script-tag-async-defer">StackOverflow: Script Tag - async & defer</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://bitsofco.de/async-vs-defer/">bitsofco: Asynchronous vs Deferred JavaScript</a>`,
    id: 7,
  },
  { 
    logo: 'html',
    question: `Why is it generally a good idea to position CSS &lt;link>s between &lt;head>&lt;/head> and JS &lt;script>s just before &lt;/body>? Do you know any exceptions?`,
    answer: `<strong>Placing &lt;link>s in the &lt;head></strong>
    <br/>Putting &lt;link>s in the head is part of the specification. Besides that, placing at the top allows the page to render progressively which improves the user experience. The problem with putting stylesheets near the bottom of the document is that it prohibits progressive rendering in many browsers, including Internet Explorer. Some browsers block rendering to avoid having to repaint elements of the page if their styles change. The user is stuck viewing a blank white page. It prevents the flash of unstyled contents.
    
    <br/><br/><strong>Placing &lt;script>s just before &lt;/body></strong>
    <br/>&lt;script>s block HTML parsing while they are being downloaded and executed. Downloading the scripts at the bottom will allow the HTML to be parsed and displayed to the user first.
    
    <br/><br/>An exception for positioning of &lt;script>s at the bottom is when your script contains document.write(), but these days it's not a good practice to use document.write(). Also, placing &lt;script>s at the bottom means that the browser cannot start downloading the scripts until the entire document is parsed. One possible workaround is to put &lt;script> in the &lt;head> and use the defer attribute.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.yahoo.com/performance/rules.html#css_top">yahoo: Put Stylesheets at the Top</a>`,
    id: 8,
  },
  { 
    logo: 'html',
    question: `What is progressive rendering?`,
    answer: `Progressive rendering is the name given to techniques used to improve the performance of a webpage (in particular, improve perceived load time) to render content for display as quickly as possible.

    <br/><br/>It used to be much more prevalent in the days before broadband internet but it is still used in modern development as mobile data connections are becoming increasingly popular (and unreliable)!
    
    <br/><br/>Examples of such techniques:
    <li>Lazy loading of images - Images on the page are not loaded all at once. JavaScript will be used to load an image when the user scrolls into the part of the page that displays the image.</li>
    <li>Prioritizing visible content (or above-the-fold rendering) - Include only the minimum CSS/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred scripts or listen for the DOMContentLoaded/load event to load in other resources and content.</li>
    <li>Async HTML fragments - Flushing parts of the HTML to the browser as the page is constructed on the back end. More details on the technique can be found <a rel="noopener noreferrer" target="_blank" href="http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/">here</a>.</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/questions/33651166/what-is-progressive-rendering">StackOverflow: What is progressive rendering?</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/">ebayinc: Async Fragments: Rediscovering Progressive HTML Rendering with Marko</a>`,
    id: 9,
  },
  { 
    logo: 'html',
    question: `Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.`,
    answer: `You would use the srcset attribute when you want to serve different images to users depending on their device display width - serve higher quality images to devices with retina display enhances the user experience while serving lower resolution images to low-end devices increase performance and decrease data wastage (because serving a larger image will not have any visible difference). For example: &lt;img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w" src="..." alt=""> tells the browser to display the small, medium or large .jpg graphic depending on the client's resolution. The first value is the image name and the second is the width of the image in pixels. For a device width of 320px, the following calculations are made:

    <li>500 / 320 = 1.5625</li>
    <li>1000 / 320 = 3.125</li>
    <li>2000 / 320 = 6.25</li>
    
    <br/>If the client's resolution is 1x, 1.5625 is the closest, and 500w corresponding to small.jpg will be selected by the browser.
    
    <br/><br/>If the resolution is retina (2x), the browser will use the closest resolution above the minimum. Meaning it will not choose the 500w (1.5625) because it is greater than 1 and the image might look bad. The browser would then choose the image with a resulting ratio closer to 2 which is 1000w (3.125).
    
    <br/><br/>srcset solve the problem whereby you want to serve smaller image files to narrow screen devices, as they don't need huge images like desktop displays do — and also optionally that you want to serve different resolution images to high density/low-density screens.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">MDN: Responsive images</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/">CSS-TRICKS: Responsive Images: If you’re just changing resolutions, use srcset.</a>`,
    id: 10,
  },
  { 
    logo: 'html',
    question: `Have you used different HTML templating languages before?`,
    answer: `Yes, Pug (formerly Jade), ERB, Slim, Handlebars, Jinja, Liquid, just to name a few. In my opinion, they are more or less the same and provide similar functionality of escaping content and helpful filters for manipulating the data to be displayed. Most templating engines will also allow you to inject your own filters in the event you need custom processing before display.`,
    reference: ``,
    id: 11,
  },
  
  // { 
  //   logo: 'html',
  //   question: `QUESTION`,
  //   answer: `ANSWER`,
  //   reference: `<a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>
  //   <br/><a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>`,
  //   id: 000000,
  // },
]

module.exports.html = html