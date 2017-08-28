import initDirective from './initDirective'
import pubSub from './pubSub'

let Vue;

const install = (_Vue, option = {}) => {
	if (Vue) {
			throw new ReferenceError('VueCheck should only called once')
			return
	}
	Vue = _Vue

	// var result = {}
		
	Vue.directive('check', initDirective(Vue, option))
	// Vue.prototype.checkError = result
}

export default {
    install,
    version: '__VERSION__'
}