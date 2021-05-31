export default (el) => {
  el.setAttribute('tabindex', '-1')
  el.focus()
  // Reason: https://axesslab.com/skip-links/#update-3-a-comment-from-gov-uk
  el.removeAttribute('tabindex')
  el.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  })
  return true
}
