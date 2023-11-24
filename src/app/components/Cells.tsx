import classNames from 'classnames';
import React, { memo } from 'react';
import { isEqual } from 'lodash';
import styles from './cells.module.css';

interface CellsParams {
  cells: number[][];
  hoverCells: string[];
  selectedCells: string[];
  over: (e: React.MouseEvent, position: string) => void;
  leave: (e: React.MouseEvent, position: string) => void;
}

const Cells: React.FC<CellsParams> = ({
  cells,
  hoverCells,
  selectedCells,
  over,
  leave,
}) => {
  return (
    <>
      {cells.map((rows, row) => {
        return (
          <tr key={`row-${row}`} className={styles.content}>
            {rows.map((col) => {
              return (
                <td
                  key={`col-${col}`}
                  className={classNames({
                    [styles.cell]: true,
                    [styles.hover]: hoverCells.includes(`${row}-${col}`),
                    [styles.active]: selectedCells.includes(`${row}-${col}`),
                  })}
                  onMouseOver={(e) => {
                    over(e, `${row}-${col}`);
                  }}
                  onMouseLeave={(e) => {
                    leave(e, `${row}-${col}`);
                  }}
                  data-position={`${row}-${col}`}
                ></td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

export default memo(Cells, (p, c) => {
  return (
    isEqual(p.hoverCells, c.hoverCells) &&
    isEqual(p.selectedCells, c.selectedCells)
  );
});
