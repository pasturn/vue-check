import check from './check'
import pubSub from './pubSub'

export default function initDirective (Vue, option) {
  var options = Object.assign({}, option)

  return {
      bind (el, binding, vnode, oldVnode) {
        var modelname = binding.arg;
        vnode.context.$set(vnode.context.checkError, modelname, null)
        pubSub.subscribe (modelname, (args) => {
          vnode.context.$set(vnode.context.checkError, modelname, args)
        })
      },
      update (el, binding, vnode, oldVnode) {
        var modelname = binding.arg;
        pubSub.publish(modelname, bindCheck(binding, vnode))
      },
      unbind (el, binding, vnode, oldVnode) {
          console.log('unbind')
      }
  }

  function bindCheck (binding, vnode) {
    var modelname = binding.arg,
        rules = binding.value;
    if (!modelname) {
        throw new ReferenceError('plese set a name for which field need valiade')
    }
    var value = vnode.context[modelname]
    if (Array.isArray(rules)) {
        return rules.every(item => check(item, value))
    } else {
        return check(rules, value)
    }
  }
}