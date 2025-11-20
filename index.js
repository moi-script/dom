// const test = document.div['test-attribute'];

// test.className = 'hello';
// test.setAttribute('class', 'hi');


const innerChildEach = Array.from({ length: 2 }, () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'innerChild');

    return div;
})


const elements = Array.from({ length: 10 }, (_, i) => {
    const newTag = document.createElement('p');
    newTag.setAttribute('class', `test-${i}`);

    innerChildEach.forEach((val) => {
        const clone = val.cloneNode(true); 
        newTag.appendChild(clone);
        console.log('Inner child added', val);

    });

    return newTag;
});



elements.forEach(val => {
    document.body.appendChild(val) // how to set their attribute while adding 
    console.log('Added');
}) 
