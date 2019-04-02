const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('hello I am a %s string!!', ':-)');

    // Styled
    console.log('%c I am some great text', 'font-size: 90px; color: green; background-color: red; text-shadow: 2px 2px 4px #bada55;');

    // warning!
    console.warn('Oh NO!');

    // Error :|
    console.error('ERROR!');
    // Info
    console.info('Information');

    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
    console.clear();

    // Grouping together
    dogs.forEach(dog => {
      console.group(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age * 7} years old`);
      console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Elijah');
    console.count('Elijah');
    console.count('Elijah');
    console.count('Elijah');
    console.count('Elijah');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/sayhelloelijah')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);