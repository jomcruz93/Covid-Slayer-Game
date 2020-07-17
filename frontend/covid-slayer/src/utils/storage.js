export function getFromStorage(key) {
  if (!key) {
    return null
  }
  try {
    const valueStr = localStorage.getItem(key)
    if (valueStr) {
      return JSON.parse(valueStr)
    }
    return null
  } catch (err) {
    return null
  }
}

export function setInStorage(key, obj) {
  if (!key) {
    console.error('Error: Key is missing!')
  }
  try {
    localStorage.setItem(key, JSON.stringify(obj))
  } catch (err) {
    console.error(err)
  }
}

export function arrayToTxtDownloadable(arr, fileName) {
  const blob = new Blob([arr.join('\n')], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = fileName
  link.href = url
  link.click()
}