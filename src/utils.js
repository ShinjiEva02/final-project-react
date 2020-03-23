export const guid = () => {
    const s4 = () =>
        Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const checkResponce = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
};

export const initialFormState = {
    name: '',
    phone: '',
    email: '',
    address: {
        city: '',
        street: '',
        suite: ''
    }
}