import dashboard from './view'

const router = ({ search, pathname }) => {
    console.log('router !')
    const pathName = search ? `/${search.split('?')[1]}` : pathname
    fetch(`http://localhost:5050${pathName}`)
        .then(res => res.text())
        .then(data => {
            console.log('request !')
            document.body.innerHTML = data
            const title = document.body.querySelector('title')
            if(title){
                document.title = title.text
            }
            if (pathName == "/") {
                dashboard()
            }
        })
}

window.onpopstate = () => router(window.location)

export default router