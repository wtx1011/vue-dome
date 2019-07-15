// 数字补零
function prefixZero (str) {
  return `00${str}`.substr(str.length)
}
export function formatDate (time, fmt) {
  let date = new Date(+time * 1000)

  fmt = fmt || 'yyyy-MM-dd hh:mm:ss'

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : prefixZero(str))
    }
  }

  return fmt
}
