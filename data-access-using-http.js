

/*let xhr = new XMLHttpRequest;
xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

xhr.open("GET", "http://5df2b5f39b71960014bf665a.mockapi.io/x", true);
xhr.send();*/

/*let user = {
    name: 'Nephtali Hernández',
    avatar: 'mark.jpg'
};

let promise = $.post(
    "http://5df2b5f39b71960014bf665a.mockapi.io/x", user
);

promise.then(
    data => console.log('data: ', data),
    error => console.log('error: ', error)
); */

/* $.get("http://5df2b5f39b71960014bf665a.mockapi.io/x",
    data => console.log('data: ', data)
); */

/*let promise = $.get("http://5df2b5f39b71960014bf665a.mockapi.io/x");

promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);*/


let form = document.getElementById('user-form');

form.addEventListener('submit', event => {

    let user = form.elements['user'];
    let avatarFile = form.elements['avatar-file'];
    //let userError = document.getElementById('user-error');    

    let posting = {
        user: user.value,
        avatarFile: avatarFile.value
    };

    let promise = $.post(
        "http://5df2b5f39b71960014bf665a.mockapi.io/x", posting
    );

    promise.then(
        data => console.log('success: ', data),
        error => console.log('error: ', error)  
    );
    /*userError.textContent = 'Invalid entry';
    userError.style.color = 'red';
    user.style.borderColor = 'red';
    user.focus()*/
    
    event.preventDefault();
});