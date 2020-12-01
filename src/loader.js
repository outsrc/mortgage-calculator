;(function () {
  var w = window
  var mc = w.mortgage_calculator
  if (typeof mc === 'object') {
    mc.renderMortgageCalculator(document.getElementById('root'))
  } else {
    var d = document
    var l = function () {
      var s = d.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = 'mortgage-calculator.js'
      var x = d.getElementsByTagName('script')[0]
      x.parentNode.insertBefore(s, x)
      s.onload = () => {
        w.mortgage_calculator.renderMortgageCalculator(document.getElementById('root'))
      }
    }
    if (document.readyState === 'complete') {
      l()
    } else if (w.attachEvent) {
      w.attachEvent('onload', l)
    } else {
      w.addEventListener('load', l, false)
    }
  }
})()
