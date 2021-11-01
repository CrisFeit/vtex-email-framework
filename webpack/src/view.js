
function switchChange(target) {
    const storage = storageFactory(target.value, target.checked)
    setStorage(storage)
}

function switchActive() {
    const storage = JSON.parse(getStorage())
    for (let key in storage) {
        if (storage[key]) {
            const toggle = document.getElementById(key)
            if (toggle) toggle.click()
        }
    }
}

function getStorage() {
    return localStorage.getItem('email-factory')
}

function setStorage(storage) {
    localStorage.setItem('email-factory', JSON.stringify(storage))
}

function storageFactory(key, value) {
    const storage = !getStorage() ? {} : JSON.parse(getStorage())
    storage[key] = value
    return storage
}

function dashboard() {
    if (getStorage()) switchActive()
    document.onchange = ({ target }) => switchChange(target)
}

function partials() {
    const partials = [...document.querySelectorAll('.partial')]
    if (partials.length >= 1) {
        partials.forEach(partial => {
            const children = partial.innerHTML
            partial.insertAdjacentHTML('beforebegin', children)
            partial.remove()
        })
    }
}
export function render(path, template) {

    document.body.innerHTML = template
    const title = document.body.querySelector('title')
    if (title) document.title = title.text

    if (path == "/") {
        dashboard()
    } else {
        partials()
        setTimeout(() => partials(), 500)
    }

}

export function error(status, template) {
    const errorPage = `
<div style="height:100vh;margin:auto;display:flex;align-items:center;justify-content:center">
    <h2 style="display:inline-block;margin:0;padding:10px 23px 10px 0;font-size:24px;font-weight:500;vertical-align:top;">${status}</h2>
    <svg viewBox="0 0 24 24" style="text-align:center;margin: auto 20px auto 0" width="50" height"50" xmlns="http://www.w3.org/2000/svg"><path d="M9.1 4.948a3.45 3.45 0 0 0-.398.014C6.32 5.15 5.373 6.375 4.802 6.9c-.572.525-1.656 1.763-2.376 1.545-.721-.217-.924-1.107-.67-1.381s.454-.225.613 0c.097.18.145.383.14.587a1.36 1.36 0 0 0 .438-.665.792.792 0 0 0-.443-1.017c-1.3-.659-2.139.514-2.26.787-.122.273-.336.707-.2 1.695.135.989.612 1.902 2.104 2.261a6.31 6.31 0 0 0 4.238-.495l4.41-1.84a5.408 5.408 0 0 1 .556-.101v9.864c0 .506.316.913.708.913.391 0 .707-.407.707-.913V8.29a5.408 5.408 0 0 1 .437.088l4.41 1.84a6.31 6.31 0 0 0 4.238.494c1.492-.36 1.969-1.272 2.105-2.26.135-.989-.08-1.423-.2-1.696-.122-.273-.962-1.446-2.261-.787a.792.792 0 0 0-.443 1.017c.076.26.229.492.437.665a1.19 1.19 0 0 1 .141-.587c.159-.225.359-.274.613 0s.051 1.164-.67 1.382c-.72.217-1.804-1.02-2.376-1.546-.571-.525-1.518-1.75-3.9-1.938A3.45 3.45 0 0 0 12 6.653a3.45 3.45 0 0 0-2.9-1.705zm12.39 2.703v.004l.006.002c-.002-.002-.004-.004-.006-.004zm-18.98 0c-.002.002-.004.004-.006.004l.006-.001V7.65z"/></svg>
    <p style="display:inline-block;text-align:center;vertical-align:middle;font-size:24px">
        ${template.split('<pre>')[1].split('<br>')[0]}
    </p>
</div>
`
    document.body.innerHTML = errorPage
}