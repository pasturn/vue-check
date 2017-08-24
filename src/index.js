import check from './check'

let Vue;

const install = (_Vue, option) => {
    if (Vue) {
        throw new ReferenceError('VueCheck should only called once')
        return
    }

    Vue = _Vue;

    Vue.directive('check', initDirective(option) )

    function initDirective (option) {
        var options = Object.assign({}, option)
        return {
            bind (el, binding, vnode, oldVnode) {
                console.log('bind')
                console.log(el)
            },
            inserted (el, binding, vnode, oldVnode) {
                console.log('inserted')
                console.log(el)
            },
            update (el, binding, vnode, oldVnode) {
                console.log('update')
                console.log(el, binding, vnode, oldVnode)
                bindCheck(binding, vnode)
            },
            componentUpdated (el, binding, vnode, oldVnode) {
                console.log('componentUpdated')
                console.log(el)
            },
            unbind (el, binding, vnode, oldVnode) {
                console.log('unbind')
                console.log(el)
            }
        }
    }

    function bindCheck (binding, vnode) {
        var name = binding.arg,
            rules = binding.value,
            value = vnode.data.domProps.value,
            result;
        if (!name) {
            throw new ReferenceError('plese set a name for which field need valiade')
        }
        if (Array.isArray(rules)) {
            result = rules.filter(item => !check(item, value))
        } else {
            result = check(rules, value)
        }
        console.log(result)
    }

}

export default {
    install,
    version: '__VERSION__'
}