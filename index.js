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
