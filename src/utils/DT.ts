const debounce = (fn: Function, time: number) => {
    let timer: any = null
    return (...args: any) => {
        if (timer) {
            clearInterval(timer)
        }
        timer = setTimeout(() => {
            fn(...args)
        }, time);
    }
}

const throttle = (fn: Function, time: number) => {
    let timer: any = null
    return (...args: any) => {
        if (!timer) {
            fn(...args)
            timer = setInterval(() => {
                timer = null
                fn(...args)
            }, time)
        }
    }
}

export {
    debounce, throttle
}