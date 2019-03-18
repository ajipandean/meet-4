function stylesheet(elemId, styleObj = {}) {
  let newObj = {}
  $.each(styleObj, (key, value) => {
    Object.assign(newObj, {[key]: value})
  })
  $(elemId).css(newObj)
}