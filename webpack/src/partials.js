export function partials(){
    const partials = [...document.querySelectorAll('.partial')]
    if(partials.length >= 1){
        partials.forEach(partial => {
            const children = partial.innerHTML
            partial.insertAdjacentHTML('beforebegin',children)
            partial.remove()
        })
    }
}