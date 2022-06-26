import React, {useState} from "react";

type MoneyType = {
    money: Array<objMoney>
}

type objMoney = {
    banknots: string,
    value: number,
    number: string
}

type FilterType = 'all' | 'dollars' | 'rubles';

export const NewComponent = (props: MoneyType) => {
    const[filter, setFilter] = useState<FilterType>('all');
    let currentMoney = props.money;

    if (filter === 'dollars') {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === 'dollars');
    }
    if (filter === 'rubles') {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === 'rubles');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <div>
                <ul>
                    {currentMoney.map((objFromMoneyApp, index) => {
                        return (
                            <li key={index}>
                                <span>{objFromMoneyApp.banknots}</span>
                                <span>{objFromMoneyApp.value}</span>
                                <span>{objFromMoneyApp.number}</span>
                            </li>
                        )
                    })}
                </ul>

                <div style={{marginLeft: "35px"}}>
                    <button onClick={()=>onClickFilterHandler("all")}>all</button>
                    <button onClick={()=>onClickFilterHandler("rubles")}>ruble</button>
                    <button onClick={()=>onClickFilterHandler("dollars")}>dollar</button>
                </div>
        </div>
    );
};

