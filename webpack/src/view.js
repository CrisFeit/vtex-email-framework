

export default function dashboard() {

    if (getstorage()) switchActive()
    document.onchange = ({ target }) => switchChange(target)

    function switchChange(target) {
        storageFactory(target.value, target.checked)
    }

    function switchActive() {
        const storage = JSON.parse(getstorage())
        for (let key in storage) {
            if (storage[key]) {
                document.getElementById(key).click()
            }
        }
    }

    function getstorage() {
        return localStorage.getItem('email-factory')
    }

    function setStorage(storage) {
        localStorage.setItem('email-factory', JSON.stringify(storage))
    }

    function storageFactory(key, value) {
        const storage = !getstorage() ? {} : JSON.parse(getstorage())
        storage[key] = value
        setStorage(storage)
    }
}