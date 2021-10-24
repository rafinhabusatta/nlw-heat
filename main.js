const linksSocialMedia = {
  github: 'rafinhabusatta',
  youtube: 'rocketseat',
  facebook: 'rafabusatta',
  instagram: 'rafabusatta_',
  twitter: 'rocketseat'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userProfile.src = data.avatar_url
    })
  //vai na url e pega o que a url responder, nesse caso um json
  //usamos também promises
}

getGitHubProfileInfos()
