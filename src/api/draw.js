const draw = (calories) => {
  const canvas = document.createElement('canvas')
  canvas.width = 1200;
  canvas.height = 627;
  const context = canvas.getContext("2d");

  const post = {
    title: `${calories} calories ${calories > 2500 ? ':)' : ':('}`
  }

  context.fillStyle = "#764abc";
  context.fillRect(0, 0, 1200, 627);

  context.font = "bold 35pt 'Arial'";
  context.textAlign = "center";
  context.fillStyle = "#fff";
  context.fillText(post.title, 600, 170);

  canvas.toBlob(blob => {
    let data = window.URL.createObjectURL(blob)
    let link = document.createElement('a')
    link.href = data
    link.download = 'calories.jpg'
    link.click()
  }, 'image/jpeg')
}

export {
  draw
}