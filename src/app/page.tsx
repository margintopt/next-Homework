'use client';
import { ScheduleRef } from './components/Schedule';
import Schedule from './components/Schedule';
import { useMemo, useRef, useState } from 'react';
import { isEqual } from 'lodash';
import {
  generateArray,
  getContinuousNumber,
  getIntAndRemainder,
} from '@/app/utils';
import styles from './page.module.css';

interface Week {
  key: string;
  name: string;
  date: string[];
}

const MAP: Record<string, string> = {
  '0': '一',
  '1': '二',
  '2': '三',
  '3': '四',
  '4': '五',
  '5': '六',
  '6': '日',
};
export default function Home() {
  const [week, setWeek] = useState<Week[]>([]);
  const scheduleRef = useRef<ScheduleRef>(null);
  const positionsCacheRef = useRef<string[]>([]);
  const selected = (positions: string[]) => {
    if (!isEqual(positions, positionsCacheRef.current)) {
      positionsCacheRef.current = positions;
      const data = Object.keys(MAP).map((key) => {
        const continuousNumberArr = getContinuousNumber(
          positions
            .filter((item) => item.startsWith(key))
            .map((item) => Number(item.split('-')[1]))
            .sort((a, b) => a - b)
        );
        return {
          key,
          name: '星期' + MAP[key],
          date: continuousNumberArr.map((item) => {
            if (item.length === 1) {
              const { int, remainder } = getIntAndRemainder(item[0]);
              return remainder
                ? `${int}:30 ~ ${int + 1}:00`
                : `${int}:00 ~ ${int}:30`;
            } else {
              const { int: firstInit, remainder: firstRemainder } =
                getIntAndRemainder(item[0]);
              const { int: lastInit, remainder: lastRemainder } =
                getIntAndRemainder(item[item.length - 1]);
              const first = firstRemainder
                ? `${firstInit}:30`
                : `${firstInit}:00`;
              const last = lastRemainder
                ? `${lastInit + 1}:00`
                : `${lastInit}:30`;

              return `${first} ~ ${last}`;
            }
          }),
        };
      });
      setWeek(data);
    }
  };

  const data = useMemo(() => {
    return week.filter((item) => !!item.date.length);
  }, [week]);

  const gen = (week: number[]) => {
    scheduleRef.current?.setSelectedCells(
      week
        .map((w) => {
          return generateArray(18, 41).map((i) => `${w}-${i}`);
        })
        .flat(),
      false
    );
  };

  return (
    <div>
      <div className={styles.table}>
        <table border={0} cellSpacing='0' cellPadding='0'>
          <tbody>
            <tr>
              <td>
                <ul className={styles.tableRow}>
                  <li>星期\时间</li>
                  <li>
                    <h3>00:00 - 12:00</h3>
                    <ul>
                      <li>0</li>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                      <li>8</li>
                      <li>9</li>
                      <li>10</li>
                      <li>11</li>
                    </ul>
                  </li>
                  <li>
                    <h3>12:00 - 24:00</h3>
                    <ul>
                      <li>12</li>
                      <li>13</li>
                      <li>14</li>
                      <li>15</li>
                      <li>16</li>
                      <li>17</li>
                      <li>18</li>
                      <li>19</li>
                      <li>20</li>
                      <li>21</li>
                      <li>22</li>
                      <li>23</li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ display: 'flex' }}>
                <ul className={styles.tableCol}>
                  <li>星期一</li>
                  <li>星期二</li>
                  <li>星期三</li>
                  <li>星期四</li>
                  <li>星期五</li>
                  <li>星期六</li>
                  <li>星期日</li>
                </ul>
                <div>
                  <Schedule onSelected={selected} ref={scheduleRef} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className={styles.bottom}>
          <span>已选择时间段</span>
          <span>
            <button
              style={{ marginRight: 8 }}
              onClick={() => {
                scheduleRef.current?.setSelectedCells([], true);
              }}
            >
              Clear
            </button>
            <button
              style={{ marginRight: 8 }}
              onClick={() => {
                gen([0, 1, 2, 3, 4]);
              }}
            >
              工作日黄金时间
            </button>
            <button
              onClick={() => {
                gen([5, 6]);
              }}
            >
              休息日黄金时间
            </button>
          </span>
        </div>

        <div className={styles.date}>
          {data.map((item) => (
            <div key={item.key}>
              <span style={{ marginRight: 28 }}>{item.name}</span>

              {item.date.map((date, index) => (
                <span key={date}>
                  <span>{date}</span>
                  {index !== item.date.length - 1 && <span>、</span>}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
