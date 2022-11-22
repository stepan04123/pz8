const selCont = document.querySelector('.select')

const arr = [
    {
        value: "Russia",
        label: 'Russia',
    },
    {
        value:"China",
        label:"China",
    },
    {
        value:"Japan",
        label:"Japan",
    }
]

const sel = document.createElement('select')

for(let [index, item] of arr.entries()) {
    let el = document.createElement('option')
    index == 0 ? el.setAttribute('selected', '') : false
    el.value = item.value
    el.innerHTML = item.label

   sel.appendChild(el)
    console.log(index , item)
}
selCont.appendChild(sel)