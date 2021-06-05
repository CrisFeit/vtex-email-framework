import { dashboard }from './view'
import { partials } from './partials'

export default async function router({ search, pathname }) {
    
    const path = search ? `/${search.split('?')[1]}` : pathname
    
    document.body.innerHTML = await (await fetch(`http://localhost:5050${path}`)).text()
    
    if (path == "/"){
        dashboard()
    }else{
        partials()
        const title = document.body.querySelector('title')
        if(title) document.title = title.text
    }
}