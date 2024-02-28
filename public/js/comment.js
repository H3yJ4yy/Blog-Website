async function handleCommentForm(event){
    event.preventDefault()
    const post = document.querySelector("#comment-input").value
    console.log(event.target)
    if (event.target.hasAttribute('data-id')) {
        const blog_id = event.target.getAttribute('data-id');
        // console.log(id)
        const response = await fetch("/api/comments", {
            method: 'POST',
            body: JSON.stringify({ post, blog_id }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          if(response.ok){
            document.location.reload()
          }else{
            console.log("failed")
          }
      }
}

document.querySelector(".comment-form").addEventListener("submit", handleCommentForm)

