//  <div id="parent">
//    <div id="child">
//     <h1></h1>
//     <h2></h2>
//    </div>
//    <div id="child">
//     <h1></h1>
//     <h2></h2>
//    </div>
//  </div>

// React Object ==> HTML (browser Understands)


const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'im h1 tag'),
    React.createElement('h2', {}, 'im h1 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'im h1 tag'),
    React.createElement('h2', {}, 'im h1 tag'),
  ]),
]);

const heading = React.createElement(
  'h1',
  { id: 'name', class: 'data-display' },
  'Hello React World',
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);

// solve this we used jsx