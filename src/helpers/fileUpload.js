export const actualizarArchivo = async (file, id) => {
    try {
        const url = `${process.env.REACT_APP_URL}/upload/${id}`;
        const formData = new FormData();
        formData.append('imagen', file);
        const resp = await fetch(url, {
            method: 'PUT',
            headers: {
                token: localStorage.getItem('token') || ''
            },
            body: formData
        });

        const data = await resp.json();
        console.log('resp crear buck ', data);
        if (data.ok) {
            return true;
        } else {
            console.log(data.msg);
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const mostrarImagen = async (file) => {
    let result;
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
        result = reader.result;
    };
    console.log(result);
    return result;
};
