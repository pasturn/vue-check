var pubSub = {},
    models = {};

    pubSub.subscribe = function (model, fn) {
      if (!models[model]) {
        models[model] = [];
      }
      models[model].push(fn)
    }

    pubSub.publish = function(model, args) {
      var fns = models[model]
      if (!fns || fns.length === 0) {return false}
      for (var i = 0, fn; fn = fns[i++];) {
        fn.call(this, args)
      }
    }

export default pubSub