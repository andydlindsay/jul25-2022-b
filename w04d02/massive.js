const username = 'Alice';

const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("main-list").appendChild(node);

// const username = 'error?';
console.log('username', username);