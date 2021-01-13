import dashboard from './view'

const router = ({ search, pathname }) => {
    const pathName = search ? `/${search.split('?')[1]}` : pathname
    fetch(`http://localhost:5050${pathName}`)
        .then(res => res.text())
        .then(data => {
            document.body.innerHTML = data
            const title = document.body.querySelector('title')
            if(title){
                document.title = title.text
            }
            if (pathName == "/") {
                dashboard()
            }
            
            const partials = [...document.querySelectorAll('.partial')]
            if(partials.length >= 1){
                partials.forEach(partial => {
                    const childrens = partial.innerHTML
                    partial.insertAdjacentHTML('beforebegin',childrens)
                    partial.remove()
                })
            }

        })
}

window.onpopstate = () => router(window.location)

export default router