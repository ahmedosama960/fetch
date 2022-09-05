let myPosts = JSON.parse(localStorage.getItem('posts'))

for(post of myPosts){
    createPost(post)
}

function createPost(post){
    let myDiv = document.createElement('div')
    let myHeader = document.createElement('h2')
    let myBody = document.createElement('p')
    let myBtn = document.createElement('button')
    myHeader.textContent = post.title
    myBody.textContent = post.body
    myBtn.textContent = 'Remove'
    myDiv.append(myHeader)
    myDiv.append(myBody)
    myDiv.append(myBtn)
    myBtn.setAttribute('value',post.id)
    myDiv.style.border="1px solid black"
    myDiv.style.padding = "5px"
    myDiv.style.marginBottom = '3px'
    document.body.append(myDiv)
}
