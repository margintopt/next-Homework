import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  clearEventBubble,
  getLeft,
  getTop,
  isInPath,
  scroll,
} from '@/app/utils';
import Cells from './Cells';
import styles from './schedule.module.css';

const cols = 48;
const rows = 7;

const InitSelectZoom = {
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  display: 'none',
};

export interface ScheduleRef {
  setSelectedCells: (data: string[], reset: boolean) => void;
}

interface ScheduleParams {
  onSelected: (positions: string[]) => void;
}

const Schedule = forwardRef<ScheduleRef, ScheduleParams>(
  ({ onSelected }, ref) => {
    const [cells, setCells] = useState(
      Array.from(new Array(rows)).map((item) =>
        Array.from(new Array(cols).keys())
      )
    );

    const [hoverCells, setHoverCells] = useState<string[]>([]);

    const [selectedCells, setSelectedCells] = useState<string[]>([]);

    const allCellsElements = useRef<HTMLElement[]>([]);

    const [selectZoom, setSelectZoom] = useState(InitSelectZoom);

    const [selectedZoomElements, setSelectedZoomElements] = useState<
      HTMLElement[]
    >([]);

    const [selectZoomStartX, setSelectZoomStartX] = useState<number>(0);

    const [selectZoomStartY, setSelectZoomStartY] = useState<number>(0);

    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

    const selectionTable = useRef<HTMLTableElement | null>(null);

    useImperativeHandle(ref, () => ({
      setSelectedCells: (data, reset) => {
        reset ? setSelectedCells([]) : setNotRepeatSelectedCells(data);
      },
    }));

    useEffect(() => {
      allCellsElements.current = [
        // @ts-ignore
        ...selectionTable.current!.getElementsByTagName('td'),
      ];
    }, []);

    useEffect(() => {
      onSelected && onSelected(selectedCells);
    }, [selectedCells]);

    const addHoverClass = (position: string) => {
      setHoverCells((prevState) => prevState.concat(position));
    };

    const removeHoverClass = (position: string) => {
      setHoverCells((prevState) =>
        prevState.filter((item) => item !== position)
      );
    };

    const setNotRepeatSelectedCells = (position: string | string[]) => {
      setSelectedCells((prevState) => {
        return Array.from(new Set(prevState.concat(position)));
      });
    };

    const down = (e: React.MouseEvent) => {
      clearEventBubble(e);
      const { clientX, clientY } = e;
      const top = getTop(e.currentTarget);
      const left = getLeft(e.currentTarget);
      const { scrollTop, scrollLeft } = scroll();

      const startX = clientX - left + scrollLeft;
      const startY = clientY - top + scrollTop;

      setSelectZoomStartX(startX);
      setSelectZoomStartY(startY);
      setSelectZoom((prevState) => {
        return {
          ...prevState,
          left: startX,
          top: startY,
        };
      });
      setIsMouseDown(true);
    };
    const move = useCallback(
      (e: React.MouseEvent) => {
        clearEventBubble(e);
        if (!isMouseDown) return;

        const top = getTop(e.currentTarget);
        const left = getLeft(e.currentTarget);
        const { scrollTop, scrollLeft } = scroll();

        const { clientX, clientY } = e;
        const _x = clientX - left + scrollLeft;
        const _y = clientY - top + scrollTop;

        setSelectZoom({
          width: Math.abs(_x - selectZoomStartX),
          height: Math.abs(_y - selectZoomStartY),
          top: _y > selectZoomStartY ? selectZoomStartY - 1 : _y + 1,
          left: _x > selectZoomStartX ? selectZoomStartX - 1 : _x + 1,
          display: 'block',
        });
        setSelectedZoomElements([]);
        setHoverCells([]);

        allCellsElements.current.forEach((item) => {
          if (isInPath(item, selectZoom)) {
            const position = item.dataset['position']!;
            addHoverClass(position);
            setSelectedZoomElements((prevState) => prevState.concat(item));
          }
        });
      },
      [isMouseDown, selectZoom, selectZoomStartX, selectZoomStartY]
    );
    const up = (e: React.MouseEvent) => {
      clearEventBubble(e);
      const positions = selectedZoomElements
        .filter((item) => isInPath(item, selectZoom))
        .map((item) => {
          return item.dataset['position']!;
        });
      setNotRepeatSelectedCells(
        positions.length ? positions : (e.target as any).dataset['position']
      );
      setSelectZoom(InitSelectZoom);
      setHoverCells([]);
      setIsMouseDown(false);
    };

    const over = (e: React.MouseEvent, position: string) => {
      clearEventBubble(e);
      addHoverClass(position);
    };

    const leave = (e: React.MouseEvent, position: string) => {
      clearEventBubble(e);

      !isMouseDown && removeHoverClass(position);
    };

    return (
      <div
        className={styles.wrapper}
        style={{
          width: cols * 15,
          height: rows * 50,
        }}
        onMouseDown={down}
        onMouseMove={move}
        onMouseUp={up}
      >
        <div className={styles.zoom} style={selectZoom} />
        <table
          className={styles.content}
          border={1}
          cellSpacing='0'
          cellPadding='0'
          ref={selectionTable}
        >
          <tbody>
            <Cells
              cells={cells}
              hoverCells={hoverCells}
              selectedCells={selectedCells}
              over={over}
              leave={leave}
            ></Cells>
          </tbody>
        </table>
      </div>
    );
  }
);

export default Schedule;
