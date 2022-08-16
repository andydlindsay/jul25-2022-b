// const node = document.createElement("li");
// const textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("main-list").appendChild(node);

// // const username = 'error?';
// console.log('username', username);

// document.getElementBy...

// $('#main-list > li'); // find an li
// $('<li>'); // create an li
// res.status(200).send();


// $(document).ready(() => {});
// $(() => {});

$(() => {
// $(document).ready(() => {

  const $node = $('<li>').text('Something Else');
  const $mainList = $('#main-list');

  $mainList.append($node);
  // $node.appendTo($mainList);

  // $mainList.prepend($node);
  // $node.prependTo($mainList);

  // grab the button
  const $button = $('#add-new-list-item');

  // add the click event listener to the button
  $button.on('click', () => {
    console.log('i got clicked!!');

    // get the input field
    const $input = $('#new-list-item');

    // grab the value from the input field
    const value = $input.val();

    // console.log('value', value);

    // create a new list with the value as it's text node
    const $li = $('<li>').text(value);

    $li.on('dblclick', () => {
      $li.remove();
    });

    // const $li = $(`<li>${value}</li>`);

    // prepend the new li to the main-list
    // $mainList.prepend($li);
    $li.prependTo($mainList);

    // clear the input field
    $input.val('');
    $input.focus();
  });

});

