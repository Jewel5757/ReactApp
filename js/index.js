// ReactDOM.render(React.createElement('input', {
//    placeholder: 'help text',
//    onClick: () => console.log('clicked'),
//    onMouseEnter: () => console.log('mouse over'),
// }), document.getElementById('app'))


const inputClick = () =>console.log('clicked')
const mouseOver = () =>console.log('Mouse Over')


const helpText = "help text"

const elements = (<div>
    <h1>{helpText}</h1>
<input placeholder={helpText}
 onClick={inputClick} onMouseOver={mouseOver} 
/>
<p>{helpText == "help text!" ? "Yes" : "No" }</p>
</div>
)

const app = document.getElementById("app")

ReactDOM.render(elements, app)