const promise = {}
promise['Wrap'] = (fn) => {
    //() => console.log('Hey..')
    return () => {
        const args = [].slice.call(arguments)
        return new Promise((resolve, reject) => {
            fn.apply(null, args.concat((err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            }))
        })
    }
};


promise.Wrap(() => console.log('Hey..'))

var a = []
console.log(a.slice().call({ a: 1, b: 2 }))