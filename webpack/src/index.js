import './style.scss'
import router from './router'
import connect from './socket'

router(window.location)
connect()