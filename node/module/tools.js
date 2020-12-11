exports.formatApi = function(api){
  return  `http://dev.boxuegu.com/${api}`
}
exports.get = function(){
  console.log('get方法')
}

exports.getMime = function(pathname){
  switch(pathname){
    case '.html':
      return 'text/html'
    case '.css':
      return 'text/css'
    case '.js':
      return 'text/javascript'
    default:
      return 'text/html'
  }
}


// commonjs 的 2种暴露属性的方法 

// exports.formatApi = formatApi 

// module.exports = get 