const videoElement = document.getElementById('video')
const button = document.getElementById('button')

async function selectStream() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = stream
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (e) {
    console.log(e)
  }

}

button.addEventListener('click', async () => {
  button.disabled = true
  await videoElement.requestPictureInPicture()
  button.disabled = false
})

selectStream()