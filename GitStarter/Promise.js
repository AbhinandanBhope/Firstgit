let posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                posts.pop();
                resolve();
            } else {
                reject('No post to delete.');
            }
        }, 1000);
    });
}

createPost({title: 'Post 1', content: 'This is the content of post 1.'})
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log('Posts:', posts);
        console.log('Last activity time:', lastActivityTime);
        return createPost({title: 'Post 2', content: 'This is the content of post 2.'});
    })
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log('Posts:', posts);
        console.log('Last activity time:', lastActivityTime);
        return createPost({title: 'Post 3', content: 'This is the content of post 3.'});
    })
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log('Posts:', posts);
        console.log('Last activity time:', lastActivityTime);
        return deleteLastPost();
    })
    .then(() => {
        console.log('Posts:', posts);
    })
    .catch((error) => {
        console.log(error);
    });