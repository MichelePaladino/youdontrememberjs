const react = [
  { 
    logo: 'react',
    question: `What happens when you call setState?`,
    answer: `The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component. This will kick off a process called reconciliation. The end goal of reconciliation is to, in the most efficient way possible, update the UI based on this new state. To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this tree, in order to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where absolutely necessary.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/state-and-lifecycle.html">React docs: State and Lifecycle</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/understanding-react-setstate/">CSS-TRICKS: Understanding React 'setState'</a>`,
    id: 1,
  },
  { 
    logo: 'react',
    question: `What’s the difference between an Element and a Component in React?`,
    answer: `Simply put, a React element describes what you want to see on the screen. Not so simply put, a React element is an object representation of some UI.

    <br/><br/>A React component is a function or a class which optionally accepts input and returns a React element (typically via JSX which gets transpiled to a createElement invocation).
    
    <br/><br/>For more info, check out <a rel="noopener noreferrer" target="_blank" href="https://tylermcginnis.com/react-elements-vs-react-components/">React Elements vs React Components</a>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://tylermcginnis.com/react-elements-vs-react-components/">tylermcginnis: React Elements vs React Components</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html">React docs: React Components, Elements, and Instances</a>`,
    id: 2,
  },
  { 
    logo: 'react',
    question: `When would you use a Class Component over a Functional Component?`,
    answer: `If your component has state or a lifecycle method(s), use a Class component. Otherwise, use a Functional component.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/questions/36097965/react-when-to-use-es6-class-based-components-vs-functional-es6-components?noredirect=1&lq=1">StackOverflow: When to use ES6 class based components vs. functional ES6 components?</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://reactarmory.com/answers/es6-classes-vs-function-components">reactarmory: ES6 classes vs. function components: which to use?</a>`,
    id: 3,
  },
  { 
    logo: 'react',
    question: `What are refs in React and why are they important?`,
    answer: `Refs are an escape hatch which allow you to get direct access to a DOM element or an instance of a component. In order to use them you add a ref attribute to your component whose value is a callback function which will receive the underlying DOM element or the mounted instance of the component as its first argument.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/refs-and-the-dom.html">React docs: Refs and the DOM</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81">hackernoon: Refs in React : All you need to know !</a>`,
    id: 4,
  },
  { 
    logo: 'react',
    question: `What are keys in React and why are they important?`,
    answer: `Keys are what help React keep track of what items have changed, been added, or been removed from a list.
    <br/><br/>It’s important that each key be unique among siblings. Part of the reconciliation process is performing a diff of a new element tree with the most previous one. Keys make this process more efficient when dealing with lists because React can use the key on a child element to quickly know if an element is new or if it was just moved when comparing trees. And not only do keys make this process more efficient, but without keys, React can’t know which local state corresponds to which item on move. So never neglect keys when mapping.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/lists-and-keys.html">React docs: Lists and Keys</a>`,
    id: 5,
  },
  { 
    logo: 'react',
    question: `What is the difference between a controlled component and an uncontrolled component?`,
    answer: `A large part of React is this idea of having components control and manage their own state. What happens when we throw native HTML form elements (input, select, textarea, etc) into the mix? Should we have React be the “single source of truth” like we’re used to doing with React or should we allow that form data to live in the DOM like we’re used to typically doing with HTML form elements? These two questions are at the heart of controlled vs uncontrolled components.

    <br/><br/>A controlled component is a component where React is in control and is the single source of truth for the form data.
    <br/><br/>An uncontrolled component is where your form data is handled by the DOM, instead of inside your React component. You use refs to accomplish this.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/forms.html">React docs: Forms</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://medium.com/@peter.yun.kim/controlled-and-uncontrolled-input-values-in-react-907119cc98d4">medium: Controlled and Uncontrolled Input Values in React</a>`,
    id: 6,
  },
  { 
    logo: 'react',
    question: `In which lifecycle event do you make AJAX requests and why?`,
    answer: `AJAX requests should go in the componentDidMount lifecycle event.

    <br/><br/>There are a few reasons for this:
    
    <li>Fiber, the new React reconciliation algorithm, has the ability to start and stop rendering as needed for performance benefits. One of the trade-offs of this is that componentWillMount, the other lifecycle event where it might make sense to make an AJAX request, will be “non-deterministic”. What this means is that React may start calling componentWillMount at various times whenever it feels like it needs to. This would obviously be a bad formula for AJAX requests.</li>
    
    <li>You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update.</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/faq-ajax.html">React docs: AJAX and APIs</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://daveceddia.com/ajax-requests-in-react/">daveceddia: AJAX Requests in React: How and Where to Fetch Data</a>`,
    id: 7,
  },
  { 
    logo: 'react',
    question: `What does shouldComponentUpdate do and why is it important?`,
    answer: `Above we talked about reconciliation and what React does when setState is called. What shouldComponentUpdate does is it’s a lifecycle method that allows us to opt out of this reconciliation process for certain components (and their child components). Why would we ever want to do this? As mentioned above, “The end goal of reconciliation is to, in the most efficient way possible, update the UI based on new state”. If we know that a certain section of our UI isn’t going to change, there’s no reason to have React go through the trouble of trying to figure out if it should. By returning false from shouldComponentUpdate, React will assume that the current component, and all its child components, will stay the same as they currently are.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/react-component.html#shouldcomponentupdate">React docs: shouldcomponentupdate</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://medium.freecodecamp.org/react-shouldcomponentupdate-demystified-c5d323099ef6">freecodecamp: React shouldComponentUpdate demystified</a>`,
    id: 8,
  },
  { 
    logo: 'react',
    question: `How do you tell React to build in Production mode and what will that do?`,
    answer: `Typically you’d use Webpack’s DefinePlugin method to set NODE_ENV to production. This will strip out things like propType validation and extra warnings. On top of that, it’s also a good idea to minify your code because React uses Uglify’s dead-code elimination to strip out development only code and comments, which will drastically reduce the size of your bundle.`,
    reference: ``,
    id: 9,
  },
  { 
    logo: 'react',
    question: `Describe how events are handled in React`,
    answer: `In order to solve cross browser compatibility issues, your event handlers in React will be passed instances of SyntheticEvent, which is React’s cross-browser wrapper around the browser’s native event. These synthetic events have the same interface as native events you’re used to, except they work identically across all browsers.

    <br/><br/>What’s mildly interesting is that React doesn’t actually attach events to the child nodes themselves. React will listen to all events at the top level using a single event listener. This is good for performance and it also means that React doesn’t need to worry about keeping track of event listeners when updating the DOM.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/events.html">React docs: SyntheticEvent</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/handling-events.html">React docs: Handling Events</a>`,
    id: 10,
  },
  { 
    logo: 'react',
    question: `What is the difference between createElement and cloneElement?`,
    answer: `createElement is what JSX gets transpiled to and is what React uses to create React Elements (object representations of some UI). cloneElement is used in order to clone an element and pass it new props. `,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/questions/37521798/when-should-i-be-using-react-cloneelement-vs-this-props-children">StackOverflow: When should I be using React.cloneElement vs this.props.children?</a>`,
    id: 11,
  },
  { 
    logo: 'react',
    question: `What is the second argument that can optionally be passed to setState and what is its purpose?`,
    answer: `A callback function which will be invoked when setState has finished and the component is re-rendered.

    <br/><br/>Something that’s not spoken of a lot is that setState is asynchronous, which is why it takes in a second callback function. Typically it’s best to use another lifecycle method rather than relying on this callback function, but it’s good to know it exists.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>`,
    id: 12,
  },
  { 
    logo: 'react',
    question: `Is it possible to pass a function to setState?`,
    answer: `Sure! Not only is possible to do it, but it’s also actively recommended if you’re setting state based on previous state. You pass a function to setState that receives the previous state and props and returns a new state`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/react-component.html#setstate">React docs: setState</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://medium.learnreact.com/setstate-takes-a-callback-1f71ad5d2296?gi=8c70f3bb078d">learnreact: setState takes a callback</a>`,
    id: 13,
  },

  // { 
    // logo: 'react',
    // question: `QUESTION`,
    // answer: `ANSWER`,
    // reference: `<a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>
    // <br/><a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>`,
    // id: 000000,
  // },
]

module.exports.react = react