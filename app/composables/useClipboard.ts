export function useClipboard() {
  const isCopied = ref(false)

  const copyToClipboard = (text: string) => {
    return new Promise((resolve, reject) => {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          navigator.clipboard.writeText(text)
            .then(() => resolve(text))
        }
        catch (err) {
          reject(err)
        }
      }
      else {
        const textArea = document.createElement('textarea')
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        try {
          document.execCommand('copy')
          resolve(text)
        }
        catch (err) {
          reject(err)
        }
        finally {
          document.body.removeChild(textArea)
        }
      }
    })
  }

  return {
    isCopied,
    copyToClipboard,
  }
}
