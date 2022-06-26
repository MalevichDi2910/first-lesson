type TopCarsType = {
    topCars: ObjectTopCars[]
}

type ObjectTopCars = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: TopCarsType) => {
    return (
        <>
            <table>
                <tr>
                    <th>Number</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {props.topCars.map((obj, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{obj.manufacturer}</td>
                            <td>{obj.model}</td>
                        </tr>
                    )
                })}

                </table>
        </>
    );

};