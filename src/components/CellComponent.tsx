import React, { FC } from 'react'
import { Cell } from '../models/Cell'

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

export const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div className={`cell ${cell.color} ${selected ? "selected" : ''}`} onClick={() => click(cell)}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
        </div>
    )
}
