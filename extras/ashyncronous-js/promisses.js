const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false
      if(error) {
        reject(new Error('Error in login!'))
      }
  
      console.log('user logged')
      resolve({email})
    }, 1000);
  })
}

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false
      if(error) {
        reject(new Error('Error in getVideo'))
      }

      resolve(['video1', 'video2', 'video3'])
    }, 2000);
  })
}

const getVideoDetail = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false
      if(error) {
        reject(new Error('Error in videoDetail'))
      }

      resolve({videoTitle: 'Title'})
    }, 2500);
  })
}

loginUser('allan@gmail.com', '12345')
  .then((user) => getUserVideos(user.email))
  .then((videos) => getVideoDetail(videos[0]))
  .then((videoDetail) => console.log(videoDetail))
  .catch((error) => console.log(error))

//promise all

const yt = new Promise((resolve) => {  //promisses sem parâmetro podem ser declaradas assim
  setTimeout(() => {
    resolve('videos from youtube')
  }, 2000);
}) 

const fb = new Promise((resolve) => {
  setTimeout(() => {
    resolve('posts from facebook')
  }, 3000);
})

Promise.all([yt, fb]).then((result) => {
  console.log(result)
})