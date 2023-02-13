import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.headerProp}</h1>
//         <h2>{this.props.contentProp}</h2>
//       </div>
//     )
//   }
// }

// function App(props) {
//   return (
//     <div>
//        <h1>{props.headerProp}</h1>
//        <h2>{props.contentProp}</h2>
//     </div>
//   );
// }

// const article = {
//   headerProp: '',
//   contentPro: ''
// }

// function App(props) {
//   return (
//     <div>
//         <h1>{props.article.headerProp}</h1>
//         <h2>{props.article.contentProp}</h2>
//     </div>
//   );
// }

function App(props) {
  return (
     <div>
        <h1>{props.headerProp}</h1>
        <h2>{props.contentProp}</h2>
     </div>
  );
}

App.defaultProps = {
headerProp: "Header from props...",
contentProp:"Content from props..."
}

export default App;
