import {  render, error } from './view'

export default async function router({ search, pathname }) {

    const path = search ? `/${search.split('?')[1]}` : pathname
    const response = await fetch(`http://localhost:5050${path}`)
    const template = await response.text()

    if (response.status === 200) {
        render(path, template)
    } else {
        error(response.status, template)
    }

}