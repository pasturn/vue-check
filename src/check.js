export default function check (rule, value){
    var type = rule.type,
        regexp = rule.type;
    if (!type) {
         throw new ReferenceError('plese set a type for which field need valiade')
    }
    switch(type.toLowerCase()) {
        case 'string':
            return typeof value === 'string'
        case 'number':
            return  /^[0-9]+.?[0-9]*$/.test(value) 
        case 'boolean':
            return typeof value === 'boolean'
        case 'method':
            return typeof value === 'function'
        case 'regexp':
            if (regexp) {
                if (regexp instanceof RegExp) {
                    return regexp.test(value)
                } else {
                    var _regexp = new RegExp(regexp)
                    return _regexp.test(value)
                }
            } else {
                throw new ReferenceError('plese set a regexp rule for which field need valiade')
            }
        case 'integer':
            return typeof value === 'number' && value % 1 === 0
        case 'float':
            return /^(-?\\d+)(\\.\\d+)?$/.test(value)
        case 'array':
            return Array.isArray(value)
        case 'object':
            return value instanceof Object
        case 'date':
            return value instanceof Date
        case 'url':
            return /^(-?\\d+)(\\.\\d+)?$/.test(value)
        case 'email':
            return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,10}$/.test(value)
        case 'required':
            return !!value
        default:
            return true
    }
    
}