const checkSocialNetwork = (media: string) => {
  if (media.includes('facebook')) {
    return 'facebook'
  }
  if (media.includes('instagram')) {
    return 'instagram'
  }
  if (media.includes('twitter')) {
    return 'twitter'
  }
  if (media.includes('linkedin')) {
    return 'linkedin'
  }
  if (media.includes('youtube')) {
    return 'youtube'
  }
  return 'other'
}

export default checkSocialNetwork
