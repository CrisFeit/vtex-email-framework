export function partials(){
    const partials = [...document.querySelectorAll('.partial')]
    if(partials.length >= 1){
        partials.forEach(partial => {
            const childrens = partial.innerHTML
            partial.insertAdjacentHTML('beforebegin',childrens)
            partial.remove()
        })
    }
}