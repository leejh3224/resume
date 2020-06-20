import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPenNib, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub)
library.add(faPenNib)
library.add(faLinkedin)
library.add(faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)
