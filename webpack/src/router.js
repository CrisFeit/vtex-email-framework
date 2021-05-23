import { dashboard }from './view'

export default async function router({ search, pathname }) {
    const path = search ? `/${search.split('?')[1]}` : pathname
    
    document.body.innerHTML = await (await fetch(`http://localhost:5050${path}`)).text()

    const title = document.body.querySelector('title')
    if(title) document.title = title.text
    if (path == "/") dashboard()
    
    const partials = [...document.querySelectorAll('.partial')]
    if(partials.length >= 1){
        partials.forEach(partial => {
            const childrens = partial.innerHTML
            partial.insertAdjacentHTML('beforebegin',childrens)
            partial.remove()
        })
    }
}