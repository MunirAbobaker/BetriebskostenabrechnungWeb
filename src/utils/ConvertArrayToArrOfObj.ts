export function convertArrayToArrOfObj(Abrechnung: any) {
    let tmp = [];

    if(Abrechnung.length > 0 ) {
        tmp = [...Object.keys(Abrechnung[0])];
    }
    const  objArr = [];
    tmp.map(h => {
        let str2 = h.replace(/_/g, ' ');
        str2 = str2.replace(/ae/g, 'ä')
        const obj = {
            name: str2,
            prop: h
        }
        delete obj["typename"] 
        if(obj.prop !== "__typename" ) {
            objArr.push(obj);
        }
        return h
    })
    return objArr;
}
