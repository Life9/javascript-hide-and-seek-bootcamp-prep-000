function getFirstSelector(selector) {
    const select = document.querySelector(selector);
    return select
  }


function nestedTarget(){
    const select = document.getElementById('nested').querySelector('.target');
    return select
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++) {
    var select = parseInt(lis[i].innerHTML) + n
    lis[i].innerHTML = select.toString()
  }
}


function deepestChild(){
  var select = document.getElementById('grand-node')
    for (let i = 0, l = select.length; i < l; i++) {
      select[i].innerHTML = querySelector(i)
    }
    return select
  }
  