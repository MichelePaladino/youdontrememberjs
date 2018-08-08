const react = [
  { 
    logo: 'react',
    question: `What happens when you call setState?`,
    answer: `The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component. This will kick off a process called reconciliation. The end goal of reconciliation is to, in the most efficient way possible, update the UI based on this new state. To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this tree, in order to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where absolutely necessary.`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/state-and-lifecycle.html">React docs: State and Lifecycle</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/understanding-react-setstate/">CSS-TRICKS: Understanding React 'setState'</a>`,
    id: 000000,
  },
  { 
    logo: 'react',
    question: `What’s the difference between an Element and a Component in React?`,
    answer: `Simply put, a React element describes what you want to see on the screen. Not so simply put, a React element is an object representation of some UI.

    <br/><br/>A React component is a function or a class which optionally accepts input and returns a React element (typically via JSX which gets transpiled to a createElement invocation).
    
    <br/><br/>For more info, check out <a rel="noopener noreferrer" target="_blank" href="https://tylermcginnis.com/react-elements-vs-react-components/">React Elements vs React Components</a>`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="https://tylermcginnis.com/react-elements-vs-react-components/">tylermcginnis: React Elements vs React Components</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html">React docs: React Components, Elements, and Instances</a>`,
    id: 000000,
  },
  { 
    logo: 'react',
    question: `QUESTION`,
    answer: `ANSWER`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>`,
    id: 000000,
  },
  { 
    logo: 'react',
    question: `QUESTION`,
    answer: `ANSWER`,
    reference: `<a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>
    <br/><a rel="noopener noreferrer" target="_blank" href="LINK">SOURCE: ARTICLE</a>`,
    id: 000000,
  },
]

module.exports.react = react