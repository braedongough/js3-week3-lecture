const body = document.querySelector('body')
const h3 = document.createElement('h3')
body.append(h3)

class Comment {
  constructor(comment, userName) {
    this.comment = comment
    this.userName = userName
    this.timestamp = new Date()
  }

  getComment() {
    return this.comment
  }

  editComment(newComment) {
    this.comment = newComment
  }

  render() {
    h3.innerHTML = this.comment
  }

  likeComment() {
    console.log(this)
  }
}

// const comment = new Comment(
//   'This was a great youtube video',
//   'braedongough',
//   new Date()
// )

// comment.editComment('This youtube video actually sucks!!!')

// console.log(comment.getComment())

const submit = document.querySelector('button')
const textarea = document.querySelector('textarea')

const comment = new Comment('', 'BRAEDON')

submit.addEventListener('click', () => {
  const content = textarea.value
  comment.editComment(content)
  comment.render()
})
