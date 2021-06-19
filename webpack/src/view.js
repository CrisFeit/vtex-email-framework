
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
    }

}

export function error(status, template) {
    const errorPage = `
<div style="margin:50px auto;">
    <h2 style="display:inline-block;border-right:1px solid rgba(0, 0, 0,.3);margin:0;margin-right:20px;padding:10px 23px 10px 0;font-size:24px;font-weight:500;vertical-align:top;">${status}</h2>
    <p style="display:inline-block;text-align:center;line-height:49px;height:49px;vertical-align:middle;">
        ${template.split('<pre>')[1].split('<br>')[0]}
    </p>
</div>
`
    document.body.innerHTML = errorPage
}