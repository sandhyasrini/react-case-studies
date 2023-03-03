const data =
    [
        {
            id: 1,
            name: 'almay'
        },
        {
            id: 2,
            name: 'annabelle'
        },
        {
            id: 3,
            name: 'benefit'
        },
        {
            id: 4,
            name: 'Biossance'
        },
        {
            id: 5,
            name: 'Cerave'
        },
        {
            id: 6,
            name: 'Cetaphil'
        },
        {
            id: 7,
            name: 'Chanel'
        },
        {
            id: 8,
            name: 'Cosrx'
        }]



export default function sendData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 500)
    })
}

export function debounce(func, timeout = 300){
    let timer ;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }