const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {

    const error = false

    if(error) {
      return onError(new Error('Error in login!'))
    }

    console.log('user logged')
    onSuccess({ email })
  }, 1500); //função callback
  console.log('after setTimeout')
}

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(['video1', 'video2', 'video3'])
  }, 2000);
}

const getVideoDatails = (video, callback) => {
  setTimeout(() => {
    callback({ title: 'video title'})
  }, 2500);
}

const user = loginUser('allan@gmail.com', '12345', (user) => {
  getUserVideos(user.email, (videos) => {
    getVideoDatails(videos[0], (videoDetail) => {
      console.log({videoDetail})
    })
  })
}, (error) => {
  console.log(error)
})