function handleCommentForm(event){
    event.preventDefault()
    const comment = document.querySelector("#comment-input").value
    console.log(event.target)
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id)
        fetch("/api/comments", {
            method: 'POST',
            body: JSON.stringify({ comment, id }),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(response => console.log(response))
      }
}

document.querySelector(".comment-form").addEventListener("submit", handleCommentForm)

