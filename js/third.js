const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1>My Dynamic Section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
        <li>Forth Item</li>
    </ul>
`

main.appendChild(section);