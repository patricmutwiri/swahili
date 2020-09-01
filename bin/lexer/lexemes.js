/** base level units to check for */
module.exports = {
  digits: /[0-9]/,
  alpha: /[A-Za-z_]/,
  dot: /\./,
  doubleQuotes: /"/,
  plus: /\+/,
  hyphen: /\-/,
  asterisk: /\*/,
  modulo: /%/,
  forwardSlash: /\//,
  backSlash: /\\/,
  caret: /\^/,
  leftParen: /\(/,
  rightParen: /\)/,
  leftSquare: /\[/,
  rightSquare: /\]/,
  leftCurly: /\{/,
  rightCurly: /\}/,
  dot: /\./,
  col: /:/,
  comma: /,/,
  ampersand: /&/,
  pipe: /\|/,
  exclamation: /!/,
  equals: /=/,
  leftArrow: /</,
  rightArrow: />/,
  lineEndings: /\r|\n|;/,
  spacesAndTabs: /\s|\t/, // ignored
  keywords: {
    let: 'wacha',
    if: 'kama',
    elif: 'au',
    else: 'sivyo',
    for: 'kwa',
    to: 'mpaka',
    in: 'katika',
    step: 'hatua',
    while: 'ambapo',
    function: 'shughuli',
    return: 'rudisha',
    continue: 'endelea',
    break: 'ondoka',
  },
};
