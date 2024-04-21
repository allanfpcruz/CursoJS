const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true
      if(error) {
        reject(new Error('Error in login!'))
      }
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

//com async e await
const displayUser = async () => {
  try {
    const user = await loginUser('allan@gmail.com', '12345')
    const videos = await getUserVideos(user.email)
    const videoDetail = await getVideoDetail(videos[0])
  } catch (error) {
    console.log(error)
  }
}

displayUser()