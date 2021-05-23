
export function dashboard() {

    if (getStorage()) switchActive()
    document.onchange = ({ target }) => switchChange(target)
    
    function switchChange(target) {
        const storage = storageFactory(target.value, target.checked)
        setStorage(storage)
    }

    function switchActive() {
        const storage = JSON.parse(getStorage())
        for (let key in storage) {
            if (storage[key]) {
                const toggle = document.getElementById(key)
                if(toggle) toggle.click()
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
}