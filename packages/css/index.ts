// \s 匹配空白字符
// ? 非贪婪匹配

export function getCssVar(str: string, namespace = '') {
  // return re.exec(str)
  const varRe = new RegExp(`\svar\(--${namespace}(.*?)\)`, 'g')
  return str.match(varRe)
}

/**
 * replace css var
 * var(--el-test) to getCssVar('test')
 * @param str
 * @param namespace
 * @returns
 */
export function replaceCssVar(str: string, namespace = 'el') {
  const varRe = /\svar\(--(.*?)\)/g

  function removeNamespace(match: string, p1: string) {
    if (p1.startsWith(`${namespace}-`))
      return ` getCssVar('${p1.replace(`${namespace}-`, '')}')`
    else
      return match
  }

  return str.replace(varRe, removeNamespace)
}
