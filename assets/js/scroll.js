// const link = document.querySelectorAll(".c-notice__link");

// link.addEventListener('click', clickHandler);


// function clickHandler(e) {
//   e.preventDefault();
//   const href = e.currentTarget.getAttribute("href");
//     document.querySelector(href).scrollIntoView({
//         behavior: 'smooth'
//       });
// }

let button = document.getElementById('link');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.currentTarget.getAttribute('href');

        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
        });
    });