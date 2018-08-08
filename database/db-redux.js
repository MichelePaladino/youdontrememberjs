const redux = [
  { 
    logo: 'redux',
    question: `What is the concept of “single source of truth” in Redux?`,
    answer: `The state of your whole application is stored in an object tree within a single store. This makes it easy to create universal apps, as the state from the server can be serialized and hybridized into the client with no extra coding effort. A single state tree also makes it easier to debug or introspect an application; it also enables persisting the app's state in development, for a faster development cycle.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://medium.com/@juanguardado/redux-single-source-of-truth-e1fe1fb6ffec">juanguardado: Redux: Single Source of Truth</a>`,
    id: 1,
  },
  { 
    logo: 'redux',
    question: `What is Redux?`,
    answer: `Redux is one of the hottest libraries for front-end development in today’s marketplace. It is a predictable state container for JavaScript applications and is used for the entire applications state management. Applications developed with Redux are easy to test and can run in different environments showing consistent behavior.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://medium.freecodecamp.org/exploring-the-what-and-the-why-of-redux-6faadab4768b">freecodecamp: Exploring the what and the why of Redux</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6">freecodecamp: Understanding Redux: The World’s Easiest Guide to Beginning Redux</a>`,
    id: 2,
  },
  { 
    logo: 'redux',
    question: `What are the three principles that Redux follows?`,
    answer: `<strong>Single source of truth</strong>
    <br/> The state of the entire application is stored in an object/ state tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
    <br/><br/><strong>State is read-only</strong>
    <br/> The only way to change the state is to trigger an action. An action is a plain JS object describing the change. Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 
    <br/><br/><strong>Changes are made with pure functions</strong>
    <br/> In order to specify how the state tree is transformed by actions, you need pure functions. Pure functions are those whose return value depends solely on the values of their arguments.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://redux.js.org/introduction/threeprinciples">Redux docs: Three Principles</a>`,
    id: 3,
  },
  { 
    logo: 'redux',
    question: `List down the components of Redux`,
    answer: `Redux is composed of the following components:

    <li>Action – It’s an object that describes what happened</li>
    <li>Reducer –  It is a place to determine how the state will change</li>
    <li>Store – State/ Object tree of the entire application is saved in the Store</li>
    <li>View – Simply displays the data provided by the Store</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://redux.js.org/basics">Redux docs: Basics</a>`,
    id: 4,
  },
  { 
    logo: 'redux',
    question: `How are Actions defined in Redux?`,
    answer: `Actions in React must have a type property that indicates the type of ACTION being performed. They must be defined as a String constant and you can add more properties to it as well. In Redux, actions are created using the functions called Action Creators. 
    <br/>Below is an example of Action and Action Creator:
    <br/><br/>function addTodo(text) {
      <br/>&nbsp;&nbsp;return {
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;type: ADD_TODO,    
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;text    
      <br/>&nbsp;&nbsp;}
    <br/>}`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://redux.js.org/basics/actions">Redux docs: Actions</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://codeburst.io/redux-actions-through-example-part-1-f5b2dc71de06">codeburst: Redux-Actions through Example: Part 1</a>`,
    id: 5,
  },
  { 
    logo: 'redux',
    question: `Explain the role of Reducer`,
    answer: `Reducers are pure functions which specify how the application’s state changes in response to an ACTION. Reducers work by taking in the previous state and action, and then it returns a new state. It determines what sort of update needs to be done based on the type of the action, and then returns new values. It returns the previous state as it is, if no work needs to be done.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://redux.js.org/basics/reducers">Redux docs: Reducers</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://daveceddia.com/what-is-a-reducer/">daveceddia: What is a Reducer?</a>`,
    id: 6,
  },
  { 
    logo: 'redux',
    question: `What is the significance of Store in Redux?`,
    answer: `A store is a JavaScript object which can hold the application’s state and provide a few helper methods to access the state, dispatch actions and register listeners. The entire state/ object tree of an application is saved in a single store. As a result of this, Redux is very simple and predictable. We can pass middleware to the store to handle the processing of data as well as to keep a log of various actions that change the state of stores. All the actions return a new state via reducers.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://redux.js.org/basics/store">Redux docs: Store</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://egghead.io/lessons/react-redux-store-methods-getstate-dispatch-and-subscribe">egghead: Redux: Store Methods: getState(), dispatch(), and subscribe()</a>`,
    id: 7,
  },
  { 
    logo: 'redux',
    question: `How is Redux different from Flux?`,
    answer: `<storng>Flux</strong>
    <li>The Store contains state and change logic</li>
    <li>There are multiple stores</li>
    <li>There are multiple stores</li>
    <li>Has singleton dispatcher</li>
    <li>React components subscribe to the store</li>
    <li>State is mutable</li>
    <br/><br/><strong>Redux</strong>
    <li>Store and change logic are separate</li>
    <li>There is only one store</li>
    <li>Single store with hierarchical reducers</li>
    <li>No concept of dispatcher</li>
    <li>Container components utilize connect</li>
    <li>State is immutable</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://medium.com/@tkssharma/facebooks-flux-vs-redux-d02b5348cc17">medium: Facebook’s Flux VS Redux</a>`,
    id: 8,
  },
  { 
    logo: 'redux',
    question: `What are the advantages of Redux?`,
    answer: `<li><strong>Predictability of outcome</strong> – Since there is always one source of truth, i.e. the store, there is no confusion about how to sync the current state with actions and other parts of the application</li>
    <li><strong>Maintainability</strong> – The code becomes easier to maintain with a predictable outcome and strict structure</li>
    <li><strong>Server-side rendering</strong> – You just need to pass the store created on the server, to the client side. This is very useful for initial render and provides a better user experience as it optimizes the application performance</li>
    <li><strong>Developer tools</strong> – From actions to state changes, developers can track everything going on in the application in real time</li>
    <li><strong>Community and ecosystem</strong> – Redux has a huge community behind it which makes it even more captivating to use. A large community of talented individuals contribute to the betterment of the library and develop various applications with it</li>
    <li><strong>Ease of testing</strong> – Redux’s code is mostly functions which are small, pure and isolated. This makes the code testable and independent</li>
    <li><strong>Organization </strong> – Redux is precise about how code should be organized, this makes the code more consistent and easier when a team works with it</li>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://www.fullstackreact.com/articles/redux-with-mark-erikson/">fullstackreact: Redux and Why it's Good For You</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://medium.freecodecamp.org/whats-so-great-about-redux-ac16f1cc0f8b">freecodecamp: What’s So Great About Redux?</a>`,
    id: 9,
  },
  { 
    logo: 'redux',
    question: `How is state changed in Redux? `,
    answer: `The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://redux.js.org/api/store">Redux docs: Store</a>`,
    id: 10,
  },

  // { 
  //   logo: 'redux',
  //   question: `QUESTION`,
  //   answer: `ANSWER`,
  //   reference: `<a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>
  //   <br/><a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>`,
  //   id: 000000,
  // },
]

module.exports.redux = redux