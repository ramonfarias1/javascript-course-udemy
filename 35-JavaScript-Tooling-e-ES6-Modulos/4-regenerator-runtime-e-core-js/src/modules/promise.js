function promise() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Sou a promise');
            resolve();
        }, 1000);
    });
};

export default async () => {
    await promise();
    console.log('terminou!')
};