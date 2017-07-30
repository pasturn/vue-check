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
                check(binding, vnode)
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

    function check (binding, vnode) {
        var name = binding.arg,
            rules = binding.value,
            value = vnode.data.domProps.value;
        if (!name) {
            throw new ReferenceError('plese set a name for which field need valiade')
        }
        Array.isArray(rules.type) ? rules.type : rules.type
        switch(String.toLowerCase(rules.type)){
            case 'string':
                if (typeof rules === 'string') {

                }
                break
        }
    }

}

export default {
    install,
    version: '__VERSION__'
}